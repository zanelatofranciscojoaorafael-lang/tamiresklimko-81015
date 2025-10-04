import { Building2, Users, Award } from "lucide-react";

export const Authority = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Quem é Tamires Klimko?
            </h2>
            <div className="w-24 h-1 bg-[hsl(var(--pasja-gold))] mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-[var(--shadow-card)] p-8 md:p-12 space-y-8">
            <p className="text-lg text-foreground/90 leading-relaxed">
              Profissional de RH com mais de <span className="font-bold text-[hsl(var(--pasja-blue))]">12 anos de experiência</span> em grandes empresas como <span className="font-bold">Michelin, Ipiranga e Globo</span>, com atuação em gestão de pessoas, recrutamento e desenvolvimento organizacional.
            </p>
            
            <p className="text-lg text-foreground/90 leading-relaxed">
              Hoje, Tamires aplica esse conhecimento na consultoria de carreira, ajudando profissionais a destravarem oportunidades e atingirem seus objetivos com <span className="font-bold text-[hsl(var(--pasja-gold-dark))]">clareza, confiança e resultados reais</span>.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 pt-6">
              <div className="flex items-start gap-3 p-4 bg-[hsl(var(--muted))] rounded-xl">
                <Building2 className="w-6 h-6 text-[hsl(var(--pasja-blue))] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Grandes empresas</p>
                  <p className="text-sm text-muted-foreground">Michelin, Ipiranga, Globo</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-[hsl(var(--muted))] rounded-xl">
                <Users className="w-6 h-6 text-[hsl(var(--pasja-blue))] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Recrutamento</p>
                  <p className="text-sm text-muted-foreground">Gestão de pessoas</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-[hsl(var(--muted))] rounded-xl">
                <Award className="w-6 h-6 text-[hsl(var(--pasja-blue))] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">+12 anos</p>
                  <p className="text-sm text-muted-foreground">De experiência em RH</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
