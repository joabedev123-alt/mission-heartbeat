const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground text-center py-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6 mb-8">
        <div>
          <div className="h-10 w-10 rounded-lg bg-accent mx-auto mb-4 flex items-center justify-center">
            <span className="text-accent-foreground font-bold text-xl">✝</span>
          </div>
          <p>Vivendo a missão com propósito e fé.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Links</h4>
          <div className="flex flex-col gap-2">
            <a href="#inicio" className="hover:text-accent transition">
              Início
            </a>
            <a href="#sobre" className="hover:text-accent transition">
              Sobre
            </a>
            <a href="#eventos" className="hover:text-accent transition">
              Eventos
            </a>
            <a href="#contato" className="hover:text-accent transition">
              Contato
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Redes Sociais</h4>
          <div className="flex justify-center gap-4 text-2xl">
            <a
              href="#"
              className="hover:text-accent transition"
              aria-label="Instagram"
            >
              📸
            </a>
            <a
              href="#"
              className="hover:text-accent transition"
              aria-label="YouTube"
            >
              ▶️
            </a>
            <a
              href="#"
              className="hover:text-accent transition"
              aria-label="Facebook"
            >
              💬
            </a>
          </div>
        </div>
      </div>
      <p className="text-sm opacity-70">
        © 2025 Missão Esperança — Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;
