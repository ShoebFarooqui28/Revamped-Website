"use client";
import { FlipWords } from "@/components/ui/FlipWords";
import Orb from "@/components/ui/Orb";
import TechStack from "@/components/ui/TechStack";
import React from "react";
import { FileText } from "lucide-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const HomePage = () => {
  const words = ["code", "art", "life", "work"];

  const summaryItems = [
    {
      title: "Who I Am",
      description:
        "I'm a full-stack developer who loves building clean, user-friendly apps and constantly learning new things in tech.",
    },
    {
      title: "What I Do",
      description:
        "I build responsive web apps using React, Next.js, and TypeScript, and cross-platform mobile apps with React Native. From writing clean frontend code to managing backend APIs, I focus on performance, design, and user experience.",
    },
    {
      title: "What I'm Building",
      description:
        "I'm currently working on full-stack web and mobile projects that solve real-world problems — including portfolio sites, productivity tools, and lifestyle apps. I'm also exploring backend integrations, APIs, and better ways to scale my projects.",
    },
    {
      title: "What Drives Me",
      description:
        "I enjoy turning ideas into real products, and I’m always exploring new tools, and pushing my skills to the next level.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-8 my-12">
      {/* Hero Section */}
      <div className="flex flex-col w-full h-full gap-8">
        <h1 className="text-5xl md:text-7xl font-italiana font-bold text-foreground text-start mx-auto">
          Turning
          <FlipWords words={words} /> <br />
          into digital reality.
        </h1>
        <p className="text-lg md:text-xl font-montserrat text-foreground/70 max-w-2xl text-start md:text-center mx-auto">
          Hey, I&apos;m <span className="text-foreground font-semibold">Shoeb Farooqui</span>{" "}
          — a full-stack developer crafting immersive experiences with
          modern technologies and creative solutions.
        </p>

        <div className="flex gap-4 justify-start md:justify-center font-montserrat">
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#BF40BF_0%,#393BB2_50%,#BF40BF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background px-4 py-1 text-sm font-bold text-white backdrop-blur-3xl">
              Know More
            </span>
          </button>
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#BF40BF_0%,#393BB2_50%,#BF40BF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background px-4 py-1 text-sm font-bold text-white backdrop-blur-3xl">
              Contact
            </span>
          </button>
        </div>

        <div className="w-full h-80 md:h-100">
          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={290}
            forceHoverState={false}
          />
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="my-20">
        <TechStack />
      </div>

      {/* Summary About Me */}
      <RevealOnScroll delay={0.3}>
        <div className="my-20">
          <div className="flex items-center gap-2">
            <FileText size={28} color="#BF40BF"/>
            <h1 className="font-italiana text-3xl font-bold">Summary</h1>
          </div>

          <div className="relative rounded-3xl p-4 mt-8 border">
            <BentoGrid>
              {summaryItems.map((item, i) => (
                <BentoGridItem
                  key={i}
                  title={item.title}
                  description={item.description}
                  className={`${
                    i === 1 || i === 2 ? "md:col-span-2" : ""
                  } rounded-2xl`}
                />
              ))}
            </BentoGrid>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  );
};

export default HomePage;
