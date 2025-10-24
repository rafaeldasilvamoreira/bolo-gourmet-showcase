import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


const Index = () => {
  return (
    <div className="min-h-screen">
        <img
        src="/boneco.png"
        alt="Logo"
        className="fixed bottom-4 right-4 w-20 h-auto z-50"
      />     
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
