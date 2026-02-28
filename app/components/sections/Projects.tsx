import Reveal from "../Reveal";

export default function Projects() {
    const projects = [
        {
            title: "HRMS – Enterprise Workforce Platform",
            desc: "A full-scale HR & Payroll management system built for a group of companies managing employee lifecycle, payroll processing, attendance, leave, and reporting across multiple business units.",
            impact:
                "Supports 20,000+ employees across 10 sister concerns with active live production deployment.",
            role:
                "System Architecture, Spring Boot Backend Development, Oracle Database Design & Reporting Integration.",
            tech: ["Spring Boot", "JPA", "Oracle", "JasperReports", "JWT"],
        },
        {
            title: "NAG One – Employee Self Service App",
            desc: "Cross-platform mobile application enabling employees to access payroll details, attendance records, leave applications, and company updates in real-time.",
            impact:
                "Integrated with enterprise HRMS backend and deployed for Android & iOS users.",
            role:
                "Flutter Development, API Integration & Mobile System Architecture.",
            tech: ["Flutter", "REST API", "Firebase"],
        },
        {
            title: "Attendance Machine Data Synchronizer",
            desc: "Batch processing engine that synchronizes biometric attendance machine data into a centralized HRMS database.",
            impact:
                "Automated daily attendance processing ensuring workforce accuracy and operational efficiency.",
            role:
                "Batch Processing Logic, Data Mapping & System Integration.",
            tech: ["Spring Boot", "Batch Processing", "Database Sync"],
        },
        {
            title: "Land Document Management System",
            desc: "Enterprise solution for managing digital land records and secure deed documentation across multiple organizations.",
            impact:
                "Digitized sensitive land records with secure document storage and structured access control.",
            role:
                "Backend Architecture, Secure File Handling & Database Design.",
            tech: ["Spring Boot", "Oracle", "Document Storage"],
        },
    ];

    return (
        <Reveal>
            <section id="projects" className="py-28 px-6 bg-slate-950">

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                        Enterprise Projects
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
                        Real-world enterprise systems built for scale, performance, and long-term maintainability.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">

                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-slate-800 to-slate-900 p-10 rounded-2xl border border-slate-700 hover:border-indigo-500 hover:-translate-y-2 hover:shadow-indigo-500/20 hover:shadow-2xl transition-all duration-500 text-left"
                        >
                            <h3 className="text-2xl font-bold mb-5 text-indigo-400">
                                {project.title}
                            </h3>

                            <p className="text-gray-300 mb-6 leading-relaxed">
                                {project.desc}
                            </p>

                            <div className="mb-4">
                <span className="text-indigo-400 font-semibold text-sm uppercase tracking-wide">
                  Impact
                </span>
                                <p className="text-gray-400 mt-1 text-sm">
                                    {project.impact}
                                </p>
                            </div>

                            <div className="mb-6">
                <span className="text-indigo-400 font-semibold text-sm uppercase tracking-wide">
                  My Role
                </span>
                                <p className="text-gray-400 mt-1 text-sm">
                                    {project.role}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 text-xs bg-indigo-500/20 text-indigo-400 rounded-full border border-indigo-500/20"
                                    >
                    {tech}
                  </span>
                                ))}
                            </div>
                        </div>
                    ))}

                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-20">
                    <a
                        href="#contact"
                        className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:scale-105 transition duration-300 shadow-lg"
                    >
                        Let’s Build Your Enterprise System
                    </a>
                </div>

            </section>
        </Reveal>
    );
}