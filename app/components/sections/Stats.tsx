import Reveal from "../Reveal";

export default function Stats() {
    return (
        <Reveal>
            <section className="py-20 bg-slate-950 text-center">
                <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">

                    {/* Years Experience */}
                    <div className="bg-slate-800 p-8 rounded-xl hover:scale-105 transition duration-500 hover:shadow-xl hover:shadow-indigo-500/20">
                        <h3 className="text-4xl font-bold text-indigo-400 mb-2">8+</h3>
                        <p className="text-gray-400">Years Professional Experience</p>
                    </div>

                    {/* Workforce Scale */}
                    <div className="bg-slate-800 p-8 rounded-xl hover:scale-105 transition duration-500 hover:shadow-xl hover:shadow-indigo-500/20">
                        <h3 className="text-4xl font-bold text-indigo-400 mb-2">20K+</h3>
                        <p className="text-gray-400">Employees Managed in Enterprise System</p>
                    </div>

                    {/* Multi Company */}
                    <div className="bg-slate-800 p-8 rounded-xl hover:scale-105 transition duration-500 hover:shadow-xl hover:shadow-indigo-500/20">
                        <h3 className="text-4xl font-bold text-indigo-400 mb-2">10+</h3>
                        <p className="text-gray-400">Sister Concerns Integrated</p>
                    </div>

                    {/* Production Systems */}
                    <div className="bg-slate-800 p-8 rounded-xl hover:scale-105 transition duration-500 hover:shadow-xl hover:shadow-indigo-500/20">
                        <h3 className="text-4xl font-bold text-indigo-400 mb-2">Live</h3>
                        <p className="text-gray-400">Production Systems Running Since 2019</p>
                    </div>

                </div>
            </section>
        </Reveal>
    );
}