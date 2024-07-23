import aboutImg from "../assets/photo_about.jpg";
import { ABOUT_TEXT_EN, ABOUT_TEXT_PT } from "../config/constants";
import { motion } from "framer-motion";

const AboutMe = ({ translate }) => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        {translate ? "About Me" : "Sobre mim"}
      </motion.h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <motion.img
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="rounded-lg"
              src={aboutImg}
              alt="about_img"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <motion.p
              whileInView={{ opacity: 1, x: 0.5 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="my-2 max-w-xl py-6"
            >
              {translate ? ABOUT_TEXT_EN : ABOUT_TEXT_PT}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
