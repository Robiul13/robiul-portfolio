"use client";

import { TypeAnimation } from "react-type-animation";
import Reveal from "../Reveal";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center text-center py-32 px-6 pt-44 overflow-hidden">

            {/* Background Glow */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute w-[700px] h-[700px] bg-indigo-600/20 rounded-full blur-[180px] top-[-200px] left-[-200px]" />
                <div className="absolute w-[700px] h-[700px] bg-purple-600/20 rounded-full blur-[180px] bottom-[-200px] right-[-200px]" />
            </div>

            <Reveal>

                {/* Main Identity */}
                <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-500">
            Robiul Islam
          </span>
                </h1>

                {/* Fixed Role */}
                <h2 className="text-xl md:text-2xl text-gray-300 font-medium mb-4">
                    Senior Java & Flutter Developer
                </h2>

                {/* Animated Skills */}
                <div className="text-indigo-400 font-semibold text-lg md:text-xl mb-6">
                    <TypeAnimation
                        sequence={[
                            "Spring Boot Backend Specialist",
                            2000,
                            "Enterprise Software Engineer",
                            2000,
                            "REST API & System Architecture Expert",
                            2000,
                            "Cross-Platform Mobile App Developer",
                            2000,
                        ]}
                        speed={50}
                        repeat={Infinity}
                    />
                </div>

                {/* Description */}
                <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    I design and develop scalable enterprise systems, secure backend
                    architectures, and high-performance mobile applications that power
                    real-world business operations.
                </p>

                {/* CTA */}
                <div className="mt-10 flex gap-5 justify-center flex-wrap">
                    <a
                        href="#projects"
                        className="px-8 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 font-semibold shadow-lg hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300"
                    >
                        View Projects
                    </a>

                    <a
                        href="#contact"
                        className="px-8 py-3 rounded-lg border border-indigo-500 text-indigo-400 font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300"
                    >
                        Hire Me
                    </a>
                </div>

                {/* Social Icons */}
                <div className="flex justify-center gap-8 mt-10 text-2xl text-gray-500">
                    <a
                        href="https://github.com/Robiul13"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-indigo-400 transition duration-300"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/robiul-islam-25b96a140/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-indigo-400 transition duration-300"
                    >
                        <FaLinkedin />
                    </a>
                </div>

            </Reveal>
        </section>
    );
}