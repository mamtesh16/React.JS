import React from "react";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-100 px-6 py-16">
            <div className="mx-auto max-w-6xl">

                <div className="mb-10">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange-500">
                        Contact
                    </p>

                    <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
                        Let's <span className="text-orange-500">Connect</span>
                    </h1>

                    <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                        I'm always open to discussing new projects, creative
                        ideas, and opportunities to learn and collaborate.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">

                    <div className="flex items-center gap-5 rounded-xl bg-[#0F172A] p-5 shadow-s hover:-translate-y-1 transition-all">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl text-orange-500">
                            ✉
                        </div>

                        <div className="">
                            <h2 className="text-lg font-semibold text-white">
                                Email
                            </h2>

                            <p className="mt-1 text-white">
                                mamtesh627@gmail.com
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-5 rounded-xl bg-[#0F172A] p-5 shadow-sm hover:-translate-y-1 transition-all">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl text-orange-500">
                            📍
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-white">
                                Location
                            </h2>

                            <p className="mt-1 text-white">
                                India
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-5 rounded-xl bg-[#0F172A] p-5 shadow-sm hover:-translate-y-1 transition-all">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-orange-500">
                            <svg
                                className="h-7 w-7"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.455-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.698 1.028 1.591 1.028 2.682 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.001 10.001 0 0 0 22 12c0-5.523-4.477-10-10-10Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-white">
                                GitHub
                            </h2>

                            <a
                                href="https://github.com/mamtesh16"
                                target="_blank"
                                rel="noreferrer"
                                className="mt-1 block text-white hover:underline"
                            >
                                github.com/mamtesh16
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center gap-5 rounded-xl bg-[#0F172A] p-5 shadow-sm hover:-translate-y-1 transition-all">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl font-bold text-blue-600">
                            in
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-white">
                                LinkedIn
                            </h2>

                            <a
                                href="https://www.linkedin.com/in/mamtesh-kumar-726998398/"
                                target="_blank"
                                rel="noreferrer"
                                className="mt-1 block text-white hover:underline"
                            >
                                linkedin.com/in/mamtesh-kumar
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}