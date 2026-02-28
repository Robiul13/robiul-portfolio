import Reveal from "../Reveal";

export default function Services() {
    return (
        <Reveal>
            <section
                id="services"
                className="py-28 px-6 bg-slate-900"
            >
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                        What I Deliver
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
                        I design and build enterprise-grade software solutions that improve
                        operational efficiency, scalability, and long-term maintainability.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

                    {/* Enterprise Systems */}
                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:-translate-y-2 hover:shadow-indigo-500/20 hover:shadow-lg transition duration-500">
                        <h3 className="text-xl font-bold mb-4 text-indigo-400">
                            Enterprise Business Platforms
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                            Architecting and developing large-scale HR, payroll, workflow
                            automation, and multi-organization systems built for high-volume,
                            real-world business environments.
                        </p>
                    </div>

                    {/* Backend Architecture */}
                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:-translate-y-2 hover:shadow-indigo-500/20 hover:shadow-lg transition duration-500">
                        <h3 className="text-xl font-bold mb-4 text-indigo-400">
                            Scalable Backend & API Architecture
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                            Designing secure, high-performance REST APIs using Spring Boot,
                            optimized database structures, and production-ready system
                            architecture for long-term scalability.
                        </p>
                    </div>

                    {/* Web & Mobile Apps */}
                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:-translate-y-2 hover:shadow-indigo-500/20 hover:shadow-lg transition duration-500">
                        <h3 className="text-xl font-bold mb-4 text-indigo-400">
                            Web & Cross-Platform Applications
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                            Building responsive web platforms and high-performance Flutter
                            mobile applications for Android & iOS, including legacy system
                            modernization and integration.
                        </p>
                    </div>

                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <a
                        href="#contact"
                        className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:scale-105 transition duration-300 shadow-lg"
                    >
                        Let’s Build Something Scalable
                    </a>
                </div>
            </section>
        </Reveal>
    );
}