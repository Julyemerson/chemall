import { AlertCircle, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCartQuery } from "@/hooks/use-cart";

export function CartPage() {
  const { data: cartItems, isLoading } = useCartQuery();

  const subtotal = cartItems?.reduce((acc, item) => acc + (item.price * item.qty), 0) || 0;

  if (isLoading) {
    return <div className="max-w-7xl mx-auto p-8 text-center font-bold">Carregando seu carrinho...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-8 space-y-8">
      <div className="flex justify-between items-end">
        <h1 className="text-4xl font-black tracking-tight">Carrinho de Compras</h1>
        <Button variant="outline">Continuar Comprando</Button>
      </div>

      <Card className="p-6 bg-red-50 border-red-100 flex gap-4">
        <AlertCircle className="w-6 h-6 text-red-600 shrink-0" />
        <div className="space-y-1">
          <p className="font-bold text-red-900 text-lg">Atenção</p>
          <p className="text-red-700 text-sm leading-relaxed">
            Alguns produtos neste carrinho são classificados como perigosos. Certifique-se de seguir todas as normas de segurança para manuseio e armazenamento.
          </p>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cartItems?.length ? (
            cartItems.map((item) => <CartItem key={item.id} {...item} />)
          ) : (
            <p className="text-muted-foreground py-10 text-center">Seu carrinho está vazio.</p>
          )}
        </div>

        <Card className="p-8 h-fit space-y-6 shadow-md border-muted/60">
          <h2 className="text-xl font-bold">Resumo do Pedido</h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-muted-foreground">
              <span>Subtotal</span>
              <span className="font-medium">R$ {subtotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Frete</span>
              <span className="italic">A calcular</span>
            </div>
            <Separator />
            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span className="text-primary">R$ {subtotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
            </div>
          </div>
          <Button className="w-full h-12 text-lg font-bold bg-primary hover:bg-primary/90 text-white">
            Finalizar Compra
          </Button>
        </Card>
      </div>
    </div>
  );
}

function CartItem({ name, cas, price, qty, img }: any) {
  return (
    <Card className="p-4 flex items-center justify-between hover:border-primary/20 transition-colors">
      <div className="flex items-center gap-4">
        <img src={img} className="w-16 h-16 rounded-md border" />
        <div>
          <p className="font-bold text-foreground">{name}</p>
          <p className="text-xs text-muted-foreground font-mono">{cas}</p>
        </div>
      </div>
      <div className="flex items-center gap-12">
        <div className="text-center">
          <p className="text-[10px] text-muted-foreground uppercase font-bold mb-1">Qtd</p>
          <input 
            type="number" 
            defaultValue={qty} 
            className="w-12 border rounded-md p-1 text-center text-sm focus:ring-1 ring-primary outline-none" 
          />
        </div>
        <div className="text-right w-24">
          <p className="text-[10px] text-muted-foreground uppercase font-bold mb-1">Total</p>
          <p className="font-bold text-foreground">R$ {(price * qty).toFixed(2)}</p>
        </div>
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-red-500 transition-colors">
          <Trash2 className="w-5 h-5" />
        </Button>
      </div>
    </Card>
  );
}