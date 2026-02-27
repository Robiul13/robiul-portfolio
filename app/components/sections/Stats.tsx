import Reveal from "../Reveal";

export default function Stats() {
    return (
        <Reveal>
            <section className="py-20 bg-slate-950 text-center">
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

                    <div className="bg-slate-800 p-8 rounded-xl hover:scale-105 transition duration-500 hover:shadow-xl hover:shadow-indigo-500/20">
                        <h3 className="text-4xl font-bold text-indigo-400 mb-2">10+</h3>
                        <p className="text-gray-400">Projects Completed</p>
                    </div>

                    <div className="bg-slate-800 p-8 rounded-xl hover:scale-105 transition duration-500 hover:shadow-xl hover:shadow-indigo-500/20">
                        <h3 className="text-4xl font-bold text-indigo-400 mb-2">2+</h3>
                        <p className="text-gray-400">Years Experience</p>
                    </div>

                    <div className="bg-slate-800 p-8 rounded-xl hover:scale-105 transition duration-500 hover:shadow-xl hover:shadow-indigo-500/20">
                        <h3 className="text-4xl font-bold text-indigo-400 mb-2">100%</h3>
                        <p className="text-gray-400">Client Satisfaction</p>
                    </div>

                </div>
            </section>
        </Reveal>
    );
}