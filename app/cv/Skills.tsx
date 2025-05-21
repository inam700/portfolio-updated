"use client";
import React, { ReactElement, useState } from "react";
import { Progress } from "@/components/ui/progress"; // ✅ Import ShadCN progress

import { Check, CheckCircle } from "lucide-react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { skills } from "@/data/cv";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const value = 90;

  const tabMotion = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <div>
      <div className="relative grid grid-cols-1 md:grid-cols-3 md:gap-10 mt-5">
        {/* Faded top border */}
        <div className="hidden md:block absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-orange via-orange to-transparent z-10" />
        <div className="md:hidden absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange to-transparent z-10" />

        <div className="relative">
          <div className="hidden md:block absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-orange via-orange to-transparent z-10 pointer-events-none" />

          {Object.keys(skills).map((key) => (
            <div
              key={key}
              onClick={() => setActiveTab(key)}
              className={`w-max capitalize cursor-pointer text-sm text-porcelain mt-4 py-2 ps-4 pe-20 transition-colors duration-300 ${
                activeTab === key
                  ? "font-semibold bg-gradient-to-r from-orange via-orange/30 to-transparent"
                  : ""
              }`}
            >
              {key.replace(/([A-Z])/g, " $1")}
            </div>
          ))}
          <div className="md:hidden relative w-full mt-10 pb-5">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange to-transparent z-10" />
          </div>
        </div>

        <div className="col-span-2 mt-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={tabMotion}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="flex flex-wrap gap-5"
            >
              {skills[activeTab]?.map(
                (
                  { name, icon: Icon }: { name: string; icon: any },
                  index: number
                ) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-porcelain/10 hover:bg-porcelain/30 px-3 py-2 text-sm font-medium text-porcelain rounded-2xl shadow-md transition-all duration-300 ease-in-out"
                  >
                    {Icon && <Icon size={20} />}
                    {name}
                  </div>
                )
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="relative grid grid-cols-1 md:grid-cols-2 mt-10 text-porcelain">
        {/* Languages Section */}
        <div>
          <p className="text-3xl text-center font-semibold tracking-wide">
            Languages
          </p>
          <div className="relative w-full mt-2 mb-12">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange to-transparent z-10" />
          </div>

          <div className="md:space-y-6 md:px-6">
            <div>
              <div className="flex justify-between items-center text-sm mb-1 font-medium">
                <div className="flex items-center gap-2">
                  <img
                    src="https://flagcdn.com/w40/gb.png"
                    alt="UK Flag"
                    className="w-5 h-4 object-cover rounded-sm"
                  />
                  <span>English</span>
                </div>
                <span>90%</span>
              </div>

              <Progress
                value={value}
                className="h-2 bg-porcelain [&>div]:bg-orange [&>div]:transition-all [&>div]:duration-1000"
              />
            </div>

            <div className="">
              <div className="mt-10 flex justify-between items-center text-sm mb-1 font-medium">
                <div className="flex items-center gap-2">
                  <img
                    src="https://flagcdn.com/w40/pk.png"
                    alt="Pakistan Flag"
                    className="w-5 h-4 object-cover rounded-sm"
                  />
                  <span>Urdu</span>
                </div>
                <span>100%</span>
              </div>
              <Progress
                value={100}
                className="h-2 bg-porcelain [&>div]:bg-orange"
              />
            </div>
          </div>
        </div>

        {/* Soft Skills Section */}
        <div className="mt-10 md:mt-0">
          <p className="text-3xl text-center font-semibold tracking-wide">
            Soft Skills
          </p>
          <div className="relative w-full mt-2 mb-12">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange to-transparent z-10" />
          </div>

          <ul className="md:space-y-3 md:px-6 text-sm leading-relaxed">
            {[
              "Clear communicator",
              "Team player",
              "Quick problem-solver",
              "Adaptable mindset",
              "Manages time well",
              "Thinks critically",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-orange mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
