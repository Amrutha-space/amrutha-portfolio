import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-[#0f1117]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-4xl w-full rounded-3xl p-[2px] bg-[#0f1117]"
      >
         <div className="rounded-3xl bg-black/70 backdrop-blur-xl border border-white/10 p-10 text-center
                        shadow-[0_0_60px_rgba(99,102,241,0.35)]">

<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
  Hi, I'm <span className="text-blue-400">ANNEPU AMRUTHA</span>
</h1>

<p className="text-base sm:text-lg md:text-xl text-gray-300 mb-2">
  Software Development Engineer | Full Stack Developer | AI Enthusiast | DevOps
</p>
 
          <p className="text-sm md:text-base text-gray-400 mb-6">
            Final Year CSE @ Malla Reddy Institute of Technology & Sciences (Class of 2026)
          </p>

          <div className="flex justify-center gap-4 mt-6">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-[#0f1117]-600 hover:bg-blue-700 transition text-white font-medium"
            >
              View Projects
<br /></a>
            <a
              href="/Amrutha_A_Resume.pdf"
              className="px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition"
            >
              Download Resume
            </a>
          </div>

        </div>
      </motion.div>
    </section>
  );
}