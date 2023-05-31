import "./HomePage.css";
import { useTranslation, initReactI18next } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <div className="home-container container mt-2">
      <h1 className="headline">{t("welcome_to_react")}</h1>
      <p className="description">{t("hello")}</p>
    </div>
  );
};

export default HomePage;
