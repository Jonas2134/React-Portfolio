import { useTranslation } from "react-i18next";
import { Linkedin, Github, Mail } from "lucide-react";
import { contact } from "../data/contact";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-(--color-text-rgba) w-full backdrop-blur-md">
      <div className="max-w-7xl w-full mx-auto flex flex-col items-center gap-6 px-6 py-8 md:flex-row md:justify-between md:items-center md:px-10">
        <nav
          aria-label={t("aria.footerNav")}
          className="flex gap-4"
        >
          <a
            href={contact.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition hover:text-orange-500"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={contact.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition hover:text-orange-500"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${contact.email}`}
            aria-label={t("footer.email")}
            className="transition hover:text-orange-500"
          >
            <Mail className="w-5 h-5" />
          </a>
        </nav>

        <div className="flex flex-col items-center gap-1 md:items-end">
          <p className="text-sm text-center">{t("footer.builtWith")}</p>
          <a
            href="https://github.com/Jonas2134/react-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("footer.viewSource")}
            className="text-sm text-center text-blue-600 dark:text-blue-400 transition hover:underline"
          >
            {t("footer.viewSource")}
          </a>
          <p className="text-base text-center">{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
