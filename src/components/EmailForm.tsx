import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { SendHorizontal, LoaderCircle } from "lucide-react";
import Toast, { type ToastType } from "./Toast";

const EmailForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [toast, setToast] = useState<ToastType | null>(null);
  const [loading, setLoading] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const nameValid = name.trim().length >= 2;
  const emailValid = emailRegex.test(email);
  const messageValid = message.trim().length >= 10;
  const isFormValid = nameValid && emailValid && messageValid;

  const sendEmail = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      formRef.current.reset();
      setName("");
      setEmail("");
      setMessage("");
      setToast({
        variant: "success",
        message: "Deine Nachricht wurde gesendet!",
      });
    } catch (error) {
      console.log(error);
      setToast({
        variant: "error",
        message: "Fehler beim Senden — bitte erneut versuchen.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="py-10 px-6">
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="w-full"
          aria-label="Contact form"
        >
          <fieldset className="flex flex-col gap-4">
            <legend className="text-2xl text-rose-500 font-semibold mb-6 underline">
              Contact me directly
            </legend>

            <div className="flex flex-col gap-1">
              <label className="text-left" htmlFor="user_name">
                What's your name?
              </label>
              <input
                type="text"
                className="border p-2 rounded placeholder:text-gray-500 focus:placeholder:text-current dark:placeholder:text-gray-400 hover:shadow-lg focus:shadow-lg"
                id="user_name"
                name="user_name"
                placeholder="Your name goes here"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              {!nameValid && name.length > 0 && (
                <small className="text-red-500 text-left mt-1">
                  Der Name muss mindestens 2 Zeichen haben.
                </small>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-left" htmlFor="user_email">
                What's your email?
              </label>
              <input
                type="email"
                className="border p-2 rounded placeholder:text-gray-500 focus:placeholder:text-current dark:placeholder:text-gray-400 hover:shadow-lg focus:shadow-lg"
                id="user_email"
                name="user_email"
                placeholder="youremail@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {!emailValid && email.length > 0 && (
                <small className="text-red-500 text-left mt-1">
                  Bitte eine gültige Email eingeben.
                </small>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-left" htmlFor="message">
                How can I help you?
              </label>
              <textarea
                id="message"
                name="message"
                className="border p-2 rounded placeholder:text-gray-500 focus:placeholder:text-current dark:placeholder:text-gray-400 hover:shadow-lg focus:shadow-lg"
                rows={5}
                placeholder="Hello Jonas, I am interested in..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              {!messageValid && message.length > 0 && (
                <small className="text-red-500 text-left mt-1">
                  Die Nachricht muss mindestens 10 Zeichen haben.
                </small>
              )}
            </div>
          </fieldset>

          <button
            type="submit"
            disabled={!isFormValid || loading}
            className={`flex items-center gap-2 mt-6 border px-4 py-2 rounded transition ${
              isFormValid && !loading
                ? "hover:scale-105 hover:shadow-lg"
                : "opacity-50 cursor-not-allowed"
            }`}
          >
            Get in touch with me
            {loading ? (
              <LoaderCircle className="w-5 h-5 animate-spin" />
            ) : (
              <SendHorizontal className="w-5 h-5" />
            )}
          </button>
        </form>
      </section>

      <Toast
        toast={toast}
        onClose={() => {
          setToast(null);
          setLoading(false);
        }}
        duration={4000}
      />
    </>
  );
};

export default EmailForm;
