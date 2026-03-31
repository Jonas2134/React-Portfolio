import { useTranslation } from "react-i18next";
import ContactNav from "./ContactNav";
import EmailForm from "./EmailForm";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="flex flex-col items-center gap-6">
      <h2 className="text-orange-500 ">{t("contact.headline")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-(--color-text-rgba) border border-(--color-text-rgba) w-full rounded shadow-md inset-shadow-card backdrop-blur-md">
        <ContactNav linkedinUrl="https://www.linkedin.com/in/jonas-stiefer-663b70252/" githubUrl="https://github.com/Jonas2134" email="connect@jonas-stiefer.com" />
        <EmailForm />
      </div>
    </section>
  );
};

export default Contact;
