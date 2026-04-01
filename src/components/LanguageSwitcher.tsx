import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", label: "EN" },
  { code: "de", label: "DE" },
  { code: "fr", label: "FR" },
  { code: "lb", label: "LUX" },
] as const;

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <nav aria-label="Language selection" className="flex gap-1">
      {languages.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => i18n.changeLanguage(code)}
          aria-current={i18n.resolvedLanguage === code ? "true" : undefined}
          className={`px-2 py-1 rounded text-sm font-medium transition hover:cursor-pointer ${
            i18n.resolvedLanguage === code
              ? "bg-switch text-text inset-shadow-card shadow-md"
              : "hover:bg-hover-switch"
          }`}
        >
          {label}
        </button>
      ))}
    </nav>
  );
};

export default LanguageSwitcher;
