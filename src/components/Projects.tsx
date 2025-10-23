import { Card, CardContent } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "Evangelismo nas Ruas",
      description:
        "Levando palavra e apoio a pessoas em situação de vulnerabilidade.",
    },
    {
      title: "Missão Sertão",
      description:
        "Expedições com distribuição de alimentos, roupas e esperança.",
    },
    {
      title: "Projetos Sociais",
      description: "Ações contínuas com crianças e famílias em comunidades.",
    },
  ];

  return (
    <section id="projetos" className="py-28 text-center bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-primary mb-12">
          Projetos Missionários
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-secondary hover:shadow-lg transition">
              <CardContent className="p-8">
                <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <a href="#" className="text-primary hover:text-accent">
                  Ver fotos
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
