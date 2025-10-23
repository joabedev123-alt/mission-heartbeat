import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-background/90 backdrop-blur-md shadow-sm z-50 transition-all duration-300 ${
        isScrolled ? "py-3" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xl">✝</span>
          </div>
          <span className="text-2xl font-semibold text-primary tracking-tight">
            Missão Esperança
          </span>
        </div>
        <nav className="hidden md:flex gap-6 font-medium text-primary">
          <a href="#inicio" className="hover:text-accent transition">
            Início
          </a>
          <a href="#sobre" className="hover:text-accent transition">
            Sobre
          </a>
          <a href="#ministerios" className="hover:text-accent transition">
            Ministérios
          </a>
          <a href="#eventos" className="hover:text-accent transition">
            Eventos
          </a>
          <a href="#projetos" className="hover:text-accent transition">
            Projetos
          </a>
          <a href="#galeria" className="hover:text-accent transition">
            Galeria
          </a>
          <a href="#contato" className="hover:text-accent transition">
            Contato
          </a>
        </nav>
        <Button className="bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground">
          Ver Agenda
        </Button>
      </div>
    </header>
  );
};

export default Header;
