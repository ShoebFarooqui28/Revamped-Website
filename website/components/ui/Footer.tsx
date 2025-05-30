import React from "react";
import Beams from "./Beams";
import Link from "next/link";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { RevealOnScroll } from "./RevealOnScroll";

const Footer = () => {
  return (
    <div className="flex mx-auto h-100 p-4 border rounded-3xl my-20 font-montserrat">
      <div className="flex justify-center items-center w-full border rounded-2xl overflow-hidden relative">
        <Beams
          beamWidth={0.8}
          beamHeight={30}
          beamNumber={20}
          lightColor="#BF40BF"
          speed={2}
          noiseIntensity={1}
          scale={0.2}
          rotation={30}
        />

        <RevealOnScroll delay={0.5} className="absolute flex flex-col gap-8">
          <div className="bg-foreground/10 py-1 rounded-full flex flex-row items-center justify-center gap-2 w-[80%] mx-auto">
            <div className="relative flex items-center">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500 shadow-[0_0_8px_2px_rgba(109,36,109,0.8)]"></span>
              <span className="absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-100 animate-ping"></span>
            </div>
            Available for work
          </div>

          <div>
            <h2 className="text-center font-italiana font-bold text-3xl">
              Shoeb Farooqui
            </h2>
          </div>

          <div className="space-x-6 flex justify-center">
            <Link href="https://www.instagram.com/shoebbbsss" target="_blank">
              <Instagram className="h-6 w-6 text-foreground hover:text-primary transition-all duration-300" />
            </Link>

            <Link href="mailto:farooquishoeb2@gmail.com" target="_blank">
              <Mail className="h-6 w-6 text-foreground hover:text-primary transition-all duration-300" />
            </Link>

            <Link href="https://github.com/ShoebFarooqui28" target="_blank">
              <Github className="h-6 w-6 text-foreground hover:text-primary transition-all duration-300" />
            </Link>

            <Link
              href="https://www.linkedin.com/in/shoeb-farooqui"
              target="_blank"
            >
              <Linkedin className="h-6 w-6 text-foreground hover:text-primary transition-all duration-300" />
            </Link>
          </div>

          <div className="text-xs text-center text-foreground/60">
            © {new Date().getFullYear()} Shoeb Farooqui. All rights reserved.
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
};

export default Footer;
