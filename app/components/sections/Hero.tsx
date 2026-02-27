"use client";

import { TypeAnimation } from "react-type-animation";
import Reveal from "../Reveal";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center text-center py-32 px-6 pt-40 overflow-hidden">

            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute w-[600px] h-[600px] bg-indigo-600/30 rounded-full blur-[150px] animate-pulse top-[-150px] left-[-150px]" />
                <div className="absolute w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[150px] animate-pulse bottom-[-150px] right-[-150px]" />
            </div>

            <Reveal>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                    Hi, I'm <span className="text-indigo-500">Robiul Islam</span>
                </h1>

                <h2 className="text-2xl md:text-3xl text-indigo-400 font-semibold mb-6">
                    <TypeAnimation
                        sequence={[
                            "Full Stack Developer",
                            2000,
                            "Spring Boot Specialist",
                            2000,
                            "Flutter Engineer",
                            2000,
                        ]}
                        speed={50}
                        repeat={Infinity}
                    />
                </h2>

                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    I help businesses build scalable backend systems and high-performance
                    mobile applications.
                </p>

                <div className="mt-10 flex gap-4 justify-center">
                    <a href="#projects" className="bg-indigo-600 px-6 py-3 rounded-lg">
                        View Projects
                    </a>

                    <a href="#contact" className="border border-indigo-600 px-6 py-3 rounded-lg">
                        Hire Me
                    </a>
                </div>

                <div className="flex justify-center gap-6 mt-8 text-2xl text-gray-400">
                    <a href="https://github.com/Robiul13" target="_blank">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com" target="_blank">
                        <FaLinkedin />
                    </a>
                </div>
            </Reveal>
        </section>
    );
}