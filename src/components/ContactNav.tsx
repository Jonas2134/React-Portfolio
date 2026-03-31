import { useTranslation } from "react-i18next";
import { Linkedin, Github, Mail } from "lucide-react";
import type { FC } from "react";

interface ContactNavProps {
  linkedinUrl: string;
  githubUrl: string;
  email: string;
}

const ContactNav: FC<ContactNavProps> = ({ linkedinUrl, githubUrl, email }) => {
  const { t } = useTranslation();

  return (
    <section
      className="flex flex-col gap-8 py-10 px-6"
      aria-labelledby="contact-heading"
    >
      <h3 className="text-rose-500 pb-3 underline">{t("contact.togetherHeadline")}</h3>
      <p>{t("contact.togetherText")}</p>

      <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 w-full" aria-label={t("contact.socialLabel")}>
        <a
          className="flex justify-center items-center basis-[calc(50%-0.5rem)] gap-1 border rounded backdrop-blur-md py-2 transition hover:scale-101 hover:shadow-lg"
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="w-5 h-5" />
          <span className="font-medium">{t("footer.linkedin")}</span>
        </a>
        <a
          className="flex justify-center items-center basis-[calc(50%-0.5rem)] gap-1 border rounded backdrop-blur-md py-2 transition hover:scale-101 hover:shadow-lg"
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="w-5 h-5" />
          <span className="font-medium">{t("footer.github")}</span>
        </a>
        <a
          className="flex justify-center items-center basis-[calc(50%-0.5rem)] gap-1 border rounded backdrop-blur-md py-2 transition hover:scale-101 hover:shadow-lg"
          href={`mailto:${email}`}
        >
          <Mail className="w-5 h-5" />
          <span className="font-medium">{t("footer.email")}</span>
        </a>
      </nav>
    </section>
  );
};

export default ContactNav;
