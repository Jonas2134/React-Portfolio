import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { SendHorizontal, LoaderCircle } from "lucide-react";
import Toast, { type ToastType } from "./Toast";

const EmailForm = () => {
  const { t } = useTranslation();
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
        message: t("contact.successToast"),
      });
    } catch {
      setToast({
        variant: "error",
        message: t("contact.errorToast"),
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
          aria-label={t("contact.formLabel")}
        >
          <fieldset className="flex flex-col gap-4">
            <legend className="text-2xl text-rose-500 font-semibold mb-6 underline">
              {t("contact.formHeadline")}
            </legend>

            <div className="flex flex-col gap-1">
              <label className="text-left" htmlFor="user_name">
                {t("contact.nameLabel")}
              </label>
              <input
                type="text"
                className="border p-2 rounded placeholder:text-gray-500 focus:placeholder:text-current dark:placeholder:text-gray-400 hover:shadow-lg focus:shadow-lg"
                id="user_name"
                name="user_name"
                placeholder={t("contact.namePlaceholder")}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              {!nameValid && name.length > 0 && (
                <small className="text-red-500 text-left mt-1">
                  {t("contact.nameError")}
                </small>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-left" htmlFor="user_email">
                {t("contact.emailLabel")}
              </label>
              <input
                type="email"
                className="border p-2 rounded placeholder:text-gray-500 focus:placeholder:text-current dark:placeholder:text-gray-400 hover:shadow-lg focus:shadow-lg"
                id="user_email"
                name="user_email"
                placeholder={t("contact.emailPlaceholder")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {!emailValid && email.length > 0 && (
                <small className="text-red-500 text-left mt-1">
                  {t("contact.emailError")}
                </small>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-left" htmlFor="message">
                {t("contact.messageLabel")}
              </label>
              <textarea
                id="message"
                name="message"
                className="border p-2 rounded placeholder:text-gray-500 focus:placeholder:text-current dark:placeholder:text-gray-400 hover:shadow-lg focus:shadow-lg"
                rows={5}
                placeholder={t("contact.messagePlaceholder")}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              {!messageValid && message.length > 0 && (
                <small className="text-red-500 text-left mt-1">
                  {t("contact.messageError")}
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
            {t("contact.submitButton")}
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
