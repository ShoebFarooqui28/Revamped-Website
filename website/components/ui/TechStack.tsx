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
  SiOpenjdk,
  SiHtml5,
  SiCss3,
  SiGit,
  SiGithub,
  SiNpm,
  SiDocker,
  SiNeovim,
} from "react-icons/si";
import { InfiniteScroll } from "./InfinteScroll";

const techStack = [
  { name: "React", icon: <SiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Python", icon: <SiPython /> },
  { name: "Java", icon: <SiOpenjdk /> },
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "CSS3", icon: <SiCss3 /> },
  { name: "Git", icon: <SiGit /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "NPM", icon: <SiNpm /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "Neovim", icon: <SiNeovim /> },
];

export default function TechScrollerPage() {
  return (
    <div>
      <InfiniteScroll
        techStack={techStack}
        speed="fast"
        pauseOnHover
        direction="left"
      />
    </div>
  );
}
