import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-secondary text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-playfair font-bold text-primary mb-6">Quem Somos</h2>
        <p className="max-w-3xl mx-auto text-muted-foreground mb-16">
          Somos uma missão que atua em diferentes regiões do Brasil, conectando
          pessoas e comunidades através de ações sociais, cultos, eventos e
          projetos que levam esperança e fé.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition">
            <CardContent className="p-8">
              <div className="text-4xl mb-4">✝️</div>
              <h3 className="text-xl font-semibold mb-3">Fé e Propósito</h3>
              <p className="text-muted-foreground">
                Acreditamos que a fé se manifesta em ações práticas de amor e
                serviço.
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition">
            <CardContent className="p-8">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-3">Comunhão</h3>
              <p className="text-muted-foreground">
                Fortalecemos a união entre congregações, líderes e comunidades
                locais.
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition">
            <CardContent className="p-8">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-3">Missão Global</h3>
              <p className="text-muted-foreground">
                Nossos projetos alcançam fronteiras, levando o evangelho onde
                for preciso.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
