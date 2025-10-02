import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { SendHorizontal } from "lucide-react";

const EmailForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"success" | "error" | "">("");

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      form.current.reset();
    } catch (error) {
      console.log(error);
      setStatus("error");
    }
  };

  return (
    <section className="py-10 px-6 rounded-4xl shadow-md inset-shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] backdrop-blur-md">
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

        <button className="flex items-center gap-2 mt-6 border px-4 py-2 rounded hover:scale-101 hover:shadow-lg hover:cursor-pointer" type="submit">
          Get in touch with me
          <SendHorizontal className="w-5 h-5" />
        </button>
      </form>

      {status === "success" && (
        <p className="mt-4 text-green-600 text-center">
          ✅ Deine Nachricht wurde erfolgreich gesendet!
        </p>
      )}
      {status === "error" && (
        <p className="mt-4 text-red-600 text-center">
          ❌ Es ist ein Fehler aufgetreten. Bitte versuche es nochmal.
        </p>
      )}
    </section>
  );
};

export default EmailForm;
