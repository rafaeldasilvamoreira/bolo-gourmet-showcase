import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Dolci Fantini" className="h-16 w-auto" />
            <div>
              <p className="font-serif text-xl font-bold">Dolci Fantini</p>
              <p className="text-primary-foreground/80 text-sm">Bolos Gourmet Artesanais</p>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-primary-foreground/90 mb-2">
              Feito com amor por Bruno
            </p>
            <p className="text-primary-foreground/70 text-sm">
              © {new Date().getFullYear()} Dolci Fantini. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
