"use client";
import React, { ReactElement, useState } from "react";
import { Progress } from "@/components/ui/progress"; // ✅ Import ShadCN progress

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMaterialdesign,
  SiChakraui,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiGraphql,
  SiRedux,
  SiTestinglibrary,
  SiJest,
  SiCypress,
  SiDocker,
  SiGit,
  SiPostman,
  SiBitbucket,
  SiJira,
  SiTrello,
  SiCloudinary,
  SiOpenai,
  SiLerna,
} from "react-icons/si";
import { Check, CheckCircle } from "lucide-react";

const skills: any = {
  frontend: [
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "React.js", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Material UI", icon: SiMaterialdesign },
    { name: "ShadCN", icon: null },
    { name: "Chakra UI", icon: SiChakraui },
    { name: "SCSS", icon: null },
    { name: "Bootstrap", icon: SiBootstrap },
  ],
  backend: [
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express.js", icon: SiExpress },
    { name: "Firebase (Auth, Firestore, FCM)", icon: SiFirebase },
    { name: "MongoDB", icon: SiMongodb },
    { name: "REST APIs", icon: null },
    { name: "GraphQL", icon: SiGraphql },
  ],
  stateManagement: [
    { name: "Redux Toolkit", icon: SiRedux },
    { name: "Zustand", icon: null },
    { name: "Context API", icon: null },
    { name: "React Query", icon: null },
  ],
  testing: [
    { name: "Jest", icon: SiJest },
    { name: "React Testing Library", icon: SiTestinglibrary },
    { name: "Cypress", icon: SiCypress },
  ],
  devOps: [
    { name: "Docker", icon: SiDocker },
    { name: "Git", icon: SiGit },
    { name: "Postman", icon: SiPostman },
    { name: "Bitbucket", icon: SiBitbucket },
    { name: "Jira", icon: SiJira },
    { name: "Trello", icon: SiTrello },
  ],
  others: [
    { name: "Role-Based Access Control (RBAC)", icon: null },
    { name: "SSO", icon: null },
    { name: "Cloudinary", icon: SiCloudinary },
    { name: "ChatGPT Integration", icon: SiOpenai },
    { name: "Monorepo Architecture", icon: SiLerna },
  ],
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState("frontend");
  return (
    <div>
      <div className="relative grid grid-cols-3 gap-10 mt-5">
        {/* Faded top border */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-orange via-orange to-transparent z-10" />
        <div className="relative">
          <div className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-orange via-orange to-transparent z-10 pointer-events-none" />

          {Object.keys(skills).map((key) => (
            <div
              key={key}
              onClick={() => setActiveTab(key)}
              className={`min-w-96 capitalize cursor-pointer text-sm text-porcelain mt-4 py-2 px-4 transition-colors duration-300 ${
                activeTab === key
                  ? "font-semibold bg-gradient-to-l from-transparent via-transparent to-orange/50"
                  : ""
              }`}
            >
              {key.replace(/([A-Z])/g, " $1")}
            </div>
          ))}
        </div>
        <div className="col-span-2 mt-4">
          <div className="flex flex-wrap gap-5">
            {skills[activeTab]?.map(
              (
                { name, icon: Icon }: { name: string; icon: any },
                index: number
              ) => (
                <div
                  key={index}
                  className="flex items-center gap-2 border border-orange px-3 py-2 text-sm font-medium text-porcelain"
                >
                  {Icon && <Icon size={20} />}
                  {name}
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <div className="relative grid grid-cols-2 mt-10 text-porcelain">
        {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-orange via-orange to-transparent z-10 pointer-events-none" /> */}

        {/* Languages Section */}
        <div>
          <p className="text-3xl text-center font-semibold tracking-wide">
            Languages
          </p>
          <div className="relative w-full mt-2 mb-12">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange to-transparent z-10" />
          </div>

          <div className="space-y-6 px-6">
            <div>
              <div className="flex justify-between items-center text-sm mb-1 font-medium">
                <div className="flex items-center gap-2">
                  <img
                    src="https://flagcdn.com/w40/gb.png"
                    alt="UK Flag"
                    className="w-5 h-4 object-cover rounded-sm"
                  />
                  <span>English</span>
                </div>
                <span>90%</span>
              </div>
              <Progress
                value={90}
                className="h-2 bg-porcelain [&>div]:bg-orange"
              />
            </div>

            <div className="">
              <div className="mt-10 flex justify-between items-center text-sm mb-1 font-medium">
                <div className="flex items-center gap-2">
                  <img
                    src="https://flagcdn.com/w40/pk.png"
                    alt="Pakistan Flag"
                    className="w-5 h-4 object-cover rounded-sm"
                  />
                  <span>Urdu</span>
                </div>
                <span>100%</span>
              </div>
              <Progress
                value={100}
                className="h-2 bg-porcelain [&>div]:bg-orange"
              />
            </div>
          </div>
        </div>

        {/* Soft Skills Section */}
        <div>
          <p className="text-3xl text-center font-semibold tracking-wide">
            Soft Skills
          </p>
          <div className="relative w-full mt-2 mb-12">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange to-transparent z-10" />
          </div>

          <ul className="space-y-3 px-6 text-sm leading-relaxed">
            {[
              "Clear communicator",
              "Team player",
              "Quick problem-solver",
              "Adaptable mindset",
              "Manages time well",
              "Thinks critically",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-orange mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
