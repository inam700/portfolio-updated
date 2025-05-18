import React from "react";
import { ServerCog, ShoppingCart, RefreshCcwDot } from "lucide-react";

const Services = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
      {[
        {
          tagline: "End-to-end web solutions, built for speed and scale.",
          name: "Full-Stack Development",
          description:
            "I specialize in building robust and scalable web applications using the JavaScript Frameworks and Libraries. My expertise includes creating RESTful APIs, integrating third-party services, and ensuring seamless user experiences.",
          Icon: ServerCog,
        },
        {
          tagline: "Turning ideas into smooth shopping experiences.",
          name: "E-commerce Development",
          description:
            "I build high-performing e-commerce platforms tailored for conversion and user experience. From custom product pages to checkout flows, I integrate secure payment gateways and admin panels that scale with your business.",
          Icon: ShoppingCart,
        },
        {
          tagline: "Modernizing outdated systems for future-ready performance.",
          name: "Migrating Legacy Systems",
          description:
            "I help businesses modernize outdated applications by migrating legacy systems to modern tech stacks. This includes code refactoring, UI redesign, performance boosts, and seamless data migration.",
          Icon: RefreshCcwDot,
        },
      ].map((item, i) => {
        const { Icon } = item;
        return (
          <div
            key={i}
            className="min-h-[290px] border border-darkGray p-10 rounded-2xl transition-all duration-300 ease-in-out 
              bg-gradient-to-tl from-[#1e1d1d] via-[#2b2b2b] to-[#3a3a3a] 
              hover:bg-gradient-to-tr hover:from-[#242424] hover:via-[#333333] hover:to-[#444444]"
          >
            <div className="flex items-center gap-5">
              <div>
                <Icon size={42} className="text-orange" />
              </div>
              <div>
                <p className="text-orange text-xs">{item.tagline}</p>
                <p className="text-xl font-semibold">{item.name}</p>
              </div>
            </div>
            <div className="relative w-full mt-5">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange to-transparent z-10" />
            </div>
            <p className="mt-10 text-sm font-light">{item.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
