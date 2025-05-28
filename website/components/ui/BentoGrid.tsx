import { cn } from "@/lib/utils";
import { GlowingEffect } from "./GlowingEffect";

export const BentoGrid = ({
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

export const BentoGridItem = ({
  className,
  title,
  description
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative group/bento shadow-input row-span-1 flex flex-col rounded-xl border p-6 gap-3 font-montserrat",
        className
      )}
    >
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />

      <h1 className="text-2xl font-bold font-italiana text-accent">
        {title}
      </h1>
      
      <p>
        {description}
      </p>
    </div>
  );
};
