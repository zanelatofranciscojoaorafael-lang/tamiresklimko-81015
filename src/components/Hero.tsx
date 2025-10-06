import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import tamiresHero from "@/assets/tamires-hero.jpeg";
import dragonflyIcon from "@/assets/dragonfly-icon.png";

const CHECKOUT_URL = "https://pay.kiwify.com.br/iakctCj";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-[hsl(var(--pasja-blue))] via-[hsl(204,40%,70%)] to-[hsl(204,45%,75%)]">
      {/* Dragonfly pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/src/assets/bg-dragonflies.png')] bg-repeat bg-[length:200px_200px]"></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-white space-y-8 animate-fade-in">
            <div className="flex items-center gap-3">
              <img src={dragonflyIcon} alt="Ícone libélula dourada" className="w-12 h-12 animate-pulse" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Reposicione sua imagem profissional de ponta a ponta.
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed font-medium">
              Currículo e LinkedIn analisados com estratégia e feedback personalizado de quem já recrutou para Michelin, Ipiranga e Globo.
            </p>
            
            <Button 
              variant="hero"
              size="xl"
              className="group"
              onClick={() => window.open(CHECKOUT_URL, '_blank')}
            >
              Quero o combo completo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-white/20 border-2 border-white backdrop-blur-sm"></div>
                ))}
              </div>
              <p className="text-white/90 text-sm">
                <span className="font-bold">+200 profissionais</span> já transformaram seus currículos
              </p>
            </div>
          </div>
          
          {/* Right image */}
          <div className="relative lg:scale-110 animate-scale-in">
            <div className="absolute -inset-4 bg-gradient-to-r from-[hsl(var(--pasja-gold))] to-[hsl(var(--pasja-gold-dark))] rounded-3xl blur-2xl opacity-30"></div>
            <img 
              src={tamiresHero} 
              alt="Tamires Klimko — Consultora de Carreira" 
              className="relative rounded-3xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
