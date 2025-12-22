import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { clientSchema, type ClientFormData } from "@/lib/schemas";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Save, Loader2 } from "lucide-react";
import { useCreateClientMutation } from "@/hooks/use-clients";

export function NewClient() {
  const clientMutation = useCreateClientMutation();

  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset 
  } = useForm<ClientFormData>({
    resolver: zodResolver(clientSchema),
    defaultValues: {
      company: "", cnpj: "", address: "", city: "", state: "", cep: "", phone: "", email: "", responsible: ""
    }
  });

  const onSubmit: SubmitHandler<ClientFormData> = (data) => {
    clientMutation.mutate(data, { 
      onSuccess: () => reset() 
    });
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-black tracking-tight text-foreground">Cadastro de Novo Cliente</h1>
        <p className="text-muted-foreground mt-1">Adicione todas as informações do cliente no sistema Chemall.</p>
      </div>

      <Card className="p-8 shadow-sm border-border bg-card">
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="space-y-2">
            <Label htmlFor="company" className={errors.company ? "text-red-500" : ""}>Nome da Empresa</Label>
            <Input 
              {...register("company")}
              id="company" 
              placeholder="Digite o nome da empresa" 
              className={`${errors.company ? "border-red-500" : ""} bg-secondary/10`} 
            />
            {errors.company && <span className="text-[10px] text-red-500 font-bold uppercase">{errors.company.message}</span>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="cnpj" className={errors.cnpj ? "text-red-500" : ""}>CNPJ</Label>
            <Input 
              {...register("cnpj")}
              id="cnpj" 
              placeholder="00.000.000/0001-00" 
              className={errors.cnpj ? "border-red-500" : ""}
            />
            {errors.cnpj && <span className="text-[10px] text-red-500 font-bold uppercase">{errors.cnpj.message}</span>}
          </div>

          <div className="col-span-2 space-y-2">
            <Label htmlFor="address" className={errors.address ? "text-red-500" : ""}>Endereço Comercial</Label>
            <Input 
              {...register("address")}
              id="address" 
              placeholder="Ex: Av. Paulista, 1000" 
              className={errors.address ? "border-red-500" : ""}
            />
            {errors.address && <span className="text-[10px] text-red-500 font-bold uppercase">{errors.address.message}</span>}
          </div>
          
          <div className="grid grid-cols-3 col-span-2 gap-4">
            <div className="space-y-2">
              <Label className={errors.city ? "text-red-500" : ""}>Cidade</Label>
              <Input {...register("city")} placeholder="São Paulo" className={errors.city ? "border-red-500" : ""} />
              {errors.city && <span className="text-[10px] text-red-500 font-bold uppercase">{errors.city.message}</span>}
            </div>
            <div className="space-y-2">
              <Label className={errors.state ? "text-red-500" : ""}>Estado</Label>
              <Input {...register("state")} placeholder="SP" className={errors.state ? "border-red-500" : ""} />
            </div>
            <div className="space-y-2">
              <Label className={errors.cep ? "text-red-500" : ""}>CEP</Label>
              <Input {...register("cep")} placeholder="00000-000" className={errors.cep ? "border-red-500" : ""} />
            </div>
          </div>


          <div className="space-y-2">
            <Label htmlFor="phone" className={errors.phone ? "text-red-500" : ""}>Telefone</Label>
            <Input {...register("phone")} id="phone" placeholder="(11) 99999-9999" className={errors.phone ? "border-red-500" : ""} />
            {errors.phone && <span className="text-[10px] text-red-500 font-bold uppercase">{errors.phone.message}</span>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className={errors.email ? "text-red-500 font-semibold" : ""}>E-mail de Contato</Label>
            <Input 
              {...register("email")}
              id="email" 
              placeholder="contato@empresa.com" 
              className={errors.email ? "border-red-500 focus-visible:ring-red-500 bg-red-50/5" : ""}
            />
            {errors.email && <p className="text-[10px] text-red-500 font-medium italic">{errors.email.message}</p>}
          </div>

          <div className="col-span-2 space-y-2">
            <Label htmlFor="responsible" className={errors.responsible ? "text-red-500" : ""}>Nome do Responsável</Label>
            <Input 
              {...register("responsible")}
              id="responsible" 
              placeholder="Nome completo do contato principal" 
              className={errors.responsible ? "border-red-500" : ""}
            />
            {errors.responsible && <span className="text-[10px] text-red-500 font-bold uppercase">{errors.responsible.message}</span>}
          </div>

          <div className="col-span-2 flex justify-end mt-4">
            <Button 
              type="submit"
              disabled={clientMutation.isPending}
              className="bg-primary hover:bg-primary/90 px-10 h-12 font-bold gap-2 text-white shadow-md transition-all active:scale-95"
            >
              {clientMutation.isPending ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Salvando...
                </>
              ) : (
                <>
                  <Save size={18} />
                  Salvar Cliente
                </>
              )}
            </Button>
          </div>
        </form>
      </Card>
      
      {clientMutation.isSuccess && (
        <p className="text-center text-green-600 font-bold animate-in fade-in slide-in-from-bottom-2">
          Cliente cadastrado com sucesso!
        </p>
      )}
    </div>
  );
}