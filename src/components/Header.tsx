import { useTranslation } from "react-i18next";
import Logo from "../assets/img/logo.svg?react";
import DarkModeSwitch from "./DarkModeSwitch";
import LanguageSwitcher from "./LanguageSwitcher";

function Header() {
  const { t } = useTranslation();

  return (
    <header className="border-b-1 border-(--color-text-rgba) sticky top-0 w-full z-10 backdrop-blur-md">
      <div className="max-w-7xl w-full mx-auto flex justify-around items-center px-10 py-6">
        <Logo className="h-15" role="img" aria-label={t("aria.logo")} />
        <nav aria-label={t("aria.mainNav")} className="flex gap-6">
          <a className="hover:border-b-1 transition-all" href="#about">
            {t("header.about")}
          </a>
          <a className="hover:border-b-1 transition-all" href="#skills">
            {t("header.skills")}
          </a>
          <a className="hover:border-b-1 transition-all" href="#projects">
            {t("header.projects")}
          </a>
          <a className="hover:border-b-1 transition-all" href="#contact">
            {t("header.contact")}
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <DarkModeSwitch />
        </div>
      </div>
    </header>
  );
}

export default Header;
