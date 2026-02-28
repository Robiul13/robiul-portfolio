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
            title: "System Modernization",
            desc: "Legacy System Migration, Java Android to Flutter Migration, Refactoring & Platform Modernization",
        },
    ];

    return (
        <Reveal>
            <section id="skills" className="py-28 px-6 bg-slate-950">

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                        Technical Expertise
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
                        A strong foundation in backend engineering, enterprise architecture,
                        and scalable cross-platform application development.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

                    {skills.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:-translate-y-2 hover:shadow-indigo-500/20 hover:shadow-lg transition duration-500"
                        >
                            <h3 className="text-xl font-bold mb-4 text-indigo-400">
                                {item.title}
                            </h3>

                            <p className="text-gray-400 leading-relaxed text-sm">
                                {item.desc}
                            </p>
                        </div>
                    ))}

                </div>
            </section>
        </Reveal>
    );
}