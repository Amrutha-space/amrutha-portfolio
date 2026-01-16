import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#0f1117]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl p-[2px] bg-[#0f1117]"
        >
          <div className="rounded-3xl bg-black/70 backdrop-blur-xl border border-white/10 p-10
                          shadow-[0_0_60px_rgba(99,102,241,0.35)">

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About Me
            </h2>

            <p className="text-gray-300 leading-relaxed mb-4">
              I am a final year Computer Science Engineering student at
              <span className="text-white font-medium"> Malla Reddy Institute of Technology & Sciences</span>
              (Class of 2026) with a strong foundation in Data Structures, Algorithms,
              and core Software Engineering principles.
            </p>

            <p className="text-gray-300 leading-relaxed mb-4">
              I specialize in building scalable backend systems using
              <span className="text-white font-medium"> Java & Spring Boot</span>, developing modern
              user interfaces with <span className="text-white font-medium">React & Tailwind CSS</span>,
              and creating intelligent applications using <span className="text-white font-medium">AI agents & tools</span>.
            </p>

            <p className="text-gray-300 leading-relaxed">
              My goal is to start as a Software Development Engineer where I can work on
              real-world products, solve complex problems, and grow as a Full Stack and
              AI-focused engineer in a high-impact team.
            </p>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
