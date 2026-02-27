export default function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 py-14">
            <div className="max-w-6xl mx-auto px-6 text-center space-y-6">

                {/* Name */}
                <h3 className="text-2xl font-bold text-white">
                    Robiul Islam
                </h3>

                {/* Positioning */}
                <p className="text-gray-400">
                    Enterprise Software Engineer | Spring Boot | Flutter
                </p>

                {/* Availability Signal */}
                <p className="text-indigo-400 text-sm">
                    Open to Remote Opportunities & Enterprise Projects
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-8 text-gray-400 text-lg">
                    <a
                        href="https://github.com/Robiul13"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-indigo-400 transition duration-300"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/robiul-islam-25b96a140/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-indigo-400 transition duration-300"
                    >
                        LinkedIn
                    </a>
                </div>

                {/* Divider */}
                <div className="border-t border-slate-800 pt-6 text-sm text-gray-500">
                    © {new Date().getFullYear()} Robiul Islam. All rights reserved.
                </div>

            </div>
        </footer>
    );
}