import logoPasja from "@/assets/logo-pasja.png";

export const Footer = () => {
  return (
    <footer className="bg-foreground/5 py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <img 
            src={logoPasja} 
            alt="Logo Pasja Consultoria de Recursos Humanos" 
            className="h-16 w-auto"
          />
          <div className="text-center space-y-2">
            <p className="font-semibold text-foreground text-lg">
              Pasja Consultoria de Recursos Humanos
            </p>
            <p className="text-muted-foreground text-sm">
              Mais do que consultoria, eu te entrego estratégia.
            </p>
          </div>
          <div className="text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Pasja Consultoria. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
