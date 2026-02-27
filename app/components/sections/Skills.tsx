import Reveal from "../Reveal";

export default function Skills() {
    const skills = [
        {
            title: "Backend Engineering",
            desc: "Java 17, Spring Boot, Spring Data JPA, REST APIs, JWT Security, Kafka, Batch Processing",
        },
        {
            title: "Database & Reporting",
            desc: "Oracle Database, MySQL, Query Optimization, Schema Design, JasperReports",
        },
        {
            title: "Web & Mobile Development",
            desc: "Flutter (Android & iOS), React, Tailwind CSS, Responsive UI Design",
        },
        {
            title: "System Architecture",
            desc: "Enterprise System Design, Multi-Company Architecture, Scalable Application Design",
        },
        {
            title: "DevOps & Deployment",
            desc: "Git, CI/CD Basics, Play Store Deployment, Firebase Integration, Production Maintenance",
        },
        {
            title: "Legacy System Migration",
            desc: "Java Android to Flutter Migration, System Refactoring & Modernization",
        },
    ];

    return (
        <Reveal>
            <section id="skills" className="py-24 px-6 bg-slate-950 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">
                    Technical Expertise
                </h2>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {skills.map((item, index) => (
                        <div
                            key={index}
                            className="bg-slate-800 p-8 rounded-xl hover:scale-105 transition duration-500 hover:shadow-xl hover:shadow-indigo-500/20"
                        >
                            <h3 className="text-xl font-semibold mb-4 text-indigo-400">
                                {item.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </Reveal>
    );
}