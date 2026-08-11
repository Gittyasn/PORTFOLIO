import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Education } from "@/components/sections/education";
import { Experience } from "@/components/sections/experience";
import { Certifications } from "@/components/sections/certifications";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-16 relative overflow-hidden bg-dot-pattern">
        {/* Animated Backdrop Bubbles */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-[10%] left-[5%] w-96 h-96 rounded-full bg-primary/4 blur-3xl bubble-float-1" />
          <div className="absolute top-[35%] right-[5%] w-[450px] h-[450px] rounded-full bg-rose-400/3 blur-3xl bubble-float-2" />
          <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] rounded-full bg-primary/3 blur-3xl bubble-float-3" />
        </div>

        {/* Scrollable Content */}
        <div className="relative z-10">
          <Hero />
          <About />
          <Projects />
          <Education />
          <Experience />
          <Certifications />
          <Skills />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
