import { useTranslation } from "react-i18next";
import MatrixBackground from "./MatrixBackground";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative flex items-center justify-center py-35 w-full border-b-1 border-text-rgba">
      <MatrixBackground />
      <div className="flex flex-col items-center justify-center px-4">
        <p>{t("hero.greeting")}</p>
        <h1 className="text-orange-500">{t("hero.role")}</h1>
        <p>{t("hero.passion")}</p>
      </div>
    </section>
  );
};

export default Hero;
