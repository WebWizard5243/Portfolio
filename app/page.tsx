import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Project />
      <Footer />
    </div>
  );
}
