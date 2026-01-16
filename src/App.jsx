import { motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

<div className="fixed inset-0 -z-10 overflow-hidden">
  <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-slate-700/30 rounded-full blur-[140px] animate-pulse"></div>
  <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-gray-600/30 rounded-full blur-[140px] animate-pulse"></div>
</div>


export default function App() {
  return (
    <motion.div initial={{ opacity: 0}} animate={{ opacity: 1}}  transition={{ duration: 0.6 }}>
    <div className="bg-gray-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
        <Projects />
      <Resume/>
      <Contact />
      <Footer />
    </div>
    </motion.div>
  );
}
