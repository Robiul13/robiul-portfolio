"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const sections = ["about", "skills", "projects", "contact"];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("about");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        const sectionElements = document.querySelectorAll("section[id]");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sectionElements.forEach((section) => observer.observe(section));

        return () => {
            window.removeEventListener("scroll", handleScroll);
            observer.disconnect();
        };
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
                scrolled
                    ? "bg-slate-950/80 backdrop-blur-xl shadow-lg shadow-indigo-900/20"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="text-xl font-extrabold tracking-tight"
                >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
            Robiul Islam
          </span>
                </button>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-gray-300">

                    {sections.map((item) => (
                        <a
                            key={item}
                            href={`#${item}`}
                            className={`relative capitalize transition duration-300 ${
                                active === item
                                    ? "text-indigo-400"
                                    : "hover:text-indigo-400"
                            }`}
                        >
                            {item}
                            <span
                                className={`absolute left-0 -bottom-1 h-[2px] bg-indigo-500 transition-all duration-300 ${
                                    active === item ? "w-full" : "w-0"
                                }`}
                            ></span>
                        </a>
                    ))}

                    {/* CTA Button */}
                    <a
                        href="#contact"
                        className="ml-4 px-5 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:scale-105 transition duration-300 shadow-md"
                    >
                        Hire Me
                    </a>

                </div>

                {/* Mobile Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setOpen(!open)}
                        className="text-white transition"
                    >
                        {open ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden transition-all duration-500 overflow-hidden ${
                    open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <div className="bg-slate-900 px-6 pb-6 space-y-4 text-gray-300 border-t border-slate-800">
                    {sections.map((item) => (
                        <a
                            key={item}
                            href={`#${item}`}
                            onClick={() => setOpen(false)}
                            className={`block capitalize transition ${
                                active === item
                                    ? "text-indigo-400"
                                    : "hover:text-indigo-400"
                            }`}
                        >
                            {item}
                        </a>
                    ))}

                    <a
                        href="#contact"
                        onClick={() => setOpen(false)}
                        className="block mt-4 px-5 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center"
                    >
                        Hire Me
                    </a>
                </div>
            </div>
        </nav>
    );
}