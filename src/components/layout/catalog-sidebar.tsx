import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function CatalogSidebar() {
  return (
    <aside className="bg-card border flex flex-col rounded-sm sticky top-0 shrink-0">
      <div className="flex-1 overflow-y-auto p-6 space-y-8">
        <div>
          <h2 className="text-xl font-bold mb-6">Filtros</h2>
          
          <div className="space-y-3 mb-6">
            <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Grau</Label>
            <div className="relative">
              <select className="w-full appearance-none bg-background border rounded-lg px-3 py-2.5 text-sm focus:ring-2 ring-primary/20 outline-none transition-all cursor-pointer">
                <option>Grau Técnico</option>
                <option>P.A. (Para Análise)</option>
                <option>Farmacêutico</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Pureza</Label>
            <div className="relative">
              <select className="w-full appearance-none bg-background border rounded-lg px-3 py-2.5 text-sm focus:ring-2 ring-primary/20 outline-none transition-all cursor-pointer">
                <option>&gt;99%</option>
                <option>&gt;95%</option>
                <option>&gt;90%</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>

          <div className="space-y-4">
            <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Fabricante</Label>
            <div className="space-y-3">
              {['Fabricante A', 'Fabricante B', 'Fabricante C'].map((fab) => (
                <label key={fab} className="flex items-center gap-3 group cursor-pointer">
                  <div className="relative flex items-center">
                    <input 
                      type="checkbox" 
                      className="peer h-5 w-5 appearance-none rounded border border-input checked:bg-primary checked:border-primary transition-all cursor-pointer" 
                    />
                    <svg className="absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm group-hover:text-primary transition-colors">{fab}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="p-6 bg-background border-t space-y-3">
        <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-11 shadow-sm">
          Aplicar Filtros
        </Button>
        <Button variant="secondary" className="w-full font-semibold h-11">
          Limpar Filtros
        </Button>
      </div>
    </aside>
  );
}