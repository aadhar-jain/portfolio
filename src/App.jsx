import "./app.scss"
import { useRef, useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Name from "./components/name/Name";
import Sidebar from "./components/sidebar/Sidebar";
import { motion } from "framer-motion"
import Parallax from "./components/parallax/Parallax";
import Project from "./components/projects/Project";
import Contacts from "./components/contacts/Contacts";
import Cursor from "./components/cursor/Cursor";

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const firstSectionRef = useRef();

  useEffect(() => {
    // Scroll to the first section on component mount
    if (firstSectionRef.current) {
      firstSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the first section is in the viewport
      const { top } = firstSectionRef.current.getBoundingClientRect();
      const isOnFirstSection = top >= -200 && top <= window.innerHeight;

      // Update the state to show or hide the sidebar
      setShowSidebar(!isOnFirstSection);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const [text, setText] = useState('Hello');

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setText('Hola');
    }, 600);

    const timeout2 = setTimeout(() => {
      setText('Bonjour');
    }, 1100);
    const timeout3 = setTimeout(() => {
      setText('Hallo');
    }, 1400);

    const timeout4 = setTimeout(() => {
      setText('नमस्ते');
    }, 1800);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      clearTimeout(timeout4);
    };
  }, []);
  const [showDelay, setShowDelay] = useState(2);

  return <div>
    <motion.div className="blackScreen"
      style={{ color: "white", fontSize: "60px", textAlign: "center", lineHeight: "100vh" }}
      initial={{ clipPath: "circle(2000px at 600px 0px)", }}
      animate={{ clipPath: "circle(3000px at 600px -3000px)", }}
      transition={{
        delay: showDelay,
        type: "spring",
        stiffness: 230,
        damping: 40,
      }}
    >{text}</motion.div>

    <Cursor />
    <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

    <section id="Home" ref={firstSectionRef}>
      <Navbar showDelay={showDelay} />
      <Hero showDelay={showDelay} />
      <Name showDelay={showDelay} />
    </section>
    <section id="Projects">
      <Parallax type="projects" />
    </section>

    <Project />


    <section id="Contact">
      <Contacts />
    </section>
  </div>
};

export default App;
