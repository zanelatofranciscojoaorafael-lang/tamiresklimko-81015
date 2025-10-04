import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users } from "lucide-react";
import dragonflyIcon from "@/assets/dragonfly-icon.png";

const CHECKOUT_URL = "https://pay.kiwify.com.br/iakctCj";

export const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[hsl(var(--pasja-blue))] to-[hsl(204,40%,70%)] relative overflow-hidden">
      {/* Decorative dragonflies */}
      <img src={dragonflyIcon} alt="" className="absolute top-10 left-10 w-24 h-24 opacity-10 animate-pulse" />
      <img src={dragonflyIcon} alt="" className="absolute bottom-10 right-10 w-32 h-32 opacity-10 animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full">
            <Clock className="w-5 h-5" />
            <span className="font-semibold">Vagas limitadas por semana</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            A próxima entrevista pode ser a sua
          </h2>
          
          <p className="text-xl text-white/95 leading-relaxed max-w-2xl mx-auto">
            Para garantir qualidade e dedicação em cada análise completa, Tamires realiza um número limitado de atendimentos por semana. Garanta sua análise antes que as vagas da semana acabem.
          </p>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-2xl mx-auto border border-white/20">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 bg-white/10 rounded-xl">
                <Users className="w-8 h-8 text-[hsl(var(--pasja-gold))] mx-auto mb-2" />
                <p className="text-2xl font-bold text-white">5 vagas</p>
                <p className="text-white/80 text-sm">restantes esta semana</p>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-xl">
                <Clock className="w-8 h-8 text-[hsl(var(--pasja-gold))] mx-auto mb-2" />
                <p className="text-2xl font-bold text-white">48h</p>
                <p className="text-white/80 text-sm">tempo médio de entrega</p>
              </div>
            </div>
            
            <Button 
              variant="hero"
              size="xl"
              className="w-full group bg-[hsl(var(--pasja-gold))] hover:bg-[hsl(var(--pasja-gold-dark))]"
              onClick={() => window.open(CHECKOUT_URL, '_blank')}
            >
              Quero o combo completo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <p className="text-white/80 text-sm mt-4">
              Sua imagem profissional merece o olhar de uma especialista que entende o que o mercado procura.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 pt-8 text-white/90">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[hsl(var(--pasja-gold))] rounded-full"></div>
              <span>Análise Currículo + LinkedIn</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[hsl(var(--pasja-gold))] rounded-full"></div>
              <span>Áudio exclusivo da Tamires</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[hsl(var(--pasja-gold))] rounded-full"></div>
              <span>eBook completo incluído</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[hsl(var(--pasja-gold))] rounded-full"></div>
              <span>Apenas R$ 297</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
