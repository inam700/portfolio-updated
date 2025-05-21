import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle } from "lucide-react";
import { projects } from "@/data/projects";

const WorkPage = () => {
  return (
    <div className="my-10">
      <p className="text-3xl mb-10 text-porcelain">Key Projects</p>

      <Accordion
        type="multiple"
        defaultValue={["capitalm"]}
        className="w-full space-y-2"
      >
        {projects.map(({ value, title, summary, techStack, keyPoints }) => (
          <AccordionItem value={value} className="border-none">
            <AccordionTrigger className="bg-orange md:text-xl font-semibold text-darkGray px-4 py-3 rounded-none hover:bg-orangeHover hover:no-underline [&>svg]:text-darkGray shadow-none border-none">
              {title}
            </AccordionTrigger>
            <AccordionContent
              className="text-porcelain px-4 md:px-6 py-4 transition-all duration-300 ease-in-out 
              bg-gradient-to-tl from-[#1e1d1d] via-[#2b2b2b] to-[#3a3a3a] 
              hover:bg-gradient-to-tr hover:from-[#242424] hover:via-[#333333] hover:to-[#444444]"
            >
              <div className="mb-3">
                <p className="text-orange text-lg mb-3">Short Summary</p>

                <p className="text-sm mb-2">{summary}</p>
              </div>
              <div className="relative w-full mt-5 pb-5">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange to-transparent z-10" />
              </div>
              <div className="mb-3">
                <p className="text-orange text-lg mb-3">Tools & Technologies</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-4 items-center text-sm">
                  {techStack.map(({ Icon, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-2 bg-porcelain/10 hover:bg-porcelain/30 px-3 py-2 text-sm font-medium text-porcelain rounded-2xl shadow-md transition-all duration-300 ease-in-out"
                    >
                      {Icon && <Icon size={20} />}
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative w-full mt-5 pb-5">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange to-transparent z-10" />
              </div>

              <div className="mb-3">
                <p className="text-orange text-lg mb-3">Key Points</p>
                <ul className="list-disc space-y-1 text-sm">
                  {keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle size={14} className="text-orange mt-1" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default WorkPage;
