import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

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
      console.log(error)
      setStatus("error");
    }
  };

  return (
    <section>
      <h3>Contact me directly</h3>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <label htmlFor="">Name</label>
        <input
          type="text"
          className="border p-2 rounded"
          name="user_name"
          required
        />

        <label htmlFor="">Email</label>
        <input
          type="email"
          className="border p-2 rounded"
          name="user_email"
          required
        />

        <label htmlFor="">Message</label>
        <textarea
          name="message"
          className="border p-2 rounded"
          rows={5}
          required
        />

        <input type="submit" value="Send" />
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
