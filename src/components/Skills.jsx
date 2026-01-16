import { motion } from "framer-motion";

const skills = {
  Programming: ["Java", "Python", "JavaScript", "C++", "SQL"],
  Backend: ["Spring Boot", "Spring Security", "Django", "Node.js", "REST APIs", "JWT", "Microservices (Basics)"],
  Frontend: ["React", "Tailwind CSS", "HTML", "Bootstrap"],
  Databases: ["MySQL", "MongoDB"],
Platforms: ["Web", "Windows", "AWS", "Oracle"],
  Tools: ["Git", "GitHub", "VSCode","Docker", "Postman", "Vercel"],
  Core : ["DSA", "OOPS", "DBMS", "OS", "Computer Networks"]
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#0f1117]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-4xl font-bold text-center text-white mb-12">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([title, items], i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-2xl p-[1px] bg-[#0f1117]"
            >
              <div className="rounded-2xl p-6 bg-[#0f1117]/60 backdrop-blur-xl border border-white/10
                              shadow-[0_0_40px_rgba(99,102,241,0.35)] hover:shadow-[0_0_70px_rgba(168,85,247,0.5)]
                              transition">

                <h3 className="text-xl font-semibold text-blue-400 mb-4">{title}</h3>

                <div className="flex flex-wrap gap-2">
                  {items.map(skill => (
                    <span
                      key={skill}
                      className="text-sm px-3 py-1 rounded-full bg-white/10 text-gray-200 border border-white/20 backdrop-blur-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
