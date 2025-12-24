import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormData } from "@/lib/schemas";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Logo } from "@/components/ui/logo";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link, useNavigate } from "@tanstack/react-router"; 
import { Loader2, ShieldCheck, UserCircle } from "lucide-react";
import { useLoginMutation } from "@/hooks/use-auth";

export function LoginPage() {
  const navigate = useNavigate();
  const loginMutation = useLoginMutation();

  const { register, handleSubmit, setValue, watch, reset, formState: { errors, isSubmitting } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: { role: "client", email: "", password: "" }
  });

  const selectedRole = watch("role");

  const onSubmit = async (data: LoginFormData) => {
    loginMutation.mutate(data, {
      onSuccess: () => {
        navigate({ to: selectedRole === "admin" ? "/admin/" : "/" });
        reset()
      }
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-secondary/10">
      <div className="mb-4 animate-in fade-in zoom-in duration-500">
        <Logo className="h-12" />
      </div>

      <Card className="w-full max-w-md p-6 shadow-2xl border-border bg-card relative overflow-hidden">
        {selectedRole === "admin" && (
          <div className="absolute top-0 right-0 p-2 bg-primary/10 rounded-bl-xl">
            <ShieldCheck size={18} className="text-primary" />
          </div>
        )}

        <div className="space-y-2 mb-6 text-center">
          <h1 className="text-2xl font-black tracking-tight uppercase">Portal de Acesso</h1>
          <p className="text-sm text-muted-foreground italic">Bem vindo de volta</p>
        </div>

        <Tabs 
          defaultValue="client" 
          className="mb-6" 
          onValueChange={(v) => setValue("role", v as "admin" | "client")}
        >
          <TabsList className="grid w-full grid-cols-2 h-12">
            <TabsTrigger value="client" className="gap-2 font-bold">
              <UserCircle size={16} /> Cliente
            </TabsTrigger>
            <TabsTrigger value="admin" className="gap-2 font-bold">
              <ShieldCheck size={16} /> Admin
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label className={errors.email ? "text-red-500 font-bold" : "font-semibold"}>E-mail</Label>
            <Input 
              {...register("email")} 
              placeholder="exemplo@empresa.com" 
              className={`${errors.email ? "border-red-500" : ""} bg-secondary/5`}
            />
            {errors.email && <span className="text-[10px] text-red-500 font-bold uppercase tracking-wider">{errors.email.message}</span>}
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label className={errors.password ? "text-red-500 font-bold" : "font-semibold"}>Senha</Label>
              <button type="button" className="text-[10px] text-primary font-black uppercase hover:underline">Recuperar</button>
            </div>
            <Input 
              {...register("password")} 
              type="password" 
              placeholder="Digite sua senha" 
              className={errors.password ? "border-red-500" : ""}
            />
          </div>

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-black text-lg transition-all active:scale-95 shadow-lg"
          >
            {isSubmitting ? <Loader2 className="animate-spin" /> : "ACESSAR SISTEMA"}
          </Button>
        </form>

        <div className="mt-2 text-center text-sm">
          <span className="text-muted-foreground">Não possui conta? </span>
          <Link 
            to="/register" 
            className="text-primary font-black hover:underline underline-offset-4 transition-colors"
          >
            Fazer Registro
          </Link>
        </div>

        <div className="mt-2 pt-2 border-t text-center text-xs">
          <span className="text-muted-foreground uppercase tracking-widest">Acesso Restrito</span>
          <p className="mt-2 text-muted-foreground">
            Novas contas devem ser solicitadas diretamente ao <br />
            <span className="text-primary font-bold cursor-pointer hover:underline">adm@chemall.com</span>
          </p>
        </div>
      </Card>
    </div>
  );
}