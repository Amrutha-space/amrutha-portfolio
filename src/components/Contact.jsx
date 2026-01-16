import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#0f1117]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl p-[2px] bg-[#0f1117]"
        >
          <div
            className="rounded-3xl bg-[#0f1117]/70 backdrop-blur-xl border border-white/10 p-10
                       shadow-[0_0_60px_rgba(99,102,241,0.35)] hover:shadow-[0_0_90px_rgba(168,85,247,0.5)]
                       transition-all duration-300"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              Get In Touch
            </h2>

            <p className="text-gray-300 text-center mb-8">
              I'm actively looking for SDE Intern / Entry-Level Software Engineer roles.
              Feel free to contact me for opportunities or collaborations.
            </p>

            <form className="grid gap-4 max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 rounded-lg bg-[#0f1117]/60 border border-white/20 text-white focus:outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="p-3 rounded-lg bg-[#0f1117]/60 border border-white/20 text-white focus:outline-none"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="p-3 rounded-lg bg-[#0f1117]/60 border border-white/20 text-white focus:outline-none"
              />

              <button
                type="submit"
                className="mt-2 py-3 rounded-xl bg-blue-600 hover:bg-[#0f1117]-700 text-white font-medium
                           shadow-lg shadow-blue-500/30 hover:shadow-purple-500/40 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
