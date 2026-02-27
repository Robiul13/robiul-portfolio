import Reveal from "../Reveal";

export default function Projects() {
    const projects = [
        {
            title: "NAG One HRMS",
            desc: "Enterprise HR Management system with Spring Boot backend and Flutter mobile app.",
            tech: ["Spring Boot", "Flutter", "Oracle"],
        },
        {
            title: "Expense Tracker",
            desc: "Modern Flutter app with SQLite & Supabase integration.",
            tech: ["Flutter", "SQLite", "Supabase"],
        },
    ];

    return (
        <Reveal>
            <section id="projects" className="py-24 px-6 text-center">
                <h2 className="text-3xl font-bold mb-12">Projects</h2>

                <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-slate-800/60 backdrop-blur-md p-8 rounded-2xl border border-slate-700 hover:border-indigo-500 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-900/30"
                        >
                            <h3 className="text-2xl font-semibold mb-4">
                                {project.title}
                            </h3>

                            <p className="text-gray-400 mb-6">
                                {project.desc}
                            </p>

                            <div className="flex flex-wrap justify-center gap-2 mb-6">
                                {project.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 text-sm bg-indigo-500/20 text-indigo-400 rounded-full"
                                    >
                    {tech}
                  </span>
                                ))}
                            </div>

                            <div className="flex justify-center gap-4">
                                <a className="px-5 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-500 transition">
                                    Live Demo
                                </a>
                                <a className="px-5 py-2 border border-indigo-500 rounded-lg hover:bg-indigo-600 transition">
                                    GitHub
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </Reveal>
    );
}