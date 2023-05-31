import "./Navbar.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { useTranslation, initReactI18next } from "react-i18next";
import i18n from "i18next";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const { t } = useTranslation();
  const [showNav, setShowNav] = useState(false);
  const [showLang, setShowLang] = useState(false);

  //   const navigate = useNavigate();
  const changeLang = (l) => {
    //alert('OK');
    return () => {
      i18n.changeLanguage(l);
      localStorage.setItem("lang", l);
    };
  };

  useEffect(() => {
    let currentLang = localStorage.getItem("lang");
    i18n.changeLanguage(currentLang);
  }, []);

  //   <h1> Navbar</h1>
  //   <button onClick={changeLang("en")}>English</button>
  //   <button onClick={changeLang("mr")}>Marathi</button>
  return (
    <nav>
      <div className="nav-container py-2">
        <span className="logo mx-4">आणे ग्रामपंचायत</span>
        <div className="nav-items mx-4">
          <span className="nav-item mx-4">Home</span>
          <span className="nav-item mx-4">Home</span>
          <span className="nav-item mx-4">Home</span>
          <span onClick={changeLang("en")} className="mx-4 nav-item">
            English
          </span>
          <span onClick={changeLang("mr")} className="mx-4 nav-item">
            मराठी
          </span>
          <span className="menu-bar mx-4">
            <AiOutlineMenu onClick={() => setShowNav(!showNav)} size={20} />
          </span>
        </div>
      </div>
      {showNav && (
        <div onClick={() => setShowNav(!showNav)} className="drop-dwon-menu ">
          <span className=" ms-4 my-2">Home</span>
          <span className=" ms-4 my-2">Home</span>
          <span className=" ms-4 my-2">Home</span>
          <span onClick={changeLang("en")} className="ms-4 my-2">
            English
          </span>
          <span onClick={changeLang("mr")} className="ms-4 my-2">
            मराठी
          </span>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
