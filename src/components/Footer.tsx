import React from 'react';
import { Link } from 'react-router-dom';
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="mt-10 relative bg-cover bg-center opacity-80">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/footer_img/footer.png)' }}></div>
      <div className="container mx-auto px-4 py-10 relative z-10 text-white">
        <div className="space-y-8 text-center sm:text-left"> {/* Alinea al centro en móviles */}
          <div className="space-y-4">
            <img src="/logos/Sextoonslogo.png" alt="Logo" className="w-auto h-6 mx-auto sm:mx-0" /> {/* Reemplaza "/logo.png" con la ruta de tu logo */}
            <p className="text-sm">
              Todos los webtoons y cómics publicados por T.G.S son versiones fanmade
              de los contenidos originales. Es posible que haya algunas diferencias lingüísticas y
              modificaciones en nombres, objetos u lugares. Para que puedas leer las versiones oficiales del Coreano, te
              recomendamos adquirir dichos contenidos en páginas autorizadas. Esto puede depender de la región en la que
              te encuentres.
            </p>
          </div>

          <Separator className="my-8 h-0.5 bg-violet-500 ml-0 rounded-xl" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              The Gooner's Saviors - Todos los derechos reservados.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0 justify-center"> {/* Alinea los enlaces al centro en móviles */}
              <Link to="/terms" className="text-xs hover:text-primary transition-colors">Terms of Service</Link>
              <Link to="/privacy" className="text-xs hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/dmca" className="text-xs hover:text-primary transition-colors">DMCA</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
