import SectionHeader from "../components/ui/SectonHeader";
const experiences = [
  {
    role: "Full Stack / AI Agent Developer",
    source: "Google/YouTube",
    period: "2025 - Present",
    description:
      "Designing and building production-ready web applications with a focus on scalability, performance, and clean architecture. Implemented authentication systems, dashboards, and API integrations.",
    technologies: [
      "MERN Stack",
      "Nextjs",
      "Python",
      "PostgreSQL",
      "JAVA",
      "Supabase",
      "n8n",
      "PyTorch",
    ],
  },
  {
    role: "Backend Developer",
    source: "Online/Self-taught",
    period: "2024-2025",
    description:
      "Built backend services including REST APIs, authentication flows and database schemas. Worked on real-time features and data handling.",
    technologies: ["Nodejs", "MongoDB", "JavaScript", "Python", "SQL"],
  },
  {
    role: "Frontend Developer",
    source: "Online/YouTube",
    period: "2023-2024",
    description:
      "Contributed to open-source UI components and improved frontend performance and accessibility. Focused on reusable components and modern design systems.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Reactjs",
      "Vuejs",
      "WordPress",
      "Nextjs",
    ],
  },
  {
    role: "Junior Web/Game Developer",
    source: "Self-taught",
    period: "past - 2023",
    description:
      "Learned core web development concepts and built multiple beginner-to-intermediate projects to strengthen problem-solving and coding fundamentals.",
    technologies: ["Scratch 3.0", "HTML", "CSS", "Github"],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-110 h-full rounded-full blur-3xl bg-[#20b2a6]/10" />
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          title="Experiences in"
          highlight="my journey"
          badge="Experience"
          description="A timeline of my growth as a developer, from learning the fundamentals to building fullstack applications."
        />

        <div className="relative mt-14">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-[#20b2a6]/70 via-[#20b2a6]/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />
          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div
                data-aos="flip-right"
                data-aos-anchor-placement="top-center"
                key={i}
                className="relative grid md:grid-cols-2 gap-8"
              >
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 -translate-x-1/2 rounded-full ring-2 ring-[#0f1418] bg-[#20b2a6] z-10">
                  <span className="absolute inset-0 rounded-full bg-[#20b2a6] animate-ping opacity-75" />
                </div>
                <div
                  className={`pl-8 md:pl-0 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}
                >
                  <div className="p-6 rounded-2xl border border-[#20b2a6]/30 hover:border-[#20b2a6]/50 transition-all duration-500">
                    <span className="text-[#20b2a6] font-medium  text-sm">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-gray-300">{exp.source}</p>
                    <p className="text-sm text-gray-400 mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${i % 2 === 0 ? "md:justify-end" : ""}`}
                    >
                      {exp.technologies.map((tech, tInd) => (
                        <span
                          key={tInd}
                          className="px-3 py-1 bg-[#1a2329] text-xs rounded-full text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
