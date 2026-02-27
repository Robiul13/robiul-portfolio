import Reveal from "../Reveal";

export default function Services() {
    return (
        <Reveal>
            <section id="services" className="py-24 px-6 bg-slate-900 text-center">
                <h2 className="text-3xl font-bold mb-12">Services</h2>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

                    <div className="bg-slate-800 p-8 rounded-xl hover:scale-105 transition duration-500 hover:shadow-xl hover:shadow-indigo-500/20">
                        <h3 className="text-xl font-semibold mb-4 text-indigo-400">
                            Backend API Development
                        </h3>
                        <p className="text-gray-400">
                            Building scalable REST APIs using Spring Boot and modern architectures.
                        </p>
                    </div>

                    <div className="bg-slate-800 p-8 rounded-xl hover:scale-105 transition duration-500 hover:shadow-xl hover:shadow-indigo-500/20">
                        <h3 className="text-xl font-semibold mb-4 text-indigo-400">
                            Flutter Mobile Apps
                        </h3>
                        <p className="text-gray-400">
                            Cross-platform mobile applications with high performance and clean UI.
                        </p>
                    </div>

                    <div className="bg-slate-800 p-8 rounded-xl hover:scale-105 transition duration-500 hover:shadow-xl hover:shadow-indigo-500/20">
                        <h3 className="text-xl font-semibold mb-4 text-indigo-400">
                            System Architecture Design
                        </h3>
                        <p className="text-gray-400">
                            Designing scalable, maintainable, and enterprise-grade system solutions.
                        </p>
                    </div>

                </div>
            </section>
        </Reveal>
    );
}