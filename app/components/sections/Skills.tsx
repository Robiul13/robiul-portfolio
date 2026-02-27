import Reveal from "../Reveal";

export default function Skills() {
    const skills = [
        {
            title: "Backend",
            desc: "Java 17, Spring Boot, JPA, Kafka, Oracle, MySQL",
        },
        {
            title: "Frontend",
            desc: "Flutter, React, Tailwind CSS",
        },
        {
            title: "DevOps",
            desc: "Git, Firebase, Play Store Deployment",
        },
    ];

    return (
        <Reveal>
            <section id="skills" className="py-24 px-6 bg-slate-950 text-center">
                <h2 className="text-3xl font-bold mb-12">Skills</h2>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {skills.map((item, index) => (
                        <div
                            key={index}
                            className="bg-slate-800 p-6 rounded-xl hover:scale-105 transition duration-500 hover:shadow-xl hover:shadow-indigo-500/20"
                        >
                            <h3 className="text-xl font-semibold mb-4 text-indigo-400">
                                {item.title}
                            </h3>
                            <p className="text-gray-400">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </Reveal>
    );
}