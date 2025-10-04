import { Button } from "@/components/ui/button";
import { FileText, Search, BookOpen, ArrowRight } from "lucide-react";
import mockupCurriculo from "@/assets/mockup-curriculo.jpg";
import dragonflyIcon from "@/assets/dragonfly-icon.png";

const CHECKOUT_URL = "https://pay.kiwify.com.br/exemplo-checkout";

export const WhatYouGet = () => {
  const benefits = [
    {
      icon: FileText,
      title: "Feedback em PDF completo",
      description: "Melhorias e ajustes estratégicos personalizados para o seu currículo."
    },
    {
      icon: Search,
      title: "Diagnóstico detalhado",
      description: "Descubra o que está impedindo seu currículo de gerar convites para entrevistas."
    },
    {
      icon: BookOpen,
      title: "eBook exclusivo incluído",
      description: "Orientações práticas para montar um currículo claro, atrativo e alinhado ao mercado."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[hsl(var(--muted))] to-white relative overflow-hidden">
      {/* Subtle dragonfly decorations */}
      <img src={dragonflyIcon} alt="" className="absolute top-10 right-10 w-20 h-20 opacity-5 rotate-12" />
      <img src={dragonflyIcon} alt="" className="absolute bottom-20 left-10 w-16 h-16 opacity-5 -rotate-12" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            O que está incluso na sua análise
          </h2>
          <div className="w-24 h-1 bg-[hsl(var(--pasja-gold))] mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Essa análise não é modelo pronto — é estratégia feita sob medida pra você sair da invisibilidade.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Benefits */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:scale-105 flex gap-4"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-[hsl(var(--pasja-gold))]/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[hsl(var(--pasja-gold-dark))]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Mockup image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[hsl(var(--pasja-blue))] to-[hsl(var(--pasja-gold))] rounded-3xl blur-2xl opacity-20"></div>
            <img 
              src={mockupCurriculo} 
              alt="Currículo sendo revisado em mesa de trabalho" 
              className="relative rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="gold"
            size="xl"
            className="group"
            onClick={() => window.open(CHECKOUT_URL, '_blank')}
          >
            Quero meu currículo destravado
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            💳 Pagamento seguro • 🔒 Satisfação garantida
          </p>
        </div>
      </div>
    </section>
  );
};
