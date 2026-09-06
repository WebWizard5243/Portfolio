import React from "react";
import Animation from "./Animation";
import OrbitImages from "./OrbitImages";
import {
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiCplusplus,
  SiPostgresql,
  SiLangchain,
  SiLanggraph,
} from "react-icons/si";
import BlurText from "./BlurText";

const TechLogos = [
  { node: <Animation src="/animations/C.lottie" /> },
  { node: <SiTailwindcss color="#38BDF8" /> },
  { node: <Animation src="/animations/next.lottie" /> },
  { node: <SiHtml5 color="#E34F26" /> },
  { node: <Animation src="/animations/Java.lottie" /> },
  { node: <SiCss color="#1572B6" /> },
  { node: <Animation src="/animations/Nodejs.lottie" /> },
  { node: <SiJavascript color="#F7DF1E" /> },
  { node: <Animation src="/animations/Python.lottie" /> },
  { node: <Animation src="/animations/Cplus.lottie" /> },
  { node: <Animation src="/animations/React.lottie" /> },
  { node: <SiPostgresql color="#336791" /> },
  { node: <Animation src="/animations/TypeScript.lottie" /> },
  { node: <SiLangchain color="#13C6A4" /> },
  { node: <Animation src="/animations/github.lottie" /> },
];

export default function Skills() {
  return (
    <div
      id="skills"
      className="min-h-[50vh] w-full overflow-hidden flex flex-col text-white items-center bg-black"
    >
      <div className="">
        <BlurText
          text="Skills"
          className=" text-3xl md:text-5xl justify-center text-center font-bold tracking-wider mb-10"
        />

        <p className="text-lg md:text-xl text-center tracking-widest text-gray-400">
          Technologies I've spent time building, breaking, and learning with.
        </p>
      </div>

      <OrbitImages
        items={TechLogos.map((tech, idx) => (
          <div
            key={idx}
            className="w-full h-full flex items-center justify-center text-5xl"
          >
            {tech.node}
          </div>
        ))}
        shape="ellipse"
        baseWidth={1300}
        radiusX={520}
        radiusY={90}
        rotation={-8}
        duration={30}
        itemSize={80}
        responsive={true}
        aspectRatio="16/6"
        direction="normal"
        fill
        showPath
        paused={false}
        pathColor="rgba(255, 255, 255,0.2)"
        pathWidth={2}
      />
    </div>
  );
}
