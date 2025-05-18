import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white text-center text-xm py-1 text-darkGray z-50">
      © {new Date().getFullYear()}.{" "}
      <span className="text-orange font-bold">Inam Ullah</span>. Built with
      Next.js & Tailwind CSS.{" "}
    </footer>
  );
};

export default Footer;
