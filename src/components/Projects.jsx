import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = ({ translate }) => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        {translate ? "Projects" : "Projetos"}
      </motion.h2>
      {PROJECTS.map((project, index) => (
        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
          <div className="w-full lg:w-1/4">
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              width={350}
              height={350}
              src={project.image}
              alt="img"
              className="max-w-full h-auto lg:max-w-md"
            />
          </div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: +100 }}
            transition={{ duration: 1.5 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <h6 className="mb-2 font-semibold">
              {translate ? project.title : project.titulo}
            </h6>
            <p>{translate ? project.description : project.descricao}</p>
            {project.technologies.map((technologie, index) => (
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

export default Projects;
