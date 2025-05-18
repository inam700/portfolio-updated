"use client";
import React, { useEffect, useState } from "react";
import PricingSection from "./Pricing";
import Services from "./Services";

const titles = ["Software Engineer", "Full-Stack JavaScript Developer"];

const HomePage = () => {
  const [index, setIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-10">
      <div className="flex flex-col md:flex-row items-baseline gap-2 text-xl md:text-3xl">
        <p>Hello, I&apos;m a</p>
        <p
          key={titles[index]}
          className="font-semibold animate-shuttle text-orange"
        >
          {titles[index]}
        </p>
      </div>
      {/* <p className="text-7xl font-semibold mt-5">
        JavaScript Developer Based in Lahore, Pakistan.
      </p> */}
      <p className="mt-5 text-justify md:text-left">
        JavaScript developer with 4+ years of experience specializing in
        full-stack development using React.js, Next.js, Node.js, Express.js and
        MongoDB. Proven success in building scalable SaaS platforms, responsive
        UIs, and secure backend architectures. Experienced in leading teams,
        delivering performance-optimized apps, and integrating real-time
        features.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-5">
        <div className="flex justify-center items-center gap-3">
          <p className="text-9xl">10</p>
          <p className="text-orange">
            Completed <br /> Projects
          </p>
        </div>
        <div className="flex justify-center items-center gap-3">
          <p className="text-9xl">4</p>
          <p className="text-orange">
            Years <br /> of Experience
          </p>
        </div>
        <div className="flex justify-center items-center gap-3">
          <p className="text-9xl">5</p>
          <p className="text-orange">
            Happy <br /> Clients
          </p>
        </div>
      </div>
      <div className="relative w-full mt-10 mb-8 pt-1">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange to-transparent z-10" />
      </div>
      <p className="mt-5 text-3xl">Services I Offer</p>
      <Services />
      <div className="relative w-full mt-10 mb-8 pt-1">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange to-transparent z-10" />
      </div>
      <p className="mt-5 text-3xl">Tailored Pricing for Your Project Needs</p>
      <PricingSection />
    </div>
  );
};

export default HomePage;
