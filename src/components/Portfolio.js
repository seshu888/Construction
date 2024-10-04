import React from "react";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "../animations/animation";
import { projects } from "../export";

const Portfolio = () => {
  return (
    <div id="portfolio" className="w-full">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="w-full m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]"
      >
        <motion.h1
          variants={slideUpVariants}
          className="text-yellow-500 text-2xl"
        >
          SPECIAL OFFER
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className="text-white text-[40px] font-bold"
        >
          OUR BEST PROJECTS
        </motion.h1>
        <div className="w-[120px] h-[6px] bg-yellow-500"></div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="w-full grid lg:grid-cols-4 grid-cols-1 justify-center items-start  mt-[30px]  "
        >
          {projects.map((project) => (
            <motion.div
              variants={zoomInVariants}
              className="flex justify-center items-start h-[250px]"
            >
              <img
                src={project.image}
                alt="icon"
                className="w-full hh-[250px] "
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
