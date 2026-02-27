import Reveal from "../Reveal";

export default function About() {
    return (
        <Reveal>
            <section id="about" className="py-24 px-6 max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">About Me</h2>
                <p className="text-gray-400">
                    I specialize in Spring Boot backend development, REST APIs,
                    database optimization, Kafka systems, and Flutter mobile apps.
                </p>
            </section>
        </Reveal>
    );
}