import { useTranslation } from "react-i18next";

const languages = ["en", "de", "fr", "lb"] as const;

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <nav aria-label="Language selection" className="flex gap-1">
      {languages.map((lang) => (
        <button
          key={lang}
          onClick={() => i18n.changeLanguage(lang)}
          aria-current={i18n.resolvedLanguage === lang ? "true" : undefined}
          className={`px-2 py-1 rounded text-sm font-medium transition hover:cursor-pointer ${
            i18n.resolvedLanguage === lang
              ? "bg-switch text-text inset-shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] shadow-md"
              : "hover:bg-hover-switch"
          }`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </nav>
  );
};

export default LanguageSwitcher;
