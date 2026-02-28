import Reveal from "../Reveal";
import ContactForm from "../ContactForm";

export default function ContactSection() {
    return (
        <Reveal>
            <section
                id="contact"
                className="py-28 px-6 bg-slate-900 relative overflow-hidden"
            >
                {/* Background Glow */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[150px] top-[-200px] left-[-200px]" />
                    <div className="absolute w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[150px] bottom-[-200px] right-[-200px]" />
                </div>

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                        Let’s Work Together
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
                        Have a project in mind? Need a scalable backend or enterprise-grade system?
                        Let’s discuss how we can build something powerful.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">

                    {/* Left Info */}
                    <div className="text-left space-y-6">
                        <h3 className="text-2xl font-bold text-indigo-400">
                            Contact Information
                        </h3>

                        <p className="text-gray-400">
                            I specialize in enterprise system architecture, backend engineering,
                            and cross-platform application development.
                        </p>

                        <div className="space-y-3 text-gray-400">
                            <p>📍 Bangladesh</p>
                            <p>📧 robiulcse13@gmail.com</p>
                            <p>💼 Available for Freelance & Enterprise Projects</p>
                        </div>
                    </div>

                    {/* Right Form */}
                    <ContactForm />

                </div>
            </section>
        </Reveal>
    );
}