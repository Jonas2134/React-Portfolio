import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import DarkModeSwitch from "./DarkModeSwitch";
import LanguageSwitcher from "./LanguageSwitcher";

const navLinks = [
  { key: "header.about", href: "#about" },
  { key: "header.skills", href: "#skills" },
  { key: "header.projects", href: "#projects" },
  { key: "header.contact", href: "#contact" },
];

const BurgerMenu = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={menuRef} className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? t("aria.closeMenu") : t("aria.openMenu")}
        className="p-2 rounded hover:bg-hover-switch transition hover:cursor-pointer"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <nav
          id="mobile-menu"
          aria-label={t("aria.mainNav")}
          className="absolute left-0 right-0 top-full border-b border-(--color-text-rgba) bg-bg/80 backdrop-blur-md animate-dropdown-in"
        >
          <div className="flex flex-col gap-4 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-2 hover:text-orange-500 transition-colors text-lg"
              >
                {t(link.key)}
              </a>
            ))}
            <div className="flex items-center justify-between pt-2 border-t border-(--color-text-rgba)">
              <LanguageSwitcher />
              <DarkModeSwitch />
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default BurgerMenu;
