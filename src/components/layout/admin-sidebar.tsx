import { LayoutDashboard, Package, ShoppingCart, Users, Settings, LogOut, HelpCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export function AdminSidebar() {
  return (
    <aside className="w-64 bg-card border-r flex flex-col h-screen sticky top-0 shrink-0">
      <div className="p-6 flex items-center gap-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CA</AvatarFallback>
        </Avatar>
        <div className="flex flex-col overflow-hidden">
          <span className="text-sm font-bold truncate">ChemAdmin</span>
          <span className="text-xs text-muted-foreground truncate">admin@chemcorp.com</span>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-2 mt-4">
        <AdminNavItem icon={<LayoutDashboard size={20} />} label="Dashboard" to="#" exact />
        <AdminNavItem icon={<Package size={20} />} label="Produtos" to="/admin/products/new" />
        <AdminNavItem icon={<ShoppingCart size={20} />} label="Pedidos" to="#" />
        <AdminNavItem icon={<Users size={20} />} label="Clientes" to="/admin/clients/new" />
      </nav>

      <div className="p-4 space-y-2">
        <Separator className="mb-4" />
        <AdminNavItem icon={<Settings size={20} />} label="Configurações" to="#" />
        <AdminNavItem icon={<HelpCircle size={20} />} label="Ajuda" to="#" />
        <AdminNavItem icon={<LogOut size={20} />} label="Sair" to="#" />
      </div>
    </aside>
  );
}

function AdminNavItem({ icon, label, to, exact = false }: { icon: any, label: string, to: string, exact?: boolean }) {
  return (
    <Link 
      to={to}
      activeOptions={{ exact }}
      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors text-muted-foreground hover:bg-secondary hover:text-foreground"
      activeProps={{
        className: "bg-primary text-primary-foreground font-bold shadow-sm hover:bg-primary",
      }}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}