import Moon from "./Moon";
import MaskedHeading from "./MaskHeading";
export default function Hero() {
  return (
    <div
      id="home"
      className="min-h-screen flex flex-col justify-center lg:grid lg:grid-cols-2 items-center  lg:gap-1  text-white"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      <div className="order-2 lg:order-1 bg-black/70 flex flex-col items-center lg:items-start gap-2 text-center lg:text-left justify-center w-full px-6 py-12 lg:px-12 lg:py-8">
        <p className="text-lg lg:text-xl">Hi, I'm</p>

        <MaskedHeading
          text="Md Kaif Nawaz Khurram"
          tracking={-0.03}
          lineHeight={1.06}
          textScale={0.116}
          parallax={50}
          className="text-center lg:text-left"
          src="/moonTexture.png"
        />
        <h2 className="text-lg md:text-2xl">
          Full-Stack Developer & AI Developer{" "}
        </h2>
        <a
          className="bg-black mt-4 px-4 py-2 border border-[#2DD4BF] text-[#2DD4BF] hover:bg-[#2DD4BF]/20 rounded-3xl transform transition-transform duration-200 hover:-translate-y-1"
          href="mailto:kaifnawaz92@gmail.com"
        >
          Say Hi!
        </a>
      </div>
      <div className="order-1 lg:order-2 relative h-[50vh] lg:h-[90vh] md:h-[50vh] w-full flex items-center justify-center">
        <Moon />
      </div>
    </div>
  );
}
