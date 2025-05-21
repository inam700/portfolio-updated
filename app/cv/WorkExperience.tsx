"use client";
import { experiences } from "@/data/cv";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef } from "react";

const WorkExperience = () => {
  return (
    <div>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="relative mt-10"
        >
          {/* Vertical line */}
          <div className="absolute md:left-1/2 top-0 h-full w-[2px] bg-orange z-0 md:-translate-x-1/2" />

          <div className="flex flex-col gap-12">
            {experiences.map((experience, index) => {
              const isRight = index % 2 === 0;
              const ref = useRef(null);
              const inView = useInView(ref, {
                once: true,
                margin: "0px 0px -50px 0px",
              });

              return (
                <motion.div
                  ref={ref}
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative flex"
                >
                  {/* Dot */}
                  <span className="absolute -left-2 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-orange rounded-full z-10" />

                  {/* Content */}
                  <div
                    className={`
                md:w-1/2 px-6 
                ${
                  isRight
                    ? "md:ml-auto md:text-left"
                    : "md:mr-auto md:text-right"
                }
              `}
                  >
                    <p className="text-sm text-orange font-medium">
                      {experience.duration}
                    </p>
                    <h3 className="text-2xl font-semibold text-porcelain mt-1">
                      {experience.title}
                    </h3>
                    <p className="text-sm text-orange">{experience.location}</p>
                    <p className="text-sm text-porcelain/80">
                      {experience.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default WorkExperience;
