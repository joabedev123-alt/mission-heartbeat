import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ name: "", email: "", city: "", message: "" });
  };

  return (
    <section id="contato" className="py-20 text-center bg-primary">
      <h2 className="text-4xl font-playfair font-bold text-primary-foreground mb-6">
        Participe Conosco
      </h2>
      <p className="text-primary-foreground/90 mb-10">
        Quer participar ou levar nossa missão até sua cidade? Entre em contato.
      </p>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto grid grid-cols-1 gap-4 px-6"
      >
        <Input
          type="text"
          placeholder="Nome"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <Input
          type="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <Input
          type="text"
          placeholder="Cidade"
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          required
        />
        <Textarea
          placeholder="Mensagem"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="h-32"
          required
        />
        <Button
          type="submit"
          className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
        >
          Enviar Mensagem
        </Button>
      </form>
    </section>
  );
};

export default Contact;
