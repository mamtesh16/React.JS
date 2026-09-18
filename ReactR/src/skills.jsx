import React from "react";

function Skills() {
    const skills = [
        "Java",
        "C",
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Tailwind CSS",
        "Git & GitHub",
        "SQL",
        "DSA"
    ];

    return (
        <section className="bg-white py-8">

            <div className="flex justify-center items-center gap-4 mb-6">
                <span className="w-10 h-[2px] bg-orange-500"></span>

                <h1 className="text-orange-500 text-sm font-semibold tracking-[0.3em]">
                    SKILLS
                </h1>

                <span className="w-10 h-[2px] bg-orange-500"></span>
            </div>

          
            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 px-4">

                {skills.map((skill, index) => (
                    <React.Fragment key={skill}>

                        <span className="text-[#0F172A] text-base sm:text-lg font-medium">
                            {skill}
                        </span>

                        {index !== skills.length - 1 && (
                            <span className="text-orange-500 text-xl">
                                •
                            </span>
                        )}

                    </React.Fragment>
                ))}

            </div>

        </section>
    );
}

export default Skills;