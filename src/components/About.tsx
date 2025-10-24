import brunoImage from "@/assets/bruno-profile.png";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="animate-fade-in">
            <img
              src={brunoImage}
              alt="Bruno - Confeiteiro"
              className="rounded-2xl shadow-soft w-full"
            />
          </div>
          
          <div className="animate-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sobre o Chef
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Bruno é um confeiteiro apaixonado, participante do renomado programa Bake Off Brasil. 
              Com técnicas refinadas e dedicação artesanal, cada bolo é criado com ingredientes 
              selecionados e muito amor.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Na Dolci Fantini, acreditamos que cada celebração merece um bolo único. 
              Combinamos sabores sofisticados com designs elegantes para criar verdadeiras obras de arte comestíveis.
            </p>
            <div className="flex gap-4 flex-wrap">
              <div className="bg-primary/10 px-6 py-3 rounded-full">
                <span className="text-primary font-semibold">Ingredientes Premium</span>
              </div>
              <div className="bg-secondary/10 px-6 py-3 rounded-full">
                <span className="text-secondary font-semibold">100% Artesanal</span>
              </div>
              <div className="bg-accent/10 px-6 py-3 rounded-full">
                <span className="text-accent font-semibold">Designs Únicos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
