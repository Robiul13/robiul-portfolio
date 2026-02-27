import Reveal from "../Reveal";

export default function Services() {
    return (
        <Reveal>
            <section
                id="services"
                className="py-24 px-6 bg-slate-900 text-center"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-12">
                    Core Capabilities
                </h2>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

                    {/* Enterprise Systems */}
                    <div className="bg-slate-800 p-8 rounded-xl hover:scale-105 transition duration-500 hover:shadow-xl hover:shadow-indigo-500/20">
                        <h3 className="text-xl font-semibold mb-4 text-indigo-400">
                            Enterprise Business Systems
                        </h3>
                        <p className="text-gray-400">
                            Design and development of large-scale business platforms
                            including HR, payroll, workflow automation, and
                            multi-company management systems.
                        </p>
                    </div>

                    {/* Backend Architecture */}
                    <div className="bg-slate-800 p-8 rounded-xl hover:scale-105 transition duration-500 hover:shadow-xl hover:shadow-indigo-500/20">
                        <h3 className="text-xl font-semibold mb-4 text-indigo-400">
                            Scalable Backend Architecture
                        </h3>
                        <p className="text-gray-400">
                            Building high-performance REST APIs using Spring Boot,
                            JPA, and Oracle with optimized database design,
                            security, and production-ready architecture.
                        </p>
                    </div>

                    {/* Web & Mobile Apps */}
                    <div className="bg-slate-800 p-8 rounded-xl hover:scale-105 transition duration-500 hover:shadow-xl hover:shadow-indigo-500/20">
                        <h3 className="text-xl font-semibold mb-4 text-indigo-400">
                            Web & Cross-Platform Applications
                        </h3>
                        <p className="text-gray-400">
                            Developing responsive web applications and
                            high-performance Flutter mobile apps for Android & iOS,
                            including legacy system migration.
                        </p>
                    </div>

                </div>
            </section>
        </Reveal>
    );
}