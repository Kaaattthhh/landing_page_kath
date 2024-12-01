import React from "react";
import { IoIosFitness } from "react-icons/io";
import { IoFitnessOutline } from "react-icons/io5";
import { GiMeal } from "react-icons/gi";
import { GiProgression } from "react-icons/gi";
import { RiRobot2Line } from "react-icons/ri";
import { motion } from "framer-motion";


const ServicesData = [
    {
        id: 1,
        title: "Personalized Fitness Plans",
        link:"#",
        icon:<IoIosFitness />,
        delay: 0.2,
    },
    {
        id: 2,
        title: "Meal Planning",
        link:"#",
        icon:<IoFitnessOutline/>,
        delay: 0.3,
    },
    {
        id: 3,
        title: "Health Monitoring",
        link:"#",
        icon:<GiMeal/>,
        delay: 0.4,
    },
    {
        id: 4,
        title: "Progress Tracking",
        link:"#",
        icon:<GiProgression/>,
        delay: 0.5,
    },
    {
        id: 5,
        title: "AI-Powered Insights",
        link:"#",
        icon:<RiRobot2Line/>,
        delay: 0.6,
    },

];

const SlideLeft = (delay) => {
    return {
        initial:{
            opacity: 0,
            x:50
        },
        animate:{
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3,
                delay: delay,
                ease: "easeInOut",
            },
        },
    };
};


const Services = () => {
  return (
  <section className="bg-white">
    <div className="container pb-14 pt-16">
        <motion.h1
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-left pb-10">
            Services we offer
        </motion.h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
            {ServicesData.map((service) =>  (
                <motion.div 
                variants={SlideLeft(service.delay)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl">
                    <div className="text-4xl mb-4"> {service.icon}</div>
                    <h1 className="text-lg font-semibold text-center px-3">{service.title}</h1>
                </motion.div>    
        ))}

        </div>
    </div>
  </section>
  ); 
};

export default Services;