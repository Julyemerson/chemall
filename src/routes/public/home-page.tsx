import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { useCategoriesQuery } from "@/hooks/use-categories";



export function HomePage() {
  const { data: categories } = useCategoriesQuery();

  return (
    <div className="flex flex-col items-center">
      <section className="w-full py-52 px-6 text-center space-y-6 max-w-4xl">
        <h1 className="text-5xl font-extrabold tracking-tight">
          Encontre os produtos químicos que sua empresa precisa
        </h1>
        <p className="text-muted-foreground text-lg">
          Busque por nome, CAS ou fórmula para encontrar exatamente o que você precisa.
        </p>
        <div className="flex gap-2 max-w-2xl mx-auto bg-card p-2 rounded-xl shadow-sm border">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input className="border-none shadow-none pl-10" placeholder="Buscar por nome, CAS ou fórmula..." />
          </div>
          <Button size="lg">Buscar</Button>
        </div>
      </section>

      <section className="w-full py-12 px-8 bg-secondary/30">
        <h2 className="text-2xl font-bold text-center mb-10">Nossas Principais Categorias</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {categories?.map((cat) => (
            <Card key={cat.title} className="overflow-hidden hover:shadow-lg transition-all cursor-pointer group border-none">
              <div className="h-56 overflow-hidden">
                  <img 
                    src={cat.img} 
                    alt={cat.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              <div className="p-4 space-y-2">
                <h3 className="font-bold text-lg  group-hover:text-primary">{cat.title}</h3>
                <p className="text-sm text-muted-foreground">{cat.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      
    </div>
  );
}