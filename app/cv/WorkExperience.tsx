"use client";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef } from "react";
const experiences = [
  {
    title: "Senior Software Engineer",
    location: "Versatile Synergy, Dubai, UAE",
    duration: "July 2023 – Present",
    description:
      "Developed several successful video games using Unity 3D, Unreal and Cocos2D. Designed game features, levels and characters.",
  },
  {
    title: "Senior Software Engineer",
    location: "ILI.Digital, Lahore, Pakistan",
    duration: "December 2022 – June 2023",
    description:
      "Created and designed game levels and characters. Developed game features and functions. Fixed bugs and optimized games.",
  },
  {
    title: "Software Engineer",
    location: "ILI.Digital, Lahore, Pakistan",
    duration: "November 2020 – December 2022",
    description:
      "Created and designed game levels and characters. Developed game features and functions. Fixed bugs and optimized games.",
  },
];

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
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-orange -translate-x-1/2 z-0" />

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
                  className="relative flex items-start"
                >
                  {/* Dot */}
                  <span className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-orange rounded-full z-10" />

                  {/* Content */}
                  <div
                    className={`w-1/2 px-6 ${
                      isRight ? "ml-auto text-left" : "mr-auto text-right"
                    }`}
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

      {/* Dot Pagination */}
      {/* <div className="flex gap-1 justify-center">
        {Array.from({ length: totalPages }).map((_, i) => (
          <GoDotFill
            key={i}
            size={20}
            onClick={() => setPage(i)}
            className={`cursor-pointer transition-colors ${
              page === i ? "text-orange" : "text-porcelain"
            }`}
          />
        ))}
      </div> */}
    </div>
  );
};

export default WorkExperience;
