import React from "react";

import { motion } from "framer-motion";
import {
  zoomInVariants,
  slideUpVariants,
  slideLefVariants,
} from "../animations/animation";

const About = () => {
  return (
    <div
      id="about"
      className="lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row  flex-col  justify-between items-start gap-[50px]"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[60]% w-full flex flex-col justify-center items-start lg:gap-8 gap-4"
      >
        <motion.h1
          variants={slideLefVariants}
          className="text-yellow-500 text-2xl "
        >
          WELCOME TO
        </motion.h1>
        <motion.h1
          variants={slideLefVariants}
          className="text-white uppercase text-[40px] font-bold "
        >
          Vijay Constructions
        </motion.h1>
        <div className="w-[120px] h-[6px] bg-yellow-500"></div>
        <p className="italic  text-3xl text-white mt-[60px]  ">
          We are the leader with 5 years of experience in the construction
          market!
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[40]% w-full flex flex-col justify-center items-start gap-6"
      >
        <p className="text-white text-lg text-justify ">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
        <motion.button
          variants={zoomInVariants}
          className="bg-yellow-500  hover:bg-white hover:text-black px-10 py-3 rounded-lg text-black font-bold text-black"
        >
          READ MORE
        </motion.button>
      </motion.div>

      {/* <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[60]% w-full flex flex-col justify-center items-start lg:gap-8 gap-4"
      ></motion.div> */}
    </div>
  );
};

export default About;
