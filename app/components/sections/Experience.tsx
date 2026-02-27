import Reveal from "../Reveal";

export default function Experience() {
    return (
        <Reveal>
            <section
                id="experience"
                className="py-24 px-6 bg-slate-900 text-center"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-12">
                    Experience
                </h2>

                <div className="max-w-5xl mx-auto space-y-8 text-left">

                    {/* Current Company */}
                    <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
                        <h3 className="text-2xl font-semibold text-indigo-400 mb-2">
                            Full Stack Developer
                        </h3>
                        <p className="text-gray-400 mb-4">
                            New Asia Group — 2020 - Present
                        </p>

                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                Designed and developed a complete Enterprise HR & Payroll
                                System from scratch supporting 20,000+ employees across
                                multiple sister concerns.
                            </li>
                            <li>
                                Built scalable backend architecture using Spring Boot,
                                JPA, and Oracle Database.
                            </li>
                            <li>
                                Implemented policy-based salary calculation engine
                                for multi-company payroll structures.
                            </li>
                            <li>
                                Developed Employee Self-Service mobile application
                                using Flutter (Android & iOS).
                            </li>
                            <li>
                                Integrated reporting system using JasperReports
                                for payroll and management analytics.
                            </li>
                            <li>
                                Managed production deployments, database optimization, and system performance tuning for high-volume enterprise usage.
                            </li>
                        </ul>
                    </div>

                    {/* Previous Company */}
                    <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
                        <h3 className="text-2xl font-semibold text-indigo-400 mb-2">
                            Software Developer
                        </h3>
                        <p className="text-gray-400 mb-4">
                            Software Company — 2018 - 2019
                        </p>

                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                Developed Android applications using Java.
                            </li>
                            <li>
                                Built web-based business applications and REST and SOAP APIs.
                            </li>
                            <li>
                                Created desktop solutions for client-specific requirements.
                            </li>
                            <li>
                                Worked directly with clients to gather requirements
                                and deliver customized software solutions.
                            </li>
                        </ul>
                    </div>

                </div>
            </section>
        </Reveal>
    );
}