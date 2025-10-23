import { Card, CardContent } from "@/components/ui/card";
import eventService from "@/assets/event-service.jpg";
import eventWorship from "@/assets/event-worship.jpg";
import eventConference from "@/assets/event-conference.jpg";

const Events = () => {
  const events = [
    {
      image: eventService,
      title: "Culto Missionário",
      time: "Domingo — 19h | São Paulo",
    },
    {
      image: eventWorship,
      title: "Encontro de Louvor",
      time: "Sábado — 18h | Campinas",
    },
    {
      image: eventConference,
      title: "Semana Missionária",
      time: "De 22 a 28 de Outubro",
    },
  ];

  return (
    <section id="eventos" className="py-20 bg-secondary text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-playfair font-bold text-primary mb-12">
          Próximos Cultos e Eventos
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card
              key={index}
              className="bg-background hover:shadow-2xl overflow-hidden transition"
            >
              <img
                src={event.image}
                className="h-60 w-full object-cover"
                alt={event.title}
              />
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-1">{event.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {event.time}
                </p>
                <a
                  href="#"
                  className="text-primary hover:text-accent transition"
                >
                  Mais detalhes
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
