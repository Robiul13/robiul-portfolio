import Reveal from "../Reveal";

export default function About() {
    return (
        <Reveal>
            <section
                id="about"
                className="py-28 px-6 max-w-6xl mx-auto"
            >
                <div className="text-center mb-14">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                        About Me
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
                </div>

                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8">
                        I am a <span className="text-indigo-400 font-semibold">Senior Java & Flutter Developer</span>
                        specializing in building scalable enterprise systems, secure backend
                        architectures, and high-performance cross-platform applications.
                    </p>

                    <p className="text-gray-400 text-lg leading-relaxed">
                        My work focuses on transforming complex business operations into
                        structured digital ecosystems using clean architecture, optimized
                        database design, and secure REST API development.
                    </p>
                </div>

                {/* Core Strengths */}
                <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
                    <div className="bg-slate-900/60 backdrop-blur-md p-6 rounded-xl border border-slate-800 hover:-translate-y-2 transition-all duration-300">
                        <h3 className="text-indigo-400 font-semibold text-lg mb-3">
                            Enterprise Architecture
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Designing scalable backend systems using Spring Boot,
                            secure APIs, and optimized database structures.
                        </p>
                    </div>

                    <div className="bg-slate-900/60 backdrop-blur-md p-6 rounded-xl border border-slate-800 hover:-translate-y-2 transition-all duration-300">
                        <h3 className="text-indigo-400 font-semibold text-lg mb-3">
                            System Performance
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Performance tuning, database optimization, and
                            long-term maintainability improvements.
                        </p>
                    </div>

                    <div className="bg-slate-900/60 backdrop-blur-md p-6 rounded-xl border border-slate-800 hover:-translate-y-2 transition-all duration-300">
                        <h3 className="text-indigo-400 font-semibold text-lg mb-3">
                            Business Process Engineering
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Converting complex operational workflows into
                            structured and efficient digital systems.
                        </p>
                    </div>
                </div>
            </section>
        </Reveal>
    );
}