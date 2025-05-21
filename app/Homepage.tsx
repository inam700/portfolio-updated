"use client";
import React, { useState, useEffect } from "react";
import PricingSection from "./Pricing";
import Services from "./Services";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Link from "next/link";

const titles = ["Software Engineer", "Full-Stack JavaScript Developer"];

const Homepage = () => {
  const [index, setIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-10">
      <div className="flex flex-col md:flex-row items-baseline gap-2 text-xl lg:text-3xl">
        <p>Hello, I&apos;m a</p>
        <p
          key={titles[index]}
          className="font-semibold animate-shuttle text-orange"
        >
          {titles[index]}
        </p>
      </div>
      <motion.p
        className="mt-5 text-justify lg:text-left"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        JavaScript developer with 4+ years of experience specializing in
        full-stack development using React.js, Next.js, Node.js, Express.js and
        MongoDB. Proven success in building scalable SaaS platforms, responsive
        UIs, and secure backend architectures. Experienced in leading teams,
        delivering performance-optimized apps, and integrating real-time
        features.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-5 md:mt-10 lg:mt-5">
        <div className="flex justify-center items-center gap-3">
          <p className="text-9xl md:text-5xl lg:text-9xl">10</p>
          <p className="text-orange">
            Completed <br /> Projects
          </p>
        </div>
        <div className="flex justify-center items-center gap-3">
          <p className="text-9xl md:text-5xl lg:text-9xl">4</p>
          <p className="text-orange">
            Years <br /> of Experience
          </p>
        </div>
        <div className="flex justify-center items-center gap-3">
          <p className="text-9xl md:text-5xl lg:text-9xl">5</p>
          <p className="text-orange">
            Happy <br /> Clients
          </p>
        </div>
      </div>
      <div className="relative w-full mt-10 mb-8 pt-1">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange to-transparent z-10" />
      </div>
      <p className="mt-5 md:text-lg lg:text-3xl">Services I Offer</p>
      <Services />
      <div className="relative w-full mt-10 mb-8 pt-1">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange to-transparent z-10" />
      </div>
      {/* <p className="mt-5 md:text-lg lg:text-3xl">
        Tailored Pricing for Your Project Needs
      </p>
      <PricingSection /> */}

      <p className="mt-5 md:text-lg lg:text-3xl">Want to Work Together?</p>
      <p className="text-sm text-porcelain/80 mt-2 mb-5">
        I offer flexible, project-based pricing tailored to your scope,
        timeline, and goals. Whether it's a dashboard, full-stack app, or custom
        integration — let’s build it together.
      </p>
      <Link
        href="/hire-me"
        className="flex items-center justify-center gap-1 text-sm font-semibold py-2 px-8 mb-10 w-fit bg-orange text-darkGray hover:bg-orangeHover transition-colors duration-300 cursor-pointer"
      >
        View Pricing
      </Link>
    </div>
  );
};

export default Homepage;
