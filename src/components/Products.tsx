import { Card, CardContent } from "@/components/ui/card";

const products = [
  {
    name: "Bolo Red Velvet",
    description: "Clássico com cream cheese e acabamento em flores comestíveis",
    price: "A partir de R$ 180",
    features: ["Massa aveludada", "Recheio cremoso", "Decoração personalizada"],
  },
  {
    name: "Bolo de Frutas Vermelhas",
    description: "Camadas de massa branca com frutas frescas e chantilly",
    price: "A partir de R$ 200",
    features: ["Frutas frescas", "Chantilly artesanal", "Sabor equilibrado"],
  },
  {
    name: "Naked Cake",
    description: "Estilo rústico-chic com recheios à sua escolha",
    price: "A partir de R$ 150",
    features: ["Visual natural", "Flores frescas", "Sabores personalizáveis"],
  },
  {
    name: "Bolo Drip Cake",
    description: "Moderno com cobertura escorrida e decorações luxuosas",
    price: "A partir de R$ 220",
    features: ["Drip de chocolate", "Decoração premium", "Design marcante"],
  },
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 pt-16">
            Nossos Bolos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada criação é única e feita sob encomenda para garantir frescor e qualidade excepcional
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {product.description}
                </p>
                <p className="text-primary font-bold text-xl mb-4">
                  {product.price}
                </p>
                <ul className="space-y-2">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <svg
                        className="w-4 h-4 text-secondary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
