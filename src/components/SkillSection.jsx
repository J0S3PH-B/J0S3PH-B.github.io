import { useState } from "react";
import { cn } from "@/lib/utils";

const Skills = [
    //frontend
    {name: "HTML/CSS", Level: "65", category: "frontend"},
    {name: "JavaScript", Level: "50", category: "frontend"},
    {name: "Tailwind CSS", Level: "60", category: "frontend"},
    {name: "React", Level: "45", category: "frontend"},
    {name: "Flutter", Level: "50", category: "frontend"},

    //backend
    {name: "Node.Js", Level: "45", category: "backend"},
    {name: "MySQL", Level: "95", category: "backkend"},
    {name: "Python", Level: "70", category: "backend"},
    {name: "Java", Level: "55", category: "backend"},

    //tools
    {name: "Git/GitHub", Level: "80", category: "tools"},
    {name: "Excel", Level: "95", category: "tools"},
    {name: "Figma", Level: "95", category: "tools"},
    {name: "VS Code", Level: "80", category: "tools"}
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

                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                                style={{width: skill.Level + "%"}}/>
                            </div>

                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground"> {skill.Level}% </span>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

        </section>
    );
}