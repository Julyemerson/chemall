// src/components/layout/Footer.tsx
import { Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t pt-16 pb-8 px-8 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Coluna 1: Institucional */}
        <div className="space-y-4">
          <h3 className="font-bold text-sm uppercase tracking-wider">Institucional</h3>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li><a href="#" className="hover:text-primary transition-colors">Sobre Nós</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Trabalhe Conosco</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Imprensa</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-sm uppercase tracking-wider">Atendimento ao Cliente</h3>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li><a href="#" className="hover:text-primary transition-colors">Fale Conosco</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Meus Pedidos</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-sm uppercase tracking-wider">Políticas</h3>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Termos de Serviço</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Política de Devolução</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-sm uppercase tracking-wider">Contato</h3>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li>email@chemall.com</li>
            <li>(11) 99999-9999</li>
          </ul>
        </div>
      </div>

      <div className="border-t pt-8 flex flex-col items-center gap-4">
        <div className="flex gap-4">
          <a href="#" className="text-muted-foreground hover:text-primary"><Linkedin size={20} /></a>
          <a href="#" className="text-muted-foreground hover:text-primary"><Twitter size={20} /></a>
        </div>
        <p className="text-xs text-muted-foreground">
          © 2023 Chemall. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}