import { ThemeToggle } from "@/components/themeToggle";
import { StarBackground }from "@/components/starBackground";
import { Navbar }from "@/components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillSection } from "../components/SkillSection";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* 1. render the theme toggle */}
            <ThemeToggle />

            {/* 2. Handle the background effect */}
            <StarBackground/> 

            {/* 3. Navbar */}
            <Navbar/>

            {/* 4. The main content */}
            <main>
                <HeroSection />
                <AboutSection/>
                <SkillSection/>
            </main>

            {/* 5. Footer */}
        </div>
    );
};