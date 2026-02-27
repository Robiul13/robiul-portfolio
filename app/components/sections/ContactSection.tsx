import Reveal from "../Reveal";
import ContactForm from "../ContactForm";

export default function ContactSection() {
    return (
        <Reveal>
            <section id="contact" className="py-24 px-6 bg-slate-900 text-center">
                <h2 className="text-3xl font-bold mb-10">Contact Me</h2>
                <ContactForm />
            </section>
        </Reveal>
    );
}