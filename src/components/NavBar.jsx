import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navButtons = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skill"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"}
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpened, setIsOpened] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10)
        };
        
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <nav 
            className={cn(
                "fixed w-full z-40 transition-all duration-300", 
                isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs":"py-5"
            )}
        >
            <div className="container flex items-center justify-between"> 
                <a className="text-xl font-bold text-primary flex items-center" href="#hero">
                    <span className="relative z-10">
                        {" "}
                        <span className="text-glow text-foreground"> Joseph Budihartanto</span> {" "}
                        Portfolio
                    </span>
                </a>

                {/*Desktop Navbar*/}

                <div className="hidden md:flex space-x-8">
                    {navButtons.map((item, key) => (
                        <a className="text-foreground/80 hover:text-primary transition-colors duration-300 text-xl text-glow" key={key} href={item.href}>
                            {item.name}
                        </a>
                    ))}
                </div>

                {/*Mobile Navbar*/}

                <button 
                onClick={() => setIsOpened((prev) => !prev)}
                className="md:hidden p-2 text-foreground z-50"
                aria-label={isOpened ? "Close Menu":"Open Menu"}
                >
                    {" "}
                    {isOpened ? <X size={24}/> : <Menu size={25}/>}{" "}
                </button>

                <div className={cn(
                    "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isOpened ? "opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"
                )}>
                    <div className="flex flex-col space-y-8 text-xl">
                        {navButtons.map((item, key) => (
                            <a 
                                className="text-foreground/80 hover:text-primary transition-colors duration-300 text-xl text-glow" 
                                key={key} 
                                href={item.href}
                                onClick={() => setIsOpened(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </nav>
    );
};