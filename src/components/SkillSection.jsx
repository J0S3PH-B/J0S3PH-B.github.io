import { useState } from "react";
import { cn } from "@/lib/utils";

const Skills = [
    //frontend
    {name: "HTML/CSS", category: "frontend", src: ""},
    {name: "JavaScript", category: "frontend", src: ""},
    {name: "Tailwind CSS", category: "frontend", src: ""},
    {name: "React", category: "frontend", src: ""},
    {name: "Flutter", category: "frontend", src: ""},

    //backend
    {name: "Node.Js", category: "backend", src: ""},
    {name: "MySQL", category: "backkend", src: ""},
    {name: "Python", category: "backend", src: ""},
    {name: "Java", category: "backend", src: ""},

    //tools
    {name: "Git/GitHub", category: "tools", src: ""},
    {name: "Excel", category: "tools", src: ""},
    {name: "Figma", category: "tools", src: ""},
    {name: "VS Code", category: "tools", src: ""}
]

const cat = ["all", "frontend", "backend", "tools"]

export const SkillSection = () =>{

    const [activeCat, setActiveCat] = useState("all");

    const filteredSkills = Skills.filter(
        (skill) => activeCat === "all" || skill.category === activeCat
    );

    return (
        <section id="skill" className="py-24 px-4 relative bg-secondary/30">

            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center ">
                    My <span className="text-primary"> Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">

                    {cat.map((category, key) => (
                        
                        <button key={key}
                        onClick={()=> setActiveCat(category)}
                        className={cn(
                            "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCat === category ? 
                            "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                        )}
                        >
                            {category}
                        </button>

                    ))}

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">

                    {filteredSkills.map((skill, key) => ( 
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            
                            <div className="text-left mb-4">
                                <h3 className="font-semi-bold text-lg"> {skill.name} </h3>
                            </div>    
                        </div>
                    ))}

                </div>
            </div>

        </section>
    );
}