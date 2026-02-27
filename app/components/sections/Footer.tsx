export default function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 py-10">
            <div className="max-w-6xl mx-auto px-6 text-center space-y-4">

                <h3 className="text-lg font-semibold text-white">
                    Robiul Islam
                </h3>

                <p className="text-gray-400">
                    Full Stack Developer | Spring Boot | Flutter
                </p>

                <div className="flex justify-center gap-6 text-gray-400 text-lg">
                    <a
                        href="https://github.com/Robiul13"
                        target="_blank"
                        className="hover:text-indigo-400 transition"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/robiul-islam-25b96a140/"
                        target="_blank"
                        className="hover:text-indigo-400 transition"
                    >
                        LinkedIn
                    </a>
                </div>

                <p className="text-sm text-gray-500 pt-4 border-t border-slate-800">
                    © {new Date().getFullYear()} All rights reserved.
                </p>

            </div>
        </footer>
    );
}