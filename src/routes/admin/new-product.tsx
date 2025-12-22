import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema, type ProductFormData } from "@/lib/schemas";
import { UploadCloud, Save, Loader2, FileText } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useCreateProductMutation } from "@/hooks/use-products";
import { useRef } from "react";

export function NewProduct() {
  const mutation = useCreateProductMutation();

  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "", cas: "", formula: "", purity: "", price: 0, unit: "Kg", description: ""
    }
  });

  // Observa os campos de arquivo para atualizar a interface visual
  const sdsFile = watch("sds");
  const coaFile = watch("coa");

  const onSubmit: SubmitHandler<ProductFormData> = (data) => {
    mutation.mutate(data, { onSuccess: () => reset() });
  };

  return (
    <div className="max-w-5xl mx-auto space-y-4">
      <h1 className="text-3xl font-black tracking-tight">Cadastro de Novo Produto</h1>
      
      <Card className="p-8 shadow-sm border-border bg-card">
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-6 gap-6">
          
          <div className="md:col-span-6 space-y-2">
            <Label htmlFor="name" className={errors.name ? "text-red-500" : ""}>Nome do Produto</Label>
            <Input 
              {...register("name")} 
              id="name" 
              placeholder="Ex: Ácido Sulfúrico" 
              className={`${errors.name ? "border-red-500" : ""} bg-secondary/10`} 
            />
          </div>

          <div className="md:col-span-3 space-y-2">
            <Label htmlFor="cas" className={errors.cas ? "text-red-500" : ""}>Número CAS</Label>
            <Input {...register("cas")} id="cas" placeholder="Ex: 7664-93-9" className={errors.cas ? "border-red-500" : ""} />
          </div>
          
          <div className="md:col-span-3 space-y-2">
            <Label htmlFor="formula" className={errors.formula ? "text-red-500" : ""}>Fórmula Química</Label>
            <Input {...register("formula")} id="formula" placeholder="Ex: H₂SO₄" className={errors.formula ? "border-red-500" : ""} />
          </div>

          <div className="md:col-span-2 space-y-2">
            <Label className={errors.purity ? "text-red-500" : ""}>Pureza/Grau</Label>
            <select 
              {...register("purity")}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:ring-2 ring-primary/20 outline-none transition-all"
            >
              <option value="">Selecione...</option>
              <option value="PA">P.A. (Para Análise)</option>
              <option value="Tecnico">Técnico</option>
              <option value="Farmaceutico">Farmacêutico</option>
            </select>
          </div>

          <div className="md:col-span-2 space-y-2">
            <Label className={errors.price ? "text-red-500" : ""}>Preço por Unidade (R$)</Label>
            <Input {...register("price")} type="number" step="0.01" placeholder="0,00" className={errors.price ? "border-red-500" : ""} />
          </div>

          <div className="md:col-span-2 space-y-2">
            <Label>Unidade</Label>
            <select {...register("unit")} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none">
              <option value="Kg">Kg</option>
              <option value="Litro">Litro</option>
            </select>
          </div>

          <div className="md:col-span-6 space-y-2">
            <Label className={errors.description ? "text-red-500" : ""}>Descrição Técnica</Label>
            <textarea 
              {...register("description")}
              className={`flex min-h-[120px] w-full rounded-md border ${errors.description ? "border-red-500" : "border-input"} bg-background px-3 py-2 text-sm focus:ring-2 ring-primary/20 outline-none`}
              placeholder="Detalles sobre manuseio, armazenamento e aplicações."
            />
          </div>

          {/* Área de Upload com os campos restaurados */}
          <div className="md:col-span-6 space-y-4 pt-4">
            <UploadField 
              label="Ficha de Segurança (SDS/MSDS)" 
              register={register("sds")} 
              selectedFile={sdsFile?.[0]?.name}
            />
            <UploadField 
              label="Certificado de Análise (CoA)" 
              register={register("coa")} 
              selectedFile={coaFile?.[0]?.name}
            />
          </div>
        </form>

        <div className="flex justify-end mt-8">
          <Button 
            size="lg" 
            className="px-10 gap-2 bg-primary hover:bg-primary/90 font-bold h-12 text-white shadow-md active:scale-95 transition-all"
            onClick={handleSubmit(onSubmit)}
            disabled={mutation.isPending}
          >
            {mutation.isPending ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Salvando...
              </>
            ) : (
              <>
                <Save size={18} />
                Salvar Produto
              </>
            )}
          </Button>
        </div>
      </Card>
    </div>
  );
}

interface UploadFieldProps {
  label: string;
  register: any;
  selectedFile?: string;
}

function UploadField({ label, register, selectedFile }: UploadFieldProps) {
  const hiddenInputRef = useRef<HTMLInputElement | null>(null);
  
  // Extrai a ref do react-hook-form para mesclar com a nossa ref local
  const { ref, ...rest } = register;

  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      
      <input 
        type="file" 
        className="hidden" 
        ref={(e) => {
          ref(e); 
          hiddenInputRef.current = e;
        }} 
        {...rest} 
      />
      <div 
        onClick={() => hiddenInputRef.current?.click()}
        className={`border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center gap-2 transition-all cursor-pointer bg-secondary/10 group
          ${selectedFile ? "border-primary bg-primary/5" : "border-muted-foreground/20 hover:bg-secondary/50"}`}
      >
        {selectedFile ? (
          <FileText className="text-primary animate-in zoom-in-50" size={32} />
        ) : (
          <UploadCloud className="text-muted-foreground group-hover:text-primary transition-colors" size={32} />
        )}
        
        <div className="text-center">
          {selectedFile ? (
            <p className="text-sm font-bold text-primary truncate max-w-[400px]">{selectedFile}</p>
          ) : (
            <>
              <p className="text-sm font-medium">Clique para enviar <span className="text-muted-foreground font-normal text-xs">ou arraste e solte</span></p>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">PDF, DOCX (MÁX. 10MB)</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}