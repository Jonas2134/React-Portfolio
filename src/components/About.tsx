import { Trans, useTranslation } from "react-i18next";
import { ScrollText } from "lucide-react";
import picture from "../assets/img/jonas-stiefer.png";

function getAge(): number {
  const birthDate = new Date(1999, 7, 9);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  const d = today.getDate() - birthDate.getDate();

  if (m < 0 || (m === 0 && d < 0)) {
    age--;
  }

  return age;
}

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="flex flex-col md:flex-row items-center justify-center gap-4 rounded inset-shadow-card backdrop-blur-md p-7">
      <img src={picture} alt={t("about.portraitAlt")} loading="lazy" className="rounded-4xl h-56" />
      <div className="max-w-lg flex flex-col items-center gap-4">
        <h2>{t("about.headline")}</h2>
        <p>
          <Trans i18nKey="about.text" values={{ age: getAge() }}>
            placeholder
          </Trans>
        </p>
        <button className="flex items-center gap-2 px-4 py-2 border rounded transition hover:scale-101 hover:shadow-lg hover:cursor-pointer">
          <span>{t("about.cvButton")}</span>
          <ScrollText />
        </button>
      </div>
    </section>
  );
};

export default About;
