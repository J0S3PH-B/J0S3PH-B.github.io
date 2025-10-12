import { ArrowDown } from "lucide-react";

export const HeroSection = () => {

    return (

        <section 
        id="hero" 
        className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md-text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">Hi, I'm</span>
                        <span className="opacity-0 text-primary animate-fade-in-delay-1"> Joseph</span>
                        <span className="opacity-0 text-gradient ml-2 animate-fade-in-delay-2"> Budihartanto</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-2-xl mx-auto opacity-0 animate-fade-in-delay-3">
                        I am a second-year Computer Science student with a strong eagerness to learn and grow in the field of technology. 
                    </p>

                    <div className="opacity-0 pt-4 animate-fade-in-delay-4">
                        <a className="power-button" href="#projects">
                            View My Work
                        </a>
                    </div>

                </div>
            </div>

            <div className="absolute bottom-8 transform-translate-x-0.5 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
                <ArrowDown className="h-5 w-5 text-primary"/>
            </div>

        </section>
    );
};