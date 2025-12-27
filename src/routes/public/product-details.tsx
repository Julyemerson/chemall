import { useParams, Link } from "@tanstack/react-router";
import { useProductDetailQuery } from "@/hooks/use-products";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import {
  Download,
  FileCheck,
  FileText,
  ShoppingCart,
} from "lucide-react";

export function ProductDetails() {
  const params = useParams({ strict: false });
  const { data: product, isLoading } = useProductDetailQuery(params.productId);

  if (isLoading)
    return (
      <div className="p-20 text-center font-bold">
        Carregando especificações...
      </div>
    );
  if (!product)
    return <div className="p-20 text-center">Produto não encontrado.</div>;

  return (
    <div className="max-w-[1600px] mx-auto px-8 py-8 space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <Card className="overflow-hidden border-none shadow-sm bg-white p-8 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-[500px] object-contain hover:scale-105 transition-transform duration-500"
          />
        </Card>

        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-black tracking-tight">
              {product.name}
            </h1>
            <div className="flex gap-3">
              <Badge
                variant="secondary"
                className="px-3 py-1 font-mono text-xs"
              >
                CAS: {product.cas}
              </Badge>
              <Badge
                variant="secondary"
                className="px-3 py-1 font-mono text-xs"
              >
                Fórmula: {product.formula}
              </Badge>
            </div>
          </div>

          <Tabs defaultValue="specs" className="w-full">
            <TabsList className="bg-transparent border-b rounded-none w-full justify-start h-auto p-0 gap-8">
              <TabsTrigger
                value="specs"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 py-3 font-bold"
              >
                Especificações
              </TabsTrigger>
              <TabsTrigger
                value="purchase"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 py-3 font-bold"
              >
                Opções de Compra
              </TabsTrigger>
            </TabsList>

            <TabsContent value="specs" className="pt-6">
              <Table>
                <TableBody>
                  <TableRow className="bg-secondary/10 font-bold text-[10px] uppercase tracking-widest text-muted-foreground border-none">
                    <TableCell>Propriedade</TableCell>
                    <TableCell>Valor</TableCell>
                  </TableRow>
                  {product.specs?.map((spec: any) => (
                    <TableRow
                      key={spec.label}
                      className="border-b last:border-0"
                    >
                      <TableCell className="font-bold py-4">
                        {spec.label}
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {spec.value}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="purchase" className="pt-6 space-y-4">
              <p className="text-muted-foreground">
                Disponível para cotação em volumes industriais.
              </p>
              <Button className="bg-primary hover:bg-primary/90 gap-2 font-bold h-12 px-8">
                <ShoppingCart size={18} /> Adicionar ao Carrinho
              </Button>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <section className="space-y-6 pt-12">
        <h2 className="text-2xl font-black">Documentação Técnica</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button
            variant="outline"
            className="h-24 w-full justify-between px-6 border-2 border-solid border-muted/20 hover:border-primary/50 hover:bg-primary/5 transition-all group relative overflow-hidden"
            onClick={() => void 0}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100/50 rounded-xl group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                <FileText size={28} strokeWidth={1.5} />
              </div>

              <div className="text-left">
                <p className="font-bold text-base text-foreground group-hover:text-primary transition-colors">
                  Ficha de Segurança (SDS)
                </p>
                <p className="text-xs text-muted-foreground font-medium">
                  Formato PDF • 2.4 MB
                </p>
              </div>
            </div>

            <div className="text-muted-foreground group-hover:text-primary transition-colors">
              <Download size={20} />
            </div>
          </Button>

          <Button
            variant="outline"
            className="h-24 w-full justify-between px-6 border-2 border-solid border-muted/20 hover:border-primary/50 hover:bg-primary/5 transition-all group relative overflow-hidden"
            onClick={() => void 0} // Exemplo de ação
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100/50 rounded-xl group-hover:bg-primary group-hover:text-white transition-colors text-green-700">
                <FileCheck size={28} strokeWidth={1.5} />
              </div>

              <div className="text-left">
                <p className="font-bold text-base text-foreground group-hover:text-primary transition-colors">
                  Certificado de Análise (CoA)
                </p>
                <p className="text-xs text-muted-foreground font-medium">
                  Lote Atual • Autenticado
                </p>
              </div>
            </div>

            <div className="text-muted-foreground group-hover:text-primary transition-colors">
              <Download size={20} />
            </div>
          </Button>
        </div>
      </section>
    </div>
  );
}
