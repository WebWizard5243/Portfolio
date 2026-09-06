import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

export default function Page() {
  return (
    <div className="relative w-full overflow-x-hidden ">
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Project />
      <Footer />
    </div>
  );
}
