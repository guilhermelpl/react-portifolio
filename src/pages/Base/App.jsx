import { useRef, useState } from "react";
import "./App.css";
import Hero from "../../components/Hero";
import NavBar from "../../components/NavBar";
import AboutMe from "../../components/AboutMe";
import Technologies from "../../components/Technologies";
import Experience from "../../components/Experience";
import Contact from "../../components/Contact";
import Projects from "../../components/Projects";

function App() {
  const [translate, setTranslate] = useState(false);

  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

 return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-8">
        <NavBar
          translate={translate}
          setTranslate={setTranslate}
          experienceRef={experienceRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />
        <Hero translate={translate} />
        <AboutMe translate={translate} />
        <Technologies translate={translate} />
        <div ref={experienceRef}>
          <Experience translate={translate} />
        </div>
        <div ref={projectsRef}>
          <Projects translate={translate} />
        </div>
        <div ref={contactRef}>
          <Contact translate={translate} />
        </div>
      </div>
    </div>
  );
}

export default App;
