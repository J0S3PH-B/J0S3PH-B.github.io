import { useState } from "react";
import { cn } from "@/lib/utils";

const Skills = [
    //frontend
    { name: "HTML", category: "frontend", img: "images/HTML.png" },
    { name: "CSS", category: "frontend", img: "images/CSS.png" },
    { name: "JavaScript", category: "frontend", img: "images/JavaScript.png" },
    { name: "Tailwind CSS", category: "frontend", img: "images/tailwindcss.png" },
    { name: "React", category: "frontend", img: "images/react.png" },
    { name: "Flutter", category: "frontend", img: "images/Flutter.png" },

    //backend
    { name: "C++", category: "backend", img: "images/C.png" },
    { name: "MySQL", category: ["backend", "analysis"], img: "images/MySQL.png" },
    { name: "Python", category: ["backend", "analysis"], img: "images/Python.png" },
    { name: "Java", category: "backend", img: "images/java.png" },

    //tools
    { name: "GitHub", category: "tools", img: "images/Github.png" },
    { name: "Excel", category: ["tools", "analysis"], img: "images/Excel.png" },
    { name: "Figma", category: "tools", img: "images/Figma.png" },
    { name: "VS Code", category: "tools", img: "images/VSCode.png" },

    //Analysis
    { name: "Kaggle", category: "analysis", img: "images/Kaggle.png" },
    { name: "RStudio", category: "analysis", img: "images/R.png" },
];

const cat = ["all", "frontend", "backend", "tools", "analysis"];

export const SkillSection = () => {
    const [activeCat, setActiveCat] = useState("all");
    const [selectedSkills, setSelectedSkills] = useState([]);

    const filteredSkills = Skills.filter(
        (skill) =>
            activeCat === "all" ||
            (Array.isArray(skill.category)
                ? skill.category.includes(activeCat)
                : skill.category === activeCat)
    );

    const toggleSkill = (name) => {
        setSelectedSkills((prev) =>
            prev.includes(name)
                ? prev.filter((s) => s !== name)
                : [...prev, name]
        );
    };

    return (
        <section id="skill" className="py-20 px-6 md:px-60 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>

                {/* Category Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {cat.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCat(category)}
                            className={cn(
                                "px-4 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCat === category
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Skill Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
                    {filteredSkills.map((skill, key) => (
                        <div
                            key={key}
                            onClick={() => toggleSkill(skill.name)}
                            className={cn(
                                // ✅ max width/height and responsiveness
                                "p-3 rounded-lg shadow-xs card-hover flex flex-col items-center text-center border-2 cursor-pointer transition-colors duration-300 max-w-[132px] max-h-[132px] w-full h-full sm:scale-100 scale-90",
                                selectedSkills.includes(skill.name)
                                    ? "bg-primary text-primary-foreground border-primary"
                                    : "bg-card text-foreground border-transparent hover:border-primary/50"
                            )}
                        >
                            <img
                                src={skill.img}
                                alt={skill.name}
                                className="w-16 h-16 object-contain mb-2 transition-transform duration-300 hover:scale-105"
                            />
                            <h3 className="font-semibold text-sm sm:text-base">{skill.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
