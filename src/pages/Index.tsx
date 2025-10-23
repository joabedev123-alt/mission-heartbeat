import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Ministries from "@/components/Ministries";
import Congregations from "@/components/Congregations";
import Events from "@/components/Events";
import Projects from "@/components/Projects";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="font-poppins">
      <Header />
      <Hero />
      <About />
      <Ministries />
      <Congregations />
      <Events />
      <Projects />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
