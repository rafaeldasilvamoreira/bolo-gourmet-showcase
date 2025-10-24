import { Instagram, Mail, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Faça sua Encomenda
          </h2>
          <p className="text-lg text-muted-foreground mb-12 animate-fade-in">
            Entre em contato para criar o bolo perfeito para sua ocasião especial
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="group hover:shadow-glow transition-all hover:-translate-y-1 animate-scale-in">
              <CardContent className="p-8 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Instagram className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Instagram</h3>
                <a
                  href="https://instagram.com/dolcifantini"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-dark transition-colors"
                >
                  @dolcifantini
                </a>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-glow transition-all hover:-translate-y-1 animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-8 text-center">
                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                  <Phone className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">WhatsApp</h3>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-secondary/80 transition-colors"
                >
                  (11) 99999-9999
                </a>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-glow transition-all hover:-translate-y-1 animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-8 text-center">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <Mail className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">E-mail</h3>
                <a
                  href="mailto:contato@dolcifantini.com.br"
                  className="text-accent hover:text-accent/80 transition-colors"
                >
                  contato@dolcifantini.com.br
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="bg-primary/5 border-2 border-primary/20 rounded-2xl p-8 animate-fade-in">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
              Encomendas com Antecedência
            </h3>
            <p className="text-muted-foreground">
              Para garantir a qualidade e o frescor de cada bolo, solicitamos encomendas 
              com pelo menos 7 dias de antecedência. Entre em contato para consultoria 
              personalizada sobre sabores, tamanhos e designs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
