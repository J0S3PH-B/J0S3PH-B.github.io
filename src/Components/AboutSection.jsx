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
                        Curious and detail-oriented
                    </h3>

                    <p className="text-muted-foreground">
                        I'm a Computer Science student at BINUS University with interests in data analytics, 
                        front-end development, and cloud-native applications. I enjoy turning ideas into reliable software using 
                        modern web technologies and best practices.
                    </p>

                    <p className="text-muted-foreground">
                        My goal is to grow 
                        as a developer, build impactful projects, and expand my expertise in software development and technology.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4  justify-center ">
                        <a href="#contact" className="power-button">
                            Get In Touch
                        </a>

                        {/* CV Button */}
                        <a href="https://docs.google.com/document/d/1o9ru6M_O530Uzxy46eKCyDv-0htpg6ei2LHG-S8fvos/edit?usp=sharing" 
                        className="px-6 py-2 rounded-full border border-primrary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Download CV
                        </a>
                    </div>

                </div>

                {/* Right Section */}
                <div className="flex justify-center">
                    <div className="relative group">
                        <img src="images/ProfilePic.png"
                        alt="Profile Picture"
                        className="w-64 h-64 rounded-full object-cover border-4 border-primary 
                        shadow-lg transform transition-transform duration-500 group-hover:scale-105
                        group-hover:shadow-primary/50"/>

                        <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl opacity-0 
                        group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                </div>
            </div>

        </div>
    </section>
    );

};