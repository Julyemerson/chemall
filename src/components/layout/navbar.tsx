import { Search, User, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';
import { Link } from '@tanstack/react-router';

export function Navbar() {
  return (
    <header className="border-b bg-background sticky top-0 z-50">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between px-32 py-4">
        <Link to="/">
          <Logo className="h-8" />
        </Link>

        <div className="flex-1 mx-8">
          <nav className="flex items-center gap-8">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Início
            </Link>
            <Link to="/catalog" className="text-sm font-medium hover:text-primary transition-colors">
              Catálogo
            </Link>
            <Link to="#" className="text-sm font-medium hover:text-primary transition-colors">
              Sobre Nós
            </Link>
            <Link to="# " className="text-sm font-medium hover:text-primary transition-colors">
              Contato
            </Link>
          </nav>
        </div>
        <div className="flex-1 max-w-xl mx-8 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input 
            className="w-full bg-secondary/50 rounded-sm py-2 pl-10 pr-4 text-sm outline-none focus:ring-2 ring-primary/20 border border-transparent focus:border-primary transition-all"
            placeholder="Buscar por nome, CAS ou fórmula..."
          />
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full">
            <User className="w-5 h-5" />
          </Button>
          <Link to="/cart" className="relative group">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ShoppingCart className="w-5 h-5 group-hover:text-primary" />
            </Button>
            <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              2
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}