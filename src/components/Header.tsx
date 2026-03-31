import { useTranslation } from "react-i18next";
import Logo from "../assets/img/logo.svg?react";
import DarkModeSwitch from "./DarkModeSwitch";
import LanguageSwitcher from "./LanguageSwitcher";
import BurgerMenu from "./BurgerMenu";

function Header() {
  const { t } = useTranslation();

  return (
    <header className="border-b-1 border-(--color-text-rgba) sticky top-0 w-full z-10 backdrop-blur-md">
      <div className="max-w-7xl w-full mx-auto flex justify-between items-center px-6 py-4 md:px-10 md:py-6">
        <Logo className="h-15" role="img" aria-label={t("aria.logo")} />
        <nav aria-label={t("aria.mainNav")} className="hidden md:flex gap-6">
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
        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />
          <DarkModeSwitch />
        </div>
        <BurgerMenu />
      </div>
    </header>
  );
}

export default Header;
