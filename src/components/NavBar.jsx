import logo from "../assets/Logo.png";
import resume from "../assets/GuilhermeLopesLima.pdf";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdGTranslate } from "react-icons/md";
import { MdDownload } from "react-icons/md";


const NavBar = ({ translate, setTranslate }) => {
  return (
    <>
      <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <img className="mx-2 w-10" src={logo} alt="Logo" />
        </div>
        <div className="flex m-8 items-center justify-center gap-4 text-2xl cursor-pointer">
          <MdGTranslate
            onClick={() => {
              setTranslate(!translate);
            }}
          />
          <FaLinkedin
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/guilherme-lopes-lima-323324219/"
              );
            }}
          /> 
          <FaGithub
            onClick={() => {
              window.open("https://github.com/guilhermelpl");
            }}
          />
          <a href={resume} download="GuilhermeLopesLima.pdf">
            <MdDownload className="mt-1" />
          </a>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
