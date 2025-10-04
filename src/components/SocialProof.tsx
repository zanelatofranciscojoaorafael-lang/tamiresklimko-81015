import { Star, Shield } from "lucide-react";

export const SocialProof = () => {
  const testimonials = [
    {
      text: "Com a análise da Tamires, meu currículo e LinkedIn finalmente começaram a gerar entrevistas!",
      author: "Mariana S.",
      role: "Analista de Marketing"
    },
    {
      text: "Recebi um feedback detalhado em PDF e áudio. Já fui chamada para dois processos.",
      author: "Carlos R.",
      role: "Gerente Comercial"
    },
    {
      text: "O combo completo transformou minha presença online. Recomendo demais!",
      author: "Ana Paula M.",
      role: "Coordenadora de RH"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Profissionais que já transformaram suas carreiras
            </h2>
            <div className="w-24 h-1 bg-[hsl(var(--pasja-gold))] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[hsl(var(--muted))] to-white rounded-2xl p-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[hsl(var(--pasja-gold))] text-[hsl(var(--pasja-gold))]" />
                  ))}
                </div>
                <p className="text-foreground/90 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-[hsl(var(--pasja-blue))]/10 to-[hsl(var(--pasja-gold))]/10 rounded-2xl p-8 flex items-center justify-center gap-4 border-2 border-[hsl(var(--pasja-gold))]/30">
            <Shield className="w-8 h-8 text-[hsl(var(--pasja-gold-dark))]" />
            <p className="text-lg font-semibold text-foreground">
              Satisfação garantida ou ajuste gratuito • 1 revisão incluída
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
