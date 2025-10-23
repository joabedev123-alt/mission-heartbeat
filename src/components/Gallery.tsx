import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const Gallery = () => {
  const images = [gallery1, gallery2, gallery3, gallery4];

  return (
    <section id="galeria" className="py-28 bg-secondary text-center">
      <h2 className="text-4xl font-bold text-primary mb-12">
        Galeria de Imagens
      </h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 px-6">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Galeria ${index + 1}`}
            className="rounded-2xl object-cover h-64 w-full hover:scale-105 transition cursor-pointer"
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
