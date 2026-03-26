import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full">
      <div className="max-w-7xl w-full mx-auto flex justify-around items-end">
        <nav aria-label={t("aria.footerNav")} className="flex flex-col">
          <h2>{t("footer.contactHeadline")}</h2>
          <a href="mailto:#">{t("footer.email")}</a>
          <a href="#">{t("footer.linkedin")}</a>
          <a href="#">{t("footer.github")}</a>
        </nav>
        <p>{t("footer.copyright")}</p>
      </div>
    </footer>
  );
}

export default Footer;
