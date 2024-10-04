import React from "react";

import { motion } from "framer-motion";
import {
  zoomInVariants,
  slideUpVariants,
  slideLefVariants,
} from "../animations/animation";

const Contact = () => {
  return (
    <div className="bg-white w-full">
      <div
        id="contact"
        className="lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row  flex-col  justify-between items-start gap-[50px] bg-white"
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
            CONTACT US
          </motion.h1>
          <motion.h1
            variants={slideLefVariants}
            className="text-black uppercase text-[40px] font-bold "
          >
            REACH US FOR ANY QUERY
          </motion.h1>
          <div className="w-[120px] h-[6px] bg-yellow-500"></div>
          <p className="italic  text-3xl text-black mt-[60px]  ">
            We are the leader with 25 years of experience in the construction
            market!
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className="lg:w-[4 0]% w-full flex flex-col justify-center items-start gap-6"
        >
          <input
            className="border-2  border-yellow-500 w-full p-3"
            placeholder="Enter your name"
          ></input>
          <input
            className="border-2 border-yellow-500 w-full p-3 "
            placeholder="Enter your email"
          ></input>
          <input
            className="border-2  border-yellow-500 w-full p-3"
            placeholder="Enter your number"
          ></input>
          <motion.button
            variants={zoomInVariants}
            className="bg-yellow-500 w-full  hover:bg-black hover:text-white px-10 py-3 rounded-lg text-black font-bold text-black"
          >
            SUBMIT
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
