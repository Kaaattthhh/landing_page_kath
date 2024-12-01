import React from "react";
import BannerPng from "../../assets/tracker.png";
import { TbHealthRecognition } from "react-icons/tb";
import { FaChartLine } from "react-icons/fa6";
import { GoGoal } from "react-icons/go";
import { FadeUp } from "../Hero/Hero";
import { motion } from "framer-motion";

const Banner = () => {
  return (
  <section>
    <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
        {/* Banner Image */}
        <div className="flex justify-center items-center">
            <motion.img
            initial={{ opacity: 0, x: -50}} 
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            src={BannerPng} 
            alt=""
            className="w-[350px] md:max-w-[450px] object-cover drop-shadow"/>
        </div>
        {/* Banner Text */}
        <div className="flex flex-col justify-center">
            <div className="text-center md:text-left space-y-12">
                <motion.h1
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold !leading-snug">Features about FitMission</motion.h1>
                <div className="flex flex-col gap-6">
                <motion.div 
                variants={FadeUp(0.2)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl">
                    <TbHealthRecognition className="text-6xl"/>
                    <p className="text-lg">One-Stop Health: Manage fitness, diet, and wellness in one platform.</p>
                </motion.div>
                </div>
                <div>
                <motion.div 
                variants={FadeUp(0.4)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl">
                    <FaChartLine className="text-5xl"/>
                    <p className="text-lg">Quick Tracking: Log workouts and meals in just a few taps.</p>
                </motion.div>
                </div>
                <div>
                <motion.div 
                variants={FadeUp(0.6)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl">
                    <GoGoal className="text-6xl"/>
                    <p className="text-lg">Progress Goals: See your improvements over time with easy-to-read charts.</p>
                </motion.div>
                </div>
            </div>   
        </div>
    </div>
  </section>
  );
};

export default Banner;