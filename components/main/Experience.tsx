"use client";

import { experiencesData } from "@/constants";
import { motion } from "framer-motion";
import React from "react";

type ExperienceTimelineProps = {};

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = () => {
  return (
    <div className="relative pt-10 pb-20">
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-1 bg-gray-500"></div>
      {experiencesData.map((item, index) => (
        <motion.div
          key={index}
          className={`mb-8 relative flex ${
            index % 2 === 0 ? "justify-start" : "justify-end"
          }`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div
            className={`w-1/2 p-6 rounded-lg border border-gray-600 bg-gray-800 text-white shadow-lg ${
              index % 2 === 0 ? "ml-8 text-left" : "mr-8 text-right"
            }`}
          >
            <div className="font-bold mb-2 text-sm">{item.date}</div>
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-300">{item.description}</p>
          </div>
          <div
            className={`absolute top-4 w-4 h-4 bg-gray-600 rounded-full transform ${
              index % 2 === 0
                ? "-translate-x-1/2 left-1/2"
                : "translate-x-1/2 right-1/2"
            }`}
          ></div>
        </motion.div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;
