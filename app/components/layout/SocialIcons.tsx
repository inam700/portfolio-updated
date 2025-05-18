import React from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa6";

const socials = [
  {
    Icon: FaLinkedin,
    href: "https://www.linkedin.com/in/inaam-ullah-579418161/",
  },
  {
    Icon: FaGithub,
    href: "https://github.com/inam700",
  },
  {
    Icon: FaWhatsapp,
    href: "https://wa.me/923084966078", // WhatsApp international format
  },
];

const SocialIcons = () => (
  <div className="flex gap-2 mt-5">
    {socials.map(({ Icon, href }, idx) => (
      <Link
        key={idx}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group rounded-2xl p-2 border-2 border-orange hover:bg-orange transition-colors duration-200 ease-in-out"
      >
        <Icon
          size={20}
          className="group-hover:text-darkGray transition-colors duration-200 ease-in-out"
        />
      </Link>
    ))}
  </div>
);

export default SocialIcons;
