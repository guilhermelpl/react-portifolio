import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Experience = () => {
  const { t } = useTranslation();

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        {t("experiencesSection")}
      </motion.h2>
      {t("experiences", { returnObjects: true }).map((experience, index) => (
        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
          <div className="w-full lg:w-1/4">
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              className="mb-2 text-sm text-neutral-400"
            >
              {experience.year}
            </motion.p>
          </div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: +100 }}
            transition={{ duration: 1.5 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <h6 className="mb-2 font-semibold">
              {experience.role + " - " + experience.company}
            </h6>
            <p>{experience.description}</p>
            {experience.technologies.map((technologie, index) => (
              <motion.span
                key={index}
                className="mr-2 mt-5 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-orange-800"
              >
                {technologie}
              </motion.span>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
