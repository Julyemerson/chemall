import { useLocation } from "@tanstack/react-router";
import { Bell, ChevronRight, Home } from "lucide-react";

export function AdminTopbar() {
  const location = useLocation();
  
  const routeLabels: Record<string, string> = {
    admin: "Admin",
    dashboard: "Painel",
    products: "Produtos",
    new: "Novo",
    orders: "Pedidos",
    clients: "Clientes",
    settings: "Configurações"
  };

  const pathSegments = location.pathname.split("/").filter(Boolean);

  return (
    <header className="h-16 border-b bg-background/50 backdrop-blur-md flex items-center justify-between px-8 sticky top-0 z-40">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Home size={14} className="mb-0.5" />
        
        {pathSegments.map((segment, index) => {
          const isLast = index === pathSegments.length - 1;
          const label = routeLabels[segment] || segment;

          return (
            <div key={segment} className="flex items-center gap-2">
              <ChevronRight size={14} className="opacity-50" />
              <span className={`capitalize ${isLast ? "font-bold text-foreground" : "hover:text-foreground cursor-default"}`}>
                {label}
              </span>
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-secondary rounded-full relative transition-colors">
          <Bell size={20} className="text-muted-foreground" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-background"></span>
        </button>
        <div className="h-8 w-[1px] bg-border mx-2"></div>
        <span className="text-sm font-bold tracking-tight text-primary">Chemall</span>
      </div>
    </header>
  );
}