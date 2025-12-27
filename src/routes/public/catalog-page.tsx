import { useState } from "react";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { useProductsQuery } from "@/hooks/use-products";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CatalogSidebar } from "@/components/layout/catalog-sidebar";
import { Search, Eye, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const ITEMS_PER_PAGE = 5;

export function CatalogPage() {
  const { data: products = [] } = useProductsQuery(); 
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = products.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalItems);
  
  const currentProducts = products.slice(startIndex, endIndex);

  const goToPage = (page: number) => setCurrentPage(page);
  const nextPage = () => setCurrentPage((p) => Math.min(p + 1, totalPages));
  const prevPage = () => setCurrentPage((p) => Math.max(p - 1, 1));

  return (
    <div className="max-w-[1600px] mx-auto px-8 py-4 flex gap-10">
      
      <aside className="w-80 shrink-0 sticky top-24 h-fit">
        <CatalogSidebar />
      </aside>
      
      <main className="flex-1 space-y-6">
        <header className="space-y-4">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-3xl font-black tracking-tight">Catálogo de Produtos</h1>
            </div>
          </div>
          
          <div className="relative max-w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Pesquisar por nome, CAS ou Fórmula..." 
              className="pl-10 h-12 bg-white border-muted shadow-sm focus-visible:ring-primary"
            />
          </div>
        </header>
        
        <div className="border rounded-xl bg-card shadow-sm overflow-hidden">
          <Table>
            <TableHeader className="bg-secondary/30">
              <TableRow className="hover:bg-transparent border-b">
                <TableHead className="w-[80px]"></TableHead>
                <TableHead className="py-4 px-4 font-bold text-xs uppercase tracking-wider">Produto</TableHead>
                <TableHead className="font-bold text-xs uppercase tracking-wider">Propriedades</TableHead>
                <TableHead className="font-bold text-xs uppercase tracking-wider">Grau/Pureza</TableHead>
                <TableHead className="font-bold text-xs uppercase tracking-wider text-right px-6">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentProducts.map((p) => (
                <TableRow key={p.id} className="group hover:bg-muted/30 transition-colors border-b last:border-0">
                  
                  <TableCell className="py-3 pl-4">
                    <div className="h-12 w-12 rounded-lg bg-white border flex items-center justify-center overflow-hidden p-1">
                      <img src={p.image} alt={p.name} className="h-full w-full object-contain mix-blend-multiply" />
                    </div>
                  </TableCell>

                  <TableCell className="px-4">
                    <div className="flex flex-col">
                      <Link 
                        to={`/products/${p.id}`} 
                        className="font-bold text-foreground hover:text-primary transition-colors text-base line-clamp-1"
                      >
                        {p.name}
                      </Link>
                      <span className="text-xs text-muted-foreground font-mono mt-0.5">CAS: {p.cas}</span>
                    </div>
                  </TableCell>

                  <TableCell>
                    <div className="flex flex-col gap-1">
                      <span className="font-medium text-sm">{p.formula}</span>
                      <span className="text-xs text-muted-foreground">Vendido por {p.unit}</span>
                    </div>
                  </TableCell>

                  <TableCell>
                    <Badge variant="secondary" className="font-normal bg-secondary/50 text-secondary-foreground hover:bg-secondary/70">
                      {p.purity}
                    </Badge>
                  </TableCell>

                  <TableCell className="text-right px-6">
                    <div className="flex items-center justify-end gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
                      <Button asChild size="sm" variant="outline" className="h-9 gap-2">
                        <Link to={`/products/${p.id}`}>
                          <Eye size={14} /> Detalhes
                        </Link>
                      </Button>
                      
                      <Button size="icon" variant="ghost" className="h-9 w-9 text-primary hover:text-primary hover:bg-primary/10">
                        <ShoppingCart size={16} />
                      </Button>
                    </div>
                  </TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-between pt-4 text-sm text-muted-foreground">
          <p>
            Mostrando {totalItems > 0 ? startIndex + 1 : 0} a {endIndex} de {totalItems} resultados
          </p>
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              className="h-8 w-8" 
              onClick={prevPage} 
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                className={`h-8 w-8 p-0 ${currentPage === page ? "bg-primary text-white border-primary" : ""}`}
                onClick={() => goToPage(page)}
              >
                {page}
              </Button>
            ))}

            <Button 
              variant="outline" 
              size="icon" 
              className="h-8 w-8" 
              onClick={nextPage} 
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}