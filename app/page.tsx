import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="border-t border-[#27272a] py-8 px-6 text-center">
        <p className="text-sm text-[#52525b]">
          &copy; {new Date().getFullYear()} Rayhan Habib Mohammad Shadhin. Built
          with Next.js &amp; Tailwind CSS.
        </p>
      </footer>
    </>
  );
}
