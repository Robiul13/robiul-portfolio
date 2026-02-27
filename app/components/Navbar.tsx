"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const sections = ["about", "skills", "projects", "contact"];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("about");

    useEffect(() => {
        // Shadow on scroll
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        // Section observer
        const sectionElements = document.querySelectorAll("section[id]");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.6,
            }
        );

        sectionElements.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            observer.disconnect();
        };
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
                scrolled
                    ? "bg-slate-950/80 backdrop-blur-lg shadow-lg shadow-indigo-900/20"
                    : "bg-transparent"
            }`}
        >
            <div className="w-full px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="text-xl font-bold text-indigo-500 hover:opacity-80 transition"
                >
                    Robiul
                </button>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-10 text-gray-300">
                    {sections.map((item) => (
                        <a
                            key={item}
                            href={`#${item}`}
                            className={`relative group capitalize transition-all duration-300 ${
                                active === item ? "text-indigo-400" : ""
                            }`}
                        >
              <span className="group-hover:text-indigo-400 transition">
                {item}
              </span>

                            {/* Underline */}
                            <span
                                className={`absolute left-0 -bottom-1 h-[2px] bg-indigo-500 transition-all duration-300 ${
                                    active === item
                                        ? "w-full"
                                        : "w-0 group-hover:w-full"
                                }`}
                            ></span>
                        </a>
                    ))}
                </div>

                {/* Mobile Button */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setOpen(!open)}
                        className="text-white focus:outline-none transition"
                    >
                        {open ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-500 ${
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
                </div>
            </div>
        </nav>
    );
}