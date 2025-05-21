"use client";
import React from "react";
import Header from "../Header";
import AnimatedBackground from "../Animation";
import Sidebar from "./Sidebar";
import Footer from "../Footer";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1024px)");

  const shouldShowSidebar = (isHome && isTablet) || (isHome && isMobile);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-porcelain">
      <AnimatedBackground />

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="container mx-auto max-w-[1600px] px-4">
          <div className="md:px-20 py-5 md:py-10 min-h-screen">
            <Header />
            <div className="flex flex-col xl:flex-row xl:gap-10 mt-10 text-porcelain xl:h-[73vh]">
              {shouldShowSidebar && (
                <div className="w-full xl:hidden">
                  <Sidebar />
                </div>
              )}

              {!isMobile && (
                <div className="hidden xl:block w-full xl:w-[30%] h-full">
                  <Sidebar />
                </div>
              )}
              <main className="my-10 xl:my-0 w-full xl:w-[70%] h-full px-5 xl:px-10 xl:overflow-y-auto bg-darkGray/80 xl:rounded-2xl transition-transform duration-300 ease-in-out hover:scale-[1.01] scrollbar-thin scrollbar-thumb-[#ff8827] scrollbar-track-transparent">
                {children}
              </main>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
