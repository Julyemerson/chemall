import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, type RegisterFormData } from "@/lib/schemas";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Logo } from "@/components/ui/logo";
import { Link } from "@tanstack/react-router";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useRegisterMutation } from "@/hooks/use-auth";

export function RegisterPage() {
  const registerMutation = useRegisterMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    registerMutation.mutate(data, {
      onSuccess: () => reset(),
    });
  };

  return (
    <div className="min-h-screen py-5 flex flex-col items-center justify-center bg-secondary/10">
      <div className="mb-6 animate-in fade-in zoom-in duration-500">
        <Logo className="h-10" />
      </div>

      <Card className="w-full max-w-xl p-10 shadow-xl border-border bg-card">
        <div className="space-y-2 mb-8">
          <h1 className="text-3xl font-black tracking-tight">Criar Conta</h1>
          <p className="text-muted-foreground">
            Soluções técnicas e suprimentos químicos para a sua indústria.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div className="space-y-2 col-span-2">
            <Label>Nome da Empresa</Label>
            <Input
              {...register("company")}
              placeholder="Razão Social"
              className={errors.company ? "border-red-500" : "bg-secondary/5"}
            />
          </div>

          <div className="space-y-2">
            <Label className={errors.cnpj ? "text-red-500" : ""}>CNPJ</Label>
            <Input
              {...register("cnpj")}
              placeholder="00.000.000/0000-00"
              className={errors.cnpj ? "border-red-500" : ""}
            />
            {errors.cnpj && (
              <span className="text-[10px] text-red-500 font-bold uppercase tracking-wider">
                {errors.cnpj.message}
              </span>
            )}
          </div>

          <div className="space-y-2">
            <Label className={errors.email ? "text-red-500" : ""}>
              E-mail
            </Label>
            <Input
              {...register("email")}
              placeholder="contato@empresa.com"
              className={errors.email ? "border-red-500" : ""}
            />
            {errors.email && (
              <span className="text-[10px] text-red-500 font-bold uppercase tracking-wider">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="space-y-2">
            <Label>Senha</Label>
            <Input
              {...register("password")}
              type="password"
              placeholder="Digite sua senha"
              className={errors.password ? "border-red-500" : ""}
            />
            {errors.password && (
              <span className="text-[10px] text-red-500 font-bold uppercase tracking-wider">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="space-y-2">
            <Label>Confirmar Senha</Label>
            <Input
              {...register("confirmPassword")}
              type="password"
              placeholder="Confirme sua senha"
              className={errors.confirmPassword ? "border-red-500" : ""}
            />
            {errors.confirmPassword && (
              <span className="text-[10px] text-red-500 font-bold uppercase tracking-wider">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>

          <div className="col-span-2 space-y-4 pt-4">
            <div className="flex items-start gap-2 text-xs text-muted-foreground">
              <CheckCircle2 size={14} className="mt-0.5 text-primary" />
              <p>
                Ao se cadastrar, você concorda com nossos termos de uso e
                políticas de manuseio de dados químicos.
              </p>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold text-lg"
            >
              {isSubmitting ? (
                <Loader2 className="animate-spin" />
              ) : (
                "Finalizar Cadastro"
              )}
            </Button>
          </div>
        </form>

        <p className="mt-1 text-center text-sm text-muted-foreground">
          Já possui conta?{" "}
          <Link to="/login" className="text-primary font-black">
            Fazer Login
          </Link>
        </p>
      </Card>
    </div>
  );
}
