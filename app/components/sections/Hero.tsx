"use client";

import { TypeAnimation } from "react-type-animation";
import Reveal from "../Reveal";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center text-center py-32 px-6 pt-40 overflow-hidden">

            {/* Background Glow */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute w-[600px] h-[600px] bg-indigo-600/30 rounded-full blur-[150px] animate-pulse top-[-150px] left-[-150px]" />
                <div className="absolute w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[150px] animate-pulse bottom-[-150px] right-[-150px]" />
            </div>

            <Reveal>
                {/* Name */}
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                    Hi, I'm{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
            Robiul Islam
          </span>
                </h1>

                {/* Role Animation */}
                <h2 className="text-2xl md:text-3xl text-indigo-400 font-semibold mb-6">
                    <TypeAnimation
                        sequence={[
                            "Full Stack Developer",
                            2000,
                            "Enterprise Software Engineer",
                            2000,
                            "Spring Boot Backend Specialist",
                            2000,
                            "Flutter Cross-Platform Developer",
                            2000,
                        ]}
                        speed={50}
                        repeat={Infinity}
                    />
                </h2>

                {/* Description */}
                <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                    I build scalable enterprise systems, secure backend architectures,
                    and cross-platform mobile applications that power real-world business operations.
                </p>

                {/* CTA */}
                <div className="mt-10 flex gap-4 justify-center">
                    <a
                        href="#projects"
                        className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-3 rounded-lg font-medium hover:scale-105 transition-transform"
                    >
                        View Projects
                    </a>

                    <a
                        href="#contact"
                        className="border border-indigo-600 px-8 py-3 rounded-lg font-medium hover:bg-indigo-600 hover:text-white transition"
                    >
                        Hire Me
                    </a>
                </div>

                {/* Social */}
                <div className="flex justify-center gap-6 mt-8 text-2xl text-gray-400">
                    <a
                        href="https://github.com/Robiul13"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-indigo-400 transition"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/robiul-islam-25b96a140/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-indigo-400 transition"
                    >
                        <FaLinkedin />
                    </a>
                </div>
            </Reveal>
        </section>
    );
}