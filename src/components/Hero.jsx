import { motion } from "framer-motion";

import photo from "../assets/picture.png";
import { FiArrowRightCircle } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16"
            >
              Guilherme Lopes Lima
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-red-500 via-orange-300 to bg-orange-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              {t("role")}
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {t("heroContent")}
            </motion.p>
          </div>
          <div className="flex flex-col lg:items-start">
            <motion.div
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 lg:items-start flex items-center"
            >
              {t("connectButton")}
              <a
                href="https://www.linkedin.com/in/guilherme-lopes-lima-323324219/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiArrowRightCircle className="my-1 ml-2 cursor-pointer" />
              </a>
            </motion.div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-6">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: +100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={photo}
              alt="my_photo"
              className="max-w-full h-auto lg:max-w-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
