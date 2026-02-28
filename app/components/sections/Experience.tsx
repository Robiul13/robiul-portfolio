import Reveal from "../Reveal";

export default function Experience() {
    return (
        <Reveal>
            <section
                id="experience"
                className="py-28 px-6 bg-slate-900"
            >
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                        Professional Experience
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
                </div>

                <div className="max-w-6xl mx-auto space-y-12">

                    {/* Current Role */}
                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-10 rounded-2xl border border-slate-700 hover:shadow-indigo-500/10 hover:shadow-lg transition duration-500">

                        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
                            <h3 className="text-2xl font-bold text-indigo-400">
                                Full Stack Developer
                            </h3>
                            <span className="text-gray-400 text-sm mt-2 md:mt-0">
                New Asia Group · 2020 — Present
              </span>
                        </div>

                        <p className="text-gray-400 mb-6">
                            Leading the architecture and development of enterprise-grade HR,
                            payroll, and business systems supporting
                            <span className="text-indigo-400 font-semibold"> 20,000+ employees </span>
                            across multiple organizations.
                        </p>

                        <ul className="space-y-3 text-gray-300">
                            <li>
                                • Architected and developed a complete Enterprise HR & Payroll platform from scratch.
                            </li>
                            <li>
                                • Designed scalable backend systems using Spring Boot, JPA, and Oracle Database.
                            </li>
                            <li>
                                • Built a policy-driven salary calculation engine for multi-company payroll structures.
                            </li>
                            <li>
                                • Developed cross-platform Employee Self-Service mobile app using Flutter.
                            </li>
                            <li>
                                • Integrated JasperReports for advanced payroll analytics & management reporting.
                            </li>
                            <li>
                                • Managed production deployments, database optimization, and high-volume system performance tuning.
                            </li>
                        </ul>

                    </div>

                    {/* Previous Role */}
                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-10 rounded-2xl border border-slate-700 hover:shadow-indigo-500/10 hover:shadow-lg transition duration-500">

                        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
                            <h3 className="text-2xl font-bold text-indigo-400">
                                Software Developer
                            </h3>
                            <span className="text-gray-400 text-sm mt-2 md:mt-0">
                Software Company · 2018 — 2019
              </span>
                        </div>

                        <p className="text-gray-400 mb-6">
                            Delivered custom business applications, Android solutions, and enterprise APIs for client-specific requirements.
                        </p>

                        <ul className="space-y-3 text-gray-300">
                            <li>• Developed Android applications using Java.</li>
                            <li>• Built web-based systems with REST & SOAP APIs.</li>
                            <li>• Designed desktop applications for tailored business solutions.</li>
                            <li>• Collaborated directly with clients to gather requirements and deliver scalable systems.</li>
                        </ul>

                    </div>

                </div>
            </section>
        </Reveal>
    );
}