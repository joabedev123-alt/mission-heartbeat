import { Card, CardContent } from "@/components/ui/card";
import ministryWorship from "@/assets/ministry-worship.jpg";
import ministryYouth from "@/assets/ministry-youth.jpg";
import ministryFamily from "@/assets/ministry-family.jpg";
import ministryKids from "@/assets/ministry-kids.jpg";

const Ministries = () => {
  const ministries = [
    {
      image: ministryWorship,
      title: "Ministério de Louvor",
      description: "Louvamos com excelência para criar momentos de adoração genuína.",
    },
    {
      image: ministryYouth,
      title: "Juventude Missionária",
      description: "Movimento de jovens comprometidos em servir e evangelizar.",
    },
    {
      image: ministryFamily,
      title: "Famílias em Ação",
      description: "Projetos que fortalecem lares e valores cristãos.",
    },
    {
      image: ministryKids,
      title: "Missão Kids",
      description: "Atividades que ensinam valores bíblicos de forma lúdica e criativa.",
    },
  ];

  return (
    <section id="ministerios" className="py-20 text-center bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-playfair font-bold text-primary mb-12">
          Nossos Ministérios
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {ministries.map((ministry, index) => (
            <Card
              key={index}
              className="bg-secondary hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={ministry.image}
                alt={ministry.title}
                className="rounded-t-xl w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">{ministry.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {ministry.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ministries;
