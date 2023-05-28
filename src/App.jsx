import { useEffect } from "react";
import "./App.css";
import { useTranslation, initReactI18next } from "react-i18next";
import i18n from "i18next";
function App() {
  const { t } = useTranslation();

  const changeLang = (l) => {
    //alert('OK');
    return () => {
      //alert('ok '+l);
      //Now change the language
      //object.member();
      i18n.changeLanguage(l);

      //Now set the current language in local storage
      localStorage.setItem("lang", l);
    };
  };

  useEffect(() => {
    //alert('Page is loaded successfully');
    //get the current language stored in the local storage
    let currentLang = localStorage.getItem("lang");
    i18n.changeLanguage(currentLang);
  }, []);

  return (
    <>
      <h1>{t("welcome_to_react")}</h1>
      <button onClick={changeLang("en")}>English</button>
      <button onClick={changeLang("mr")}>Marathi</button>
    </>
  );
}

export default App;
