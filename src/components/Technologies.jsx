import { DiCodeigniter, DiPhp } from "react-icons/di";
import { FaGithub } from "react-icons/fa";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { LiaVuejs } from "react-icons/lia";
import { IoLogoJavascript } from "react-icons/io5";

const icons = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  const { t } = useTranslation();

  return (
    <div className="border-b border-neutral-900 pb-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        {t("technologiesSection")}
      </motion.h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={icons(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <IoLogoJavascript className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div
          variants={icons(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={icons(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <LiaVuejs className="text-7xl text-green-400" />
        </motion.div>
        <motion.div
          variants={icons(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiPhp className="text-7xl text-400" />
        </motion.div>
        <motion.div
          variants={icons(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiCodeigniter className="text-7xl text-red-500" />
        </motion.div>
        <motion.div
          variants={icons(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiTailwindCssFill className="text-7xl text-gray-700" />
        </motion.div>
        <motion.div
          variants={icons(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMysql className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={icons(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaGithub className="text-7xl text-400" />
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
