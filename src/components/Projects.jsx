import { motion } from "framer-motion";

const projects = [
  {
    title: "Enterprise Employee Management System",
    tech: "Spring Boot, React, JWT, MySQL",
    description: (
      <>
        A secure full stack web application to manage employees with role-based access control.<br />
        Implemented authentication, authorization, REST APIs, pagination, and search functionality following industry standards.
      </>
    ),
    github: "https://github.com/yourusername/employee-management",
    live: "#"
  },
  {
    title: "AI Resume Parser & Job Matcher",
    tech: "Python, NLP, Machine Learning, Flask",
    description: (
      <>
        An intelligent system that extracts skills and experience from resumes using NLP, ranks candidates, and matches them with job descriptions.<br />
        Built end-to-end pipeline from PDF parsing to ML-based scoring.
      </>
    ),
    github: "https://github.com/yourusername/resume-parser",
    live: "#"
  },
  {
    title: "E-Commerce Web Application",
    tech: "MERN Stack (MongoDB, Express, React, Node.js)",
    description: (
      <>
        A complete e-commerce platform with user authentication, product catalog, cart, order management, and admin dashboard.<br />
        Implemented secure APIs and responsive UI.
      </>
    ),
    github: "https://github.com/yourusername/ecommerce-app",
    live: "#"
  },
  {
    title: "Authentication & Role-Based Access System",
    tech: "Spring Security, JWT, MySQL",
    description: (
      <>
        Designed a production-ready authentication and authorization system with JWT.<br />
        Refresh tokens and role-based access control for microservice-ready applications.
      </>
    ),
    github: "https://github.com/yourusername/auth-rbac",
    live: "#"
  },
  {
    title: "DSA Visualizer Web App",
    tech: "React, JavaScript, Algorithms",
    description: (
      <>
        An interactive web application to visualize sorting, recursion, trees, and graph algorithms.<br />
        Helping students understand core DSA concepts through animations.
      </>
    ),
    github: "https://github.com/yourusername/dsa-visualizer",
    live: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f1117]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-2xl p-[1px] bg-gradient-to-b from-white/10 to-white/5"
            >
              <div className="rounded-2xl p-6 bg-bg-white/5 backdrop-blur-md border border-white/10
                            shadow-lg shadow-black/30 hover:shadow-xl transition">

                <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-blue-400 mb-3">
                  {project.tech}
                </p>

                <div className="text-gray-300 flex-grow leading-relaxed text-sm sm:text-base">
                  {project.description}
                </div>

                <div className="flex gap-4 mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-sm text-gray-300 hover:text-white underline"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    className="text-sm text-gray-300 hover:text-white underline"
                  >
                    Live Demo
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
