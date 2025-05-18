import React from "react";
import Link from "next/link";
import { CheckCircle, FileCode, Code2, ShieldCheck } from "lucide-react";

const packages = [
  {
    title: "Basic",
    subtitle: "Single Page Application",
    price: "$25",
    description:
      "A fully responsive, single-page application — perfect for personal portfolios or landing pages.",
    features: [
      "7-day delivery",
      "Unlimited revisions",
      "1 page",
      "Design customization",
      "Content upload",
      "Responsive design",
    ],
    Icon: FileCode,
    ctaLink: "/contact",
  },
  {
    title: "Standard",
    subtitle: "Mid-Range Web Application",
    price: "$100",
    description:
      "A dynamic multi-page website with backend functionality using Node.js or Firebase — built for performance and scalability.",
    features: [
      "21-day delivery",
      "Unlimited revisions",
      "Up to 5 pages",
      "Design customization",
      "Content upload",
      "Responsive design",
    ],
    Icon: Code2,
    ctaLink: "/contact",
  },
  {
    title: "Premium",
    subtitle: "Enterprise-Level Full Stack Solution",
    price: "$400",
    description:
      "A complete full-stack web application with advanced features, backend integration, and clean, documented code.",
    features: [
      "60-day delivery",
      "Unlimited revisions",
      "Up to 10 pages",
      "Design customization",
      "Content upload",
      "Responsive design",
      "Full source code",
      "Deployment assistance",
    ],
    Icon: ShieldCheck,
    ctaLink: "/contact",
  },
];

const PricingSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10">
      {packages.map((pkg, index) => {
        const { Icon } = pkg;
        return (
          <div
            key={index}
            className="group relative flex flex-col justify-between rounded-2xl overflow-hidden border border-darkGray bg-gradient-to-br from-[#f6f6f6] via-[#e6eaea] to-[#ffffff] transition-all duration-300 ease-in-out hover:from-[#eaeaea] hover:via-[#fefefe] hover:to-[#ffffff]"
          >
            {/* Card Content */}
            <div className="p-6 pb-20">
              <div className="flex items-center gap-3 mb-4 min-h-[80px]">
                <Icon size={42} className="text-orange" />
                <div>
                  <h3 className="text-xl font-semibold text-darkGray">
                    {pkg.title}
                  </h3>
                  <p className="text-orange text-xs">{pkg.subtitle}</p>
                </div>
              </div>
              <div className="relative w-full mt-5 pb-5">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange to-transparent z-10" />
              </div>
              <p className="text-5xl font-semibold text-darkGray mb-5">
                {pkg.price}
              </p>
              <p className="text-sm text-gray-600 mb-10">{pkg.description}</p>
              <ul className="space-y-2 text-sm text-darkGray">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-orange" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Card Footer CTA */}
            <div className="absolute bottom-0 left-0 w-full">
              <Link
                href={pkg.ctaLink}
                className="block w-full text-sm text-center border border-t-darkGray border-b-0 border-l-0 border-r-0 bg-orange text-darkGray font-semibold py-3 hover:bg-orangeHover transition-colors duration-300"
              >
                Start Project
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PricingSection;
