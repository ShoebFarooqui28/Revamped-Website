"use client";
import Footer from "@/components/ui/Footer";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Timeline } from "@/components/ui/Timeline";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      title: "About",
      content: (
        <div>
          <p className="mb-8 font-normal text-foreground text-sm md:text-base">
            Hey! I’m Shoeb — a passionate programmer, coder, graphic designer,
            and video editor. I enjoy building cool stuff on the web and
            experimenting with tech. I’m always learning and love diving deep
            into new tools, frameworks, and creative challenges. Whether it’s
            designing a slick UI or bringing an idea to life with code, I’m all
            in.{" "}
          </p>
          <div className="grid grid-cols-2 gap-4 saturate-0">
            <Image
              src="/images/beach.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-30 w-full rounded-2xl object-cover md:h-44 lg:h-100"
            />
            <Image
              src="/images/laptop.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-30 w-full rounded-2xl object-cover md:h-44 lg:h-100"
            />
            <Image
              src="/images/pole.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-30 w-full rounded-2xl object-cover md:h-44 lg:h-100"
            />
            <Image
              src="/images/duo.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-30 w-full rounded-2xl object-cover md:h-44 lg:h-100"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Education",
      content: (
        <div>
          <p className="mb-8 font-normal text-foreground text-sm md:text-base">
            Currently pursuing a Bachelor of Science in Information Technology
            (BScIT). This academic journey is helping me sharpen my skills in
            programming, software development, and all things tech. I come from
            a commerce background with Mathematics and IT as my core subjects in
            high school. That foundation gave me a strong grip on logic,
            analytical thinking, and a practical understanding of business
            processes — all of which blend perfectly with my current focus in
            tech.
          </p>
          <div className="grid grid-cols-2 gap-4 saturate-0">
            <Image
              src="/images/coding.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-30 w-full rounded-2xl object-cover md:h-44 lg:h-100"
            />
            <Image
              src="/images/studies.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-30 w-full rounded-2xl object-cover md:h-44 lg:h-100"
            />
            <Image
              src="/images/keyboard.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-30 w-full rounded-2xl object-cover md:h-44 lg:h-100"
            />
            <Image
              src="/images/math.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-30 w-full rounded-2xl object-cover md:h-44 lg:h-100"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Hobbies",
      content: (
        <div>
          <p className="mb-8 font-normal text-foreground text-sm md:text-base">
            When I’m not coding, I’m probably editing videos, designing
            graphics, caring for houseplants, flying flight simulators, or
            watching anime. I’m also into aviation, gaming, photography, and
            anything tech-related. Learning new things and exploring different
            fields keeps me fired up.
          </p>
          <div className="grid grid-cols-2 gap-4 saturate-0">
            <Image
              src="/images/monstera.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-30 w-full rounded-2xl object-cover md:h-44 lg:h-100"
            />
            <Image
              src="/images/a320.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-30 w-full rounded-2xl object-cover md:h-44 lg:h-100"
            />
            <Image
              src="/images/football.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-30 w-full rounded-2xl object-cover md:h-44 lg:h-100"
            />
            <Image
              src="/images/setup.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-30 w-full rounded-2xl object-cover md:h-44 lg:h-100"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <RevealOnScroll>
      <div className="relative w-full overflow-clip">
        {/* Content */}
        <Timeline data={data} />

        {/* Footer */}
        <RevealOnScroll className="max-w-7xl mx-auto px-6">
          <Footer />
        </RevealOnScroll>
      </div>
    </RevealOnScroll>
  );
};

export default page;
