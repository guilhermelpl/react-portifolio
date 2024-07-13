import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = ({ translate }) => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        {translate ? "Experiences" : "Experiências"}
      </motion.h2>
      {EXPERIENCES.map((experience, index) => (
        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
          <div className="w-full lg:w-1/4">
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              className="mb-2 text-sm text-neutral-400"
            >
              {translate ? experience.year : experience.ano}
            </motion.p>
          </div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: +100 }}
            transition={{ duration: 1.5 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <h6 className="mb-2 font-semibold">
              {translate
                ? experience.role
                : experience.funcao + " - " + experience.company}
            </h6>
            <p>{translate ? experience.description : experience.descricao}</p>
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
