import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { useProductsQuery } from "@/hooks/use-products";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CatalogSidebar } from "@/components/layout/catalog-sidebar";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

export function CatalogPage() {
  const { data: products } = useProductsQuery();

  return (
    <div className="max-w-[1600px] mx-auto px-8 py-8 flex gap-10">
      
      <aside className="w-80 shrink-0 sticky top-24 h-fit">
        <CatalogSidebar />
      </aside>
      
      <main className="flex-1 space-y-6">
        <header className="space-y-4">
          <h1 className="text-4xl font-black tracking-tight">Catálogo de Produtos</h1>
          
          <div className="relative max-w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Pesquisar por nome do produto ou número CAS" 
              className="pl-10 h-12 bg-white border-muted shadow-sm"
            />
          </div>
        </header>
        
        <div className="border rounded-xl bg-card shadow-sm overflow-hidden">
          <Table>
            <TableHeader className="bg-secondary/30">
              <TableRow className="hover:bg-transparent border-b">
                <TableHead className="py-4 px-6 font-bold text-xs uppercase tracking-wider">Nome do Produto</TableHead>
                <TableHead className="font-bold text-xs uppercase tracking-wider">Nº CAS</TableHead>
                <TableHead className="font-bold text-xs uppercase tracking-wider">Fórmula Química</TableHead>
                <TableHead className="font-bold text-xs uppercase tracking-wider">Pureza/Grau</TableHead>
                <TableHead className="font-bold text-xs uppercase tracking-wider text-right px-6">Preço</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products?.map((p) => (
                <TableRow key={p.cas} className="hover:bg-muted/30 transition-colors border-b last:border-0">
                  <TableCell className="py-5 px-6 font-bold text-foreground">
                    {p.name}
                  </TableCell>
                  <TableCell className="text-muted-foreground font-mono text-sm">
                    {p.cas}
                  </TableCell>
                  <TableCell className="text-foreground">
                    {p.formula}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {p.purity}
                  </TableCell>
                  <TableCell className="text-right px-6">
                    <Button 
                      variant="link" 
                      className="text-primary font-bold hover:no-underline hover:text-primary/80 p-0"
                    >
                      Solicitar Cotação
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Paginação baseada na imagem de referência */}
        <div className="flex items-center justify-between pt-4 text-sm text-muted-foreground">
          <p>Mostrando 1 a 5 de 25 resultados</p>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="h-8 w-8"><ChevronLeft className="h-4 w-4" /></Button>
            <Button variant="outline" size="sm" className="h-8 w-8 p-0 bg-primary text-white border-primary">1</Button>
            <Button variant="outline" size="sm" className="h-8 w-8 p-0">2</Button>
            <Button variant="outline" size="sm" className="h-8 w-8 p-0">3</Button>
            <span className="px-2">...</span>
            <Button variant="outline" size="sm" className="h-8 w-8 p-0">8</Button>
            <Button variant="outline" size="icon" className="h-8 w-8"><ChevronRight className="h-4 w-4" /></Button>
          </div>
        </div>
      </main>
    </div>
  );
}