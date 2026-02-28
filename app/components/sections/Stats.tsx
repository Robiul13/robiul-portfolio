import Reveal from "../Reveal";

export default function Stats() {
    return (
        <Reveal>
            <section className="py-28 bg-slate-950">

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                        Impact & Scale
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">

                    {/* Years Experience */}
                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl text-center border border-slate-700 hover:-translate-y-2 hover:shadow-indigo-500/20 hover:shadow-lg transition duration-500">
                        <h3 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-3">
                            8+
                        </h3>
                        <p className="text-gray-400 text-sm uppercase tracking-wide">
                            Years Experience
                        </p>
                    </div>

                    {/* Workforce Scale */}
                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl text-center border border-slate-700 hover:-translate-y-2 hover:shadow-indigo-500/20 hover:shadow-lg transition duration-500">
                        <h3 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-3">
                            20K+
                        </h3>
                        <p className="text-gray-400 text-sm uppercase tracking-wide">
                            Employees Supported
                        </p>
                    </div>

                    {/* Multi Company */}
                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl text-center border border-slate-700 hover:-translate-y-2 hover:shadow-indigo-500/20 hover:shadow-lg transition duration-500">
                        <h3 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-3">
                            10+
                        </h3>
                        <p className="text-gray-400 text-sm uppercase tracking-wide">
                            Organizations Integrated
                        </p>
                    </div>

                    {/* Production Systems */}
                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl text-center border border-slate-700 hover:-translate-y-2 hover:shadow-indigo-500/20 hover:shadow-lg transition duration-500">
                        <h3 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-3">
                            5+
                        </h3>
                        <p className="text-gray-400 text-sm uppercase tracking-wide">
                            Years Live in Production
                        </p>
                    </div>

                </div>
            </section>
        </Reveal>
    );
}