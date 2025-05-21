import { CheckCircle, FileCode, Code2, ShieldCheck } from "lucide-react";

export const packages = [
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
