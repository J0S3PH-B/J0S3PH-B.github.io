import { AboutSection } from "../Components/AboutSection";
import { ContactSection } from "../Components/ContactSection";
import { HeroSection } from "../Components/HeroSection";
import { Navbar } from "../Components/NavBar";
import { Projects } from "../Components/Projects";
import { SkillSection } from "../Components/SkillsSection";
import { StarBackground } from "../Components/StarBackground";

export const Home = () => {

    return(
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* 1. render the theme toggle */}

            {/* 2. Handle the background effect */}
            <StarBackground/>

            {/* 3. Navbar */}
            <Navbar/>

            {/* 4. The main content */}
            <main>
                <HeroSection/>
                <AboutSection/>

                <SkillSection/>

                <Projects/>

                <ContactSection/>
            </main>
        </div>
    );
}
