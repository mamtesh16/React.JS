import React from "react";
import about from "./assets/about.jpg";

export default function About() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-20">

          {/* Image */}
          <div className="flex justify-center">
            <img
              src={about}
              alt="About Mamtesh"
              className="w-full max-w-md rounded-2xl object-cover shadow-xl"
            />
          </div>

          {/* Content */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange-500">
              About Me
            </p>

            <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
              Building ideas into
              <span className="block">interactive digital experiences</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              I'm Mamtesh Kumar, a Computer Science student and aspiring Full
              Stack Developer who enjoys turning ideas into clean, responsive,
              and user-friendly web applications.
            </p>

            <p className="mt-4 text-lg leading-8 text-gray-600">
              I code with curiosity, build with purpose, and learn by doing.
              I enjoy solving problems and creating projects that combine
              creativity with technology.
            </p>

            {/* Tech Stack */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-900">
                Tech Stack
              </h3>

              <div className="mt-4 flex flex-wrap gap-3">

                <span className="rounded-lg bg-blue-950 px-4 py-2 text-sm font-medium text-white shadow-sm">
                  ⚛️ React
                </span>

                <span className="rounded-lg bg-blue-950 px-4 py-2 text-sm font-medium text-white shadow-sm">
                  🟨 JavaScript
                </span>

                <span className="rounded-lg bg-blue-950 px-4 py-2 text-sm font-medium text-white shadow-sm">
                  🟧 HTML
                </span>

                <span className="rounded-lg bg-blue-950 px-4 py-2 text-sm font-medium text-white shadow-sm">
                  🔵 CSS
                </span>

                <span className="rounded-lg bg-blue-950 px-4 py-2 text-sm font-medium text-white shadow-sm">
                  ☕ Java
                </span>

              </div>
            </div>

            <p className="mt-6 text-sm font-medium text-gray-700">
              🎯 Currently learning, building, and growing as a developer
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}