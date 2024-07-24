import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "../assets/Logo.png";
import resume from "../assets/curriculum/GuilhermeLopesLima.pdf";
import { MdGTranslate } from "react-icons/md";
import { MdDownload } from "react-icons/md";

const NavBar = ({
  experienceRef,
  projectsRef,
  contactRef,
}) => {
  const Section = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState(language);

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === "pt" ? "en" : "pt";
    changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  return (
    <>
      <nav className="mb-20 flex flex-col mt-4 sm:flex-row items-center justify-between py-2 px-4 sm:px-8">
        <div>
          <img className="mx-2 w-10" src={logo} alt="Logo" />
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-4 sm:mt-0 tracking-tight">
          <span
            className="text-1xl cursor-pointer hover:text-orange-500 transition duration-300"
            onClick={() => Section(experienceRef)}
          >
            {t('header')}
          </span>
          <span
            className="text-1xl cursor-pointer hover:text-orange-500 transition duration-300"
            onClick={() => Section(projectsRef)}
          >
            {t('projectsSection')}
          </span>
          <span
            className="text-1xl cursor-pointer hover:text-orange-500 transition duration-300"
            onClick={() => Section(contactRef)}
          >
            {t('contactSection')}
          </span>
        </div>
        <div className="flex gap-4 mt-4 sm:mt-0 items-center">
          <MdGTranslate
            className="hover:text-orange-500 transition duration-300 cursor-pointer text-2xl"
            onClick={handleChangeLanguage}
          />
          <FaGithub
            className="hover:text-orange-500 transition duration-300 cursor-pointer text-2xl"
            onClick={() => {
              window.open("https://github.com/guilhermelpl");
            }}
          />
          <a href={resume} download="GuilhermeLopesLima.pdf">
            <MdDownload className="hover:text-orange-500 transition duration-300 cursor-pointer text-2xl mt-1" />
          </a>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
