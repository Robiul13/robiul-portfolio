import Reveal from "../Reveal";

export default function About() {
    return (
        <Reveal>
            <section
                id="about"
                className="py-24 px-6 max-w-5xl mx-auto text-center"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                    About Me
                </h2>

                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                    I am a Full Stack Developer focused on building scalable,
                    maintainable, and performance-driven software solutions.
                    My expertise spans backend architecture, enterprise web systems,
                    and cross-platform mobile applications.
                </p>

                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                    I enjoy solving complex business problems and transforming
                    real-world operational challenges into structured digital systems.
                    My approach combines clean architecture, optimized database design,
                    and secure API development.
                </p>

                <p className="text-gray-400 text-lg leading-relaxed">
                    I focus on turning complex organizational processes into structured,
                    efficient, and maintainable digital ecosystems.
                    Over the years, I have worked across enterprise environments
                    and software companies, continuously improving system scalability,
                    performance, and long-term maintainability.
                </p>
            </section>
        </Reveal>
    );
}