"use client";
import React from "react";
import Header from "../Header";
import AnimatedBackground from "../Animation";
import Sidebar from "./Sidebar";
import Footer from "../Footer";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-porcelain">
      <AnimatedBackground />

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="container mx-auto max-w-[1600px] px-4">
          <div className="px-20 py-10 min-h-screen">
            <Header />
            <div className="flex gap-10 mt-10 text-porcelain">
              <Sidebar />
              <main className="w-[70%] h-[73vh] px-10 overflow-y-auto bg-darkGray/80 rounded-2xl transition-transform duration-300 ease-in-out hover:scale-[1.01] scrollbar-thin scrollbar-thumb-[#ff8827] scrollbar-track-transparent">
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
