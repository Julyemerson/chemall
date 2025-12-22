import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Save, Loader2 } from "lucide-react";
import { useCreateClientMutation } from "@/hooks/use-clients";

export function NewClient() {
  const clientMutation = useCreateClientMutation();

  const handleSave = () => {
    clientMutation.mutate({ 
      company: "Exemplo B2B Químico",
      cnpj: "00.000.000/0001-00" 
    });
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-black tracking-tight">Cadastro de Novo Cliente</h1>
        <p className="text-muted-foreground mt-1">Adicione novas parcerias B2B ao sistema Chemall.</p>
      </div>

      <Card className="p-8 shadow-sm border-border bg-card">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="company">Nome da Empresa</Label>
            <Input id="company" placeholder="Digite o nome da empresa" className="bg-secondary/10" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cnpj">CNPJ</Label>
            <Input id="cnpj" placeholder="00.000.000/0001-00" />
          </div>
          <div className="col-span-2 space-y-2">
            <Label htmlFor="address">Endereço Comercial</Label>
            <Input id="address" placeholder="Ex: Av. Paulista, 1000" />
          </div>
          
          <div className="grid grid-cols-3 col-span-2 gap-4">
            <div className="space-y-2 col-span-1"><Label>Cidade</Label><Input placeholder="São Paulo" /></div>
            <div className="space-y-2 col-span-1"><Label>Estado</Label><Input placeholder="SP" /></div>
            <div className="space-y-2 col-span-1"><Label>CEP</Label><Input placeholder="00000-000" /></div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Telefone</Label>
            <Input id="phone" placeholder="(11) 99999-9999" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="">E-mail de Contato</Label>
            <Input 
              id="email" 
              // className="border-red-500 focus-visible:ring-red-500 bg-red-50/5" 
              placeholder="contato@empresa.com" 
            />
            {/* <p className="text-[10px] text-red-500 font-medium italic">Formato de e-mail inválido.</p> */}
          </div>

          <div className="col-span-2 space-y-2">
            <Label htmlFor="responsible">Nome do Responsável</Label>
            <Input id="responsible" placeholder="Nome completo do contato principal" />
          </div>
        </div>

        <div className="flex justify-end mt-8">
          <Button 
            onClick={handleSave}
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
      </Card>
      
      {clientMutation.isSuccess && (
        <p className="text-center text-green-600 font-bold">Cliente cadastrado com sucesso!</p>
      )}
    </div>
  );
}