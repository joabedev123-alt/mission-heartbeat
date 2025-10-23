import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import congreg1 from "@/assets/congregations-1.jpg";
import congreg2 from "@/assets/congregations-2.jpg";
import congreg3 from "@/assets/congregations-3.jpg";

const Congregations = () => {
  const congregations = [
    {
      image: congreg1,
      name: "Congregação Esperança",
      location: "São Paulo",
      pastor: "Pr. João Silva",
    },
    {
      image: congreg2,
      name: "Congregação Luz Viva",
      location: "Rio de Janeiro",
      pastor: "Pr. Ana Lima",
    },
    {
      image: congreg3,
      name: "Congregação Fé e Vida",
      location: "Belo Horizonte",
      pastor: "Pr. Carlos Santos",
    },
  ];

  return (
    <section id="congregacoes" className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-playfair font-bold text-center text-primary mb-12">
          Nossas Congregações
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {congregations.map((congregation, index) => (
            <Card
              key={index}
              className="bg-background hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={congregation.image}
                alt={congregation.name}
                className="w-full h-56 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2 font-poppins">
                  {congregation.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-1">
                  {congregation.location}
                </p>
                <p className="text-muted-foreground text-sm mb-4">
                  {congregation.pastor}
                </p>
                <Button
                  variant="link"
                  className="text-primary hover:text-accent p-0 font-semibold"
                >
                  Ver Detalhes
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Congregations;
