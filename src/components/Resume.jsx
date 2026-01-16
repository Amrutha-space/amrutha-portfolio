import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section id="resume" className="py-24 px-6 bg-[#0f1117]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl p-[2px] bg-[#0f1117]"
        >
          <div
            className="rounded-3xl bg-[#0f1117]/70 backdrop-blur-xl border border-white/10 p-10 text-center
                       shadow-[0_0_60px_rgba(99,102,241,0.35)] hover:shadow-[0_0_90px_rgba(168,85,247,0.5)]
                       transition-all duration-300"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Resume
            </h2>

            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Download my resume to learn more about my education, technical skills,
              projects, and experience as a Software Development Engineer.
            </p>

            <a
              href="/Amrutha_A_Resume.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl
                         bg-[#0f1117] hover:bg-[#0f1117] text-white font-medium
                         shadow-lg shadow-blue-500/30 hover:shadow-purple-500/40
                         transition-all"
            >
              📄 Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
