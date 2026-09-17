import React from "react";
import resumeImage from "./assets/resume.png";

function Resume() {
    return (
        <div className="min-h-screen bg-gray-50 pt-10 pb-10">
            
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
                My Resume
            </h1>

            <div className="flex justify-center px-4">
                <img
                    src={resumeImage}
                    alt="My Resume"
                    className="w-full max-w-4xl h-auto shadow-lg rounded-lg"
                />
            </div>

        </div>
    );
}

export default Resume;