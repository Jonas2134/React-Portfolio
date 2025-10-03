import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { SendHorizontal, LoaderCircle } from "lucide-react";
import Toast, { type ToastType } from "./Toast";

const EmailForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [toast, setToast] = useState<ToastType | null>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!form.current) return;

    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      form.current.reset();
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
    }
  };

  return (
    <>
      <section className="py-10 px-6">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full"
          aria-label="Contact form"
        >
          <fieldset className="flex flex-col gap-6">
            <legend className="text-2xl text-rose-500 font-semibold mb-6 underline">
              Contact me directly
            </legend>

            <div className="flex flex-col gap-1">
              <label className="text-left" htmlFor="user_name">
                What's your name?
              </label>
              <input
                type="text"
                className="border p-2 rounded placeholder:text-gray-500 focus:placeholder:text-current dark:placeholder:text-gray-300"
                id="user_name"
                name="user_name"
                placeholder="Your name goes here"
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-left" htmlFor="user_email">
                What's your email?
              </label>
              <input
                type="email"
                className="border p-2 rounded placeholder:text-gray-500 focus:placeholder:text-current dark:placeholder:text-gray-300"
                id="user_email"
                name="user_email"
                placeholder="youremail@email.com"
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-left" htmlFor="message">
                How can I help you?
              </label>
              <textarea
                id="message"
                name="message"
                className="border p-2 rounded placeholder:text-gray-500 focus:placeholder:text-current dark:placeholder:text-gray-300"
                rows={5}
                placeholder="Hello Jonas, I am interested in..."
                required
              />
            </div>
          </fieldset>

          <button
            className="flex items-center gap-2 mt-6 border px-4 py-2 rounded transition hover:scale-101 hover:shadow-lg hover:cursor-pointer"
            type="submit"
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
        onClose={(() => {
          setToast(null);
          setLoading(false);
        })}
        duration={4000}
      />
    </>
  );
};

export default EmailForm;
