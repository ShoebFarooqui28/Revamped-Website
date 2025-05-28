"use client";
import Iridescence from "@/components/ui/Iridescence";
import BlurText from "@/components/ui/BlurText";
import Link from "next/link";
import AnimatedContent from "@/components/ui/AnimatedContent";

const Page = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Iridescence
        color={[1, 1, 1]}
        mouseReact={false}
        amplitude={0.1}
        speed={1.0}
      />
      <div className="absolute z-10 text-center px-6">
        <BlurText
          text="Shoeb codes the Future."
          delay={150}
          animateBy="words"
          direction="top"
          className="text-7xl md:text-8xl lg:text-9xl font-bold text-black font-italiana"
        />

        <AnimatedContent
          distance={100}
          direction="vertical"
          reverse={false}
          config={{ tension: 100, friction: 30 }}
          initialOpacity={0}
          animateOpacity={true}
          delay={1000}
          threshold={0.1}
        >
          <div className="flex flex-col justify-center mt-4 gap-4 items-start lg:items-center font-montserrat">
            <p className="text-black text-lg md:text-3xl font-bold text-start lg:text-center">
              Full-stack developer. Designer. Maker of fast, beautiful web
              experiences.
            </p>

            <div className="flex flex-row gap-4 font-bold">
              <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                <Link href="/home" className="font-bold">Get Started</Link>
                </span>
              </button>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </div>
  );
};

export default Page;
