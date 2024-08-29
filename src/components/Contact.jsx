import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaGithub, FaGooglePlusG, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="w-full flex flex-col items-center justify-center"
        >
          <h2 className="pb-10 text-4xl lg:mt-5">{t("contactSection")}</h2>
          <span>
            {t("adressSection")} {t("address")}
          </span>
          <span>
            {t("phoneSection")} {t("phoneNumber")}
          </span>
          <div className="flex my-2 items-center justify-center gap-4 text-3xl">
            <FaLinkedin
              className="hover:text-orange-500 transition duration-300 cursor-pointer"
              onClick={() => {
                window.open("https://www.linkedin.com/in/guilherme-lopes-lima-323324219/");
              }}
            />
            <FaGithub
              className="hover:text-orange-500 transition duration-300 cursor-pointer"
              onClick={() => {
                window.open("https://github.com/guilhermelpl");
              }}
            />
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=guilopes1003@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGooglePlusG className="hover:text-orange-500 transition duration-300 cursor-pointer" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
