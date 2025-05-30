import { cn } from "@/lib/utils";
import Image from "next/image";
import { GlowingEffect } from "./GlowingEffect";

import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiFirebase,
  SiPython,
  SiSpring,
  SiGradle,
  SiHtml5,
  SiCss3,
  SiGit,
  SiGithub,
  SiNpm,
  SiDocker,
  SiNeovim,
  SiShadcnui
} from "react-icons/si";

import { FaJava } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
const techIcons: {
  [key: string]: React.ComponentType<{ className?: string }>;
} = {
  react: SiReact,
  next: SiNextdotjs,
  node: SiNodedotjs,
  mongodb: SiMongodb,
  tailwind: SiTailwindcss,
  javascript: SiJavascript,
  typescript: SiTypescript,
  firebase: SiFirebase,
  python: SiPython,
  java: FaJava,
  spring: SiSpring,
  gradle: SiGradle,
  html: SiHtml5,
  css: SiCss3,
  git: SiGit,
  github: SiGithub,
  npm: SiNpm,
  docker: SiDocker,
  neovim: SiNeovim,
  shadcn: SiShadcnui,
};

export const ProjectBentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const ProjectBentoItem = ({
  className,
  title,
  description,
  imgSrc,
  stack,
  link,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  imgSrc?: string;
  stack?: string[];
  link?: string;
}) => {
  return (
    <div className="relative flex flex-col font-montserrat rounded-2xl border">
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />
      <div
        className={cn(
          "relative group/bento shadow-input row-span-1 rounded-xl p-6 h-60 md:h-70",
          className
        )}
      >
        <div className="relative w-full h-full">
          {imgSrc && (
            <Image
              src={imgSrc}
              alt="Project Placeholder"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2 m-6">
        <h1 className="text-2xl font-bold font-italiana text-accent">
          {title}
        </h1>

        <p>{description}</p>

        <div className="flex flex-wrap gap-2 mt-4 items-center">
          {stack?.map((tech, index) => {
            const Icon = techIcons[tech.toLowerCase()];
            const isGit = Icon === SiGit;

            return (
              <div
                key={index}
                className="flex items-center justify-center gap-2 px-3 py-2 bg-secondary rounded-full text-sm font-montserrat"
              >
                {Icon && <Icon className="w-5 h-5" />}
                <span>{tech}</span>
                {isGit && <Link href={link}><ArrowUpRight className="w-6 h-6 bg-foreground/10 rounded-full p-1 cursor-pointer" /></Link>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
