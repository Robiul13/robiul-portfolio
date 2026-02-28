import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiFiverr, SiUpwork } from "react-icons/si";

export default function Footer() {
    return (
        <footer className="relative bg-slate-950 border-t border-slate-800 pt-20 pb-12 overflow-hidden">

            {/* Subtle Background Glow */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px] top-[-200px] left-[-200px]" />
            </div>

            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-16">

                {/* Branding */}
                <div>
                    <h3 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-5">
                        Robiul Islam
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                        Senior Java & Flutter Developer focused on building scalable
                        enterprise systems, secure backend architectures, and modern
                        cross-platform applications.
                    </p>

                    <p className="text-indigo-400 mt-5 text-sm font-medium">
                        Available for Remote & Enterprise Projects
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-white font-semibold mb-5 tracking-wide">
                        Quick Links
                    </h4>

                    <div className="space-y-4 text-gray-400 text-sm">
                        {["about", "projects", "contact"].map((link) => (
                            <a
                                key={link}
                                href={`#${link}`}
                                className="block relative w-fit hover:text-indigo-400 transition"
                            >
                                <span className="capitalize">{link}</span>
                                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-indigo-500 transition-all duration-300 hover:w-full"></span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Connect */}
                <div>
                    <h4 className="text-white font-semibold mb-5 tracking-wide">
                        Connect
                    </h4>

                    <div className="flex gap-6 text-gray-400 text-2xl">

                        <a
                            href="https://github.com/Robiul13"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-indigo-400 hover:scale-110 transition duration-300"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/robiul-islam-25b96a140/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-indigo-400 hover:scale-110 transition duration-300"
                        >
                            <FaLinkedin />
                        </a>

                        <a
                            href="https://www.fiverr.com/robiulislam216"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-green-500 hover:scale-110 transition duration-300"
                        >
                            <SiFiverr />
                        </a>

                        <a
                            href="https://www.upwork.com/freelancers/~01f9404b4cc2b4f7dc"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-green-400 hover:scale-110 transition duration-300"
                        >
                            <SiUpwork />
                        </a>

                    </div>
                </div>

            </div>

            {/* Bottom Section */}
            <div className="mt-20 border-t border-slate-800 pt-6 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Robiul Islam. Crafted with precision.
            </div>
        </footer>
    );
}