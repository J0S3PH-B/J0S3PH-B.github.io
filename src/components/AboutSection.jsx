import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {



    return (
    <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About 
                <span className="text-primary"> Me </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">
                        A Passionate Computer Science Student
                    </h3>

                    <p className="text-muted-foreground">
                        I am a second-year Computer Science student with a strong passion for learning 
                        and applying technology to solve real-world problems. I have hands-on experience 
                        in multiple programming languages, including SQL, C, Python, HTML, CSS, and JavaScript, 
                        which allows me to work across both backend and frontend development.
                    </p>

                    <p className="text-muted-foreground">
                        Curious and detail-oriented, I enjoy exploring different areas of computer science 
                        while continuously improving my coding and problem-solving skills. My goal is to grow 
                        as a developer, build impactful projects, and expand my expertise in software development and technology.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4  justify-center ">
                        <a href="#contact" className="power-button">
                            Get In Touch
                        </a>

                        {/* add Download CV Button Later! */}
                    </div>

                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary"/>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
    );

};