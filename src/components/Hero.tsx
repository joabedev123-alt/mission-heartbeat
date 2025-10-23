import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-mission.jpg";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden"
    >
      <img
        src={heroImage}
        className="absolute inset-0 w-full h-full object-cover brightness-75"
        alt="Comunidade em adoração"
      />
      <div className="relative z-10 text-white max-w-3xl px-6 animate-fade-up">
        <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
          Levando fé e esperança a todos os lugares
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10 font-poppins font-light">
          Uma missão que conecta pessoas e comunidades através do amor e da palavra.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
          >
            <a href="#eventos">Próximos Cultos</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold"
          >
            <a href="#sobre">Conheça a Missão</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
