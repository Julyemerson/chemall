import { UploadCloud, Save, Loader2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useCreateProductMutation } from "@/hooks/use-products";

export function NewProduct() {
 const mutation = useCreateProductMutation();

  return (
    <div className="max-w-5xl mx-auto space-y-4">
      <h1 className="text-3xl font-black tracking-tight">Cadastro de Novo Produto</h1>
      
      <Card className="p-8 shadow-sm border-border bg-card">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          <div className="md:col-span-6 space-y-2">
            <Label htmlFor="name">Nome do Produto</Label>
            <Input id="name" placeholder="Ex: Ácido Sulfúrico" className="bg-secondary/10" />
          </div>

          <div className="md:col-span-3 space-y-2">
            <Label htmlFor="cas">Número CAS</Label>
            <Input id="cas" placeholder="Ex: 7664-93-9" />
          </div>
          <div className="md:col-span-3 space-y-2">
            <Label htmlFor="formula">Fórmula Química</Label>
            <Input id="formula" placeholder="Ex: H₂SO₄" />
          </div>

          <div className="md:col-span-2 space-y-2">
            <Label>Pureza/Grau</Label>
            <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:ring-2 ring-primary/20 outline-none transition-all">
              <option>P.A. (Para Análise)</option>
              <option>Técnico</option>
              <option>Farmacêutico</option>
            </select>
          </div>
          <div className="md:col-span-2 space-y-2">
            <Label>Preço por Unidade (R$)</Label>
            <Input type="number" placeholder="0,00" />
          </div>
          <div className="md:col-span-2 space-y-2">
            <Label>Unidade</Label>
            <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none">
              <option>Kg</option>
              <option>Litro</option>
            </select>
          </div>

          <div className="md:col-span-6 space-y-2">
            <Label>Descrição Técnica</Label>
            <textarea 
              className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:ring-2 ring-primary/20 outline-none"
              placeholder="Detalhes sobre manuseio, armazenamento e aplicações."
            />
          </div>

          <div className="md:col-span-6 space-y-4 pt-4">
            <UploadField label="Ficha de Segurança (SDS/MSDS)" />
            <UploadField label="Certificado de Análise (CoA)" />
          </div>
        </div>

        <div className="flex justify-end mt-2">
          <Button 
            size="lg" 
            className="px-10 gap-2 bg-primary hover:bg-primary/90 font-bold h-12"
            onClick={() => mutation.mutate({ name: "Produto Exemplo" })}
            disabled={mutation.isPending}
          >
            {mutation.isPending ?
            <>
                <Loader2 size={18} className="animate-spin" />
                Salvando...
              </> : <><Save size={18} /> Salvar Produto</>}
          </Button>
        </div>
      </Card>
    </div>
  );
}

function UploadField({ label }: { label: string }) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <div className="border-2 border-dashed border-muted-foreground/20 rounded-xl p-8 flex flex-col items-center justify-center gap-2 hover:bg-secondary/50 transition-all cursor-pointer bg-secondary/10 group">
        <UploadCloud className="text-muted-foreground group-hover:text-primary transition-colors" size={32} />
        <div className="text-center">
          <p className="text-sm font-medium">Clique para enviar <span className="text-muted-foreground font-normal text-xs">ou arraste e solte</span></p>
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">PDF, DOCX (MÁX. 10MB)</p>
        </div>
      </div>
    </div>
  );
}