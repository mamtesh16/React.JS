import React from "react";
import about from "./assets/about.jpg";

export default function About() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">

                <div className="grid items-center gap-10 md:grid-cols-2">

                    {/* Image */}
                    <div className="flex justify-center">
                        <img
                            src={about}
                            alt="About Me"
                            className="w-full max-w-md rounded-2xl object-cover shadow-lg"
                        />
                    </div>

                    {/* Content */}
                    <div>
                        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange-500">
                            About Me
                        </p>

                        <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
                            Turning Ideas Into Code
                        </h2>

                        <p className="mt-6 leading-7 text-gray-600">
                            I am Mamtesh Kumar, a B.Tech CSE student and
                            aspiring Full Stack Developer. I enjoy building
                            modern, responsive and user-friendly web
                            applications.
                        </p>

                        <p className="mt-4 leading-7 text-gray-600">
                            I am continuously improving my skills in React,
                            JavaScript, Java and web development while working
                            on practical projects and learning new
                            technologies.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                                React.js
                            </span>

                            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                                JavaScript
                            </span>

                            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                                Java
                            </span>

                            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                                Web Development
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}