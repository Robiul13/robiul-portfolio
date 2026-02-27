import Reveal from "../Reveal";

export default function Projects() {
    const projects = [
        {
            title: "HRMS – Enterprise Web Platform",
            desc: "A full-scale HR & Payroll management system developed for a group of companies. Manages employee records, payroll processing, leave, attendance, and reporting across multiple business units.",
            impact:
                "Supports 20,000+ employees across 10 sister concerns with live production deployment.",
            role:
                "Full Stack Developer – System Architecture, Spring Boot Backend, Oracle Database Design & Reporting.",
            tech: ["Spring Boot", "JPA", "Oracle", "JasperReports", "JWT"],
        },
        {
            title: "NAG One – Employee Self Service App",
            desc: "Cross-platform mobile application enabling employees to access payroll details, attendance, leave applications, and company updates.",
            impact:
                "Integrated with enterprise HRMS backend and deployed for Android & iOS users.",
            role:
                "Flutter Development, API Integration & Mobile Architecture.",
            tech: ["Flutter", "REST API", "Firebase"],
        },
        {
            title: "Attendance Machine Data Synchronizer",
            desc: "Batch processing system designed to synchronize attendance data from biometric machines into the central HRMS database.",
            impact:
                "Automated daily attendance processing and ensured accurate workforce tracking.",
            role:
                "Batch Processing Logic, Data Mapping & System Integration.",
            tech: ["Spring Boot", "Batch Processing", "Database Sync"],
        },
        {
            title: "Land Document Management System",
            desc: "Enterprise system for managing land information and storing digital deed documents for multiple companies within the group.",
            impact:
                "Digitized land records and enabled secure virtual deed file storage.",
            role:
                "Backend Development, Database Architecture & Secure Document Handling.",
            tech: ["Spring Boot", "Oracle", "Document Storage"],
        },
    ];

    return (
        <Reveal>
            <section id="projects" className="py-24 px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">
                    Enterprise Projects
                </h2>

                <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-slate-800/60 backdrop-blur-md p-8 rounded-2xl border border-slate-700 hover:border-indigo-500 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-900/30 text-left"
                        >
                            <h3 className="text-2xl font-semibold mb-4 text-indigo-400">
                                {project.title}
                            </h3>

                            <p className="text-gray-300 mb-4 leading-relaxed">
                                {project.desc}
                            </p>

                            <p className="text-gray-400 mb-2 text-sm">
                                <span className="text-indigo-400 font-medium">Impact:</span>{" "}
                                {project.impact}
                            </p>

                            <p className="text-gray-400 mb-6 text-sm">
                                <span className="text-indigo-400 font-medium">Role:</span>{" "}
                                {project.role}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 text-sm bg-indigo-500/20 text-indigo-400 rounded-full"
                                    >
                    {tech}
                  </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </Reveal>
    );
}