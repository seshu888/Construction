import React from "react";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "../animations/animation";
import { planning } from "../export";

const Working = () => {
  return (
    <div id="Working" className="w-full bg-white ">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]"
      >
        <motion.h1
          variants={slideUpVariants}
          className="text-yellow-500 text-2xl"
        >
          STEP BY STEP
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className="text-black text-[40px] font-bold"
        >
          HOW IT'S WORKING
        </motion.h1>
        <div className="w-[120px] h-[6px] bg-yellow-500"></div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="w-full grid lg:grid-cols-4 grid-cols-1 justify-center items-start  mt-[30px] gap-[20px] "
        >
          {planning.map((plan) => (
            <motion.div
              variants={zoomInVariants}
              className="flex flex-col justify-center items-center border-2 border-yellow-500  gap-5 p-6 rounded-mg"
            >
              <plan.icon className="size-[80px] bg-yellow-500 hover:bg-black hover:fill-white  p-4 rounded-full cursor-pointer" />
              <h1 className="text-xl font-bold text-black text-center uppercase ">
                {plan.title}
              </h1>
              <p className="text-[18px] text-black text-center">{plan.about}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Working;
