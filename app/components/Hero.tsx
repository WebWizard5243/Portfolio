import Moon from "./Moon";
import FoldText from "./FoldText";

export default function Hero() {
  return (
    <div
      id="home"
      className="min-h-screen grid grid-cols-2 items-center gap-1  text-white"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      <div className="bg-black flex flex-col items-start gap-2 text-center justify-center w-full px-12 py-8">
        <p className="text-xl">Hi, I'm</p>
        <FoldText
          text="Md Kaif"
          splitBy="char"
          hinge="top"
          trigger="mount"
          duration={0.65}
          stagger={0.045}
          ease="power3.out"
          perspective={700}
          creaseShading={0.55}
          fontSize={80}
          fontWeight={800}
          color="#f7f2e8"
        />
        <FoldText
          text="Nawaz Khurram"
          splitBy="char"
          hinge="top"
          trigger="mount"
          duration={0.65}
          stagger={0.045}
          ease="power3.out"
          perspective={700}
          creaseShading={0.55}
          fontSize={80}
          fontWeight={800}
          color="#f7f2e8"
        />
        <h2 className="text-2xl">Full-Stack Developer & AI Developer </h2>
        <button className="mt-4 px-4 py-2 border border-[#2DD4BF] text-[#2DD4BF] rounded-3xl">
          Say Hi!
        </button>
      </div>
      <div className="relative h-screen w-full">
        <Moon />
      </div>
    </div>
  );
}
