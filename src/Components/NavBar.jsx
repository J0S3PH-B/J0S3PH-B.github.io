import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navButtons = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skill" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full transition-all duration-300 z-[999]",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
          : "py-5"
      )}
    >
      <div className="container px-5 sm:px-2 flex items-center justify-between gap-4 sm:gap-0">
        <a
          className="flex items-center font-bold text-primary"
          href="#hero"
          onClick={() => setIsOpened(false)}
        >
          <span className="relative z-10 text-sm sm:text-lg md:text-xl lg:text-2xl">
            <span className="text-glow text-foreground">Joseph Budihartanto</span>{" "}
            Portfolio
          </span>
        </a>

        {/* Desktop Navbar */}
        <div className="hidden md:flex space-x-8">
          {navButtons.map((item, key) => (
            <a
              className="text-foreground/80 hover:text-primary transition-colors duration-300 text-xl text-glow"
              key={key}
              href={item.href}
            >
              {item.name}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpened((prev) => !prev)}
          className="md:hidden text-foreground z-[1001]"
          aria-label={isOpened ? "Close Menu" : "Open Menu"}
        >
          {isOpened ? <X size={24} /> : <Menu size={25} />}
        </button>
      </div>

      {/* ✅ Mobile Fullscreen Overlay */}
      <div
        className={cn(
          "fixed top-0 left-0 w-screen h-screen bg-background/95 backdrop-blur-md flex flex-col items-center justify-center transition-all duration-300 md:hidden",
          isOpened
            ? "opacity-100 pointer-events-auto z-[1000]"
            : "opacity-0 pointer-events-none z-[-10]"
        )}
      >
        {/* Theme Toggle - top left corner */}
        <div className="absolute top-5 left-6">
          <ThemeToggle />
        </div>

        {/* Centered Menu Links */}
        <div className="flex flex-col space-y-6 text-xl text-center">
          {navButtons.map((item, key) => (
            <a
              key={key}
              href={item.href}
              onClick={() => setIsOpened(false)}
              className="text-foreground/80 hover:text-primary transition-colors duration-300 text-xl text-glow"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
