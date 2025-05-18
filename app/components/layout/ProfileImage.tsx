import Image from "next/image";
import React from "react";

const ProfileImage = () => (
  <div className="mt-10 w-[180px] h-[180px] bg-orange rounded-2xl overflow-hidden">
    <Image
      src="/profile-1.png"
      width={180}
      height={180}
      alt="Inam Ullah | Senior Software Engineer | Full Stack Developer"
      className="ms-1"
      priority
    />
  </div>
);

export default ProfileImage;
