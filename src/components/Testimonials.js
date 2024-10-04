import React from "react";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "../animations/animation";
import { clients } from "../export";

const Testimonials = () => {
  return (
    <div id="Testimonials" className="w-full  ">
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
          TESTIMONIALS
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className="text-white text-[40px] font-bold"
        >
          WHAT THEY SAY ABOUT US
        </motion.h1>
        <div className="w-[120px] h-[6px] bg-yellow-500"></div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-start  mt-[30px] gap-[20px] "
        >
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center"
            >
              <div className="border-2 border-white hover:bg-yellow-500  pb-[100px] pt-[30px] px-[20px]">
                <p className="text-[18px] text-white text-center">
                  {client.about}
                </p>
              </div>

              <div className=" mt-[-40px] flex flex-col items-center justify-center">
                <img
                  src={client.image}
                  alt="icon"
                  className="w-[100px] border-yellow-500 "
                />
                <h1 className="text-[27px] text-white text-center">
                  {client.name}
                </h1>
                <h1 className="text-[22px] text-white text-center">
                  {client.post}
                </h1>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Testimonials;
