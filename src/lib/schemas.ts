import * as z from "zod";

const cnpjRegex = /^(\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}|\d{14})$/;

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const productSchema = z.object({
  name: z.string().min(1, "O nome do produto é obrigatório"),
  cas: z.string().min(1, "O Número CAS é obrigatório"),
  formula: z.string().min(1, "A fórmula química é obrigatória"),
  purity: z.string().min(1, "Selecione a pureza/grau"),
  price: z.coerce
    .number("Insira um valor numérico")
    .positive("O preço deve ser maior que zero"),
  unit: z.string().min(1, "Selecione a unidade"),
  description: z.string().min(1, "A descrição técnica é obrigatória"),
  sds: z.any().optional(),
  coa: z.any().optional(),
});

export type ProductFormData = z.infer<typeof productSchema>;

export const clientSchema = z.object({
  company: z.string().min(1, "O nome da empresa é obrigatório"),
  cnpj: z.string().regex(cnpjRegex, "CNPJ inválido (use 00.000.000/0001-00 ou apenas números)"),
  address: z.string().min(1, "O endereço é obrigatório"),
  city: z.string().min(1, "A cidade é obrigatória"),
  state: z.string().min(2, "Estado inválido (use a sigla, ex: SP)"),
  cep: z.string().min(8, "CEP inválido (mínimo 8 dígitos)"),
  phone: z.string().min(1, "O telefone é obrigatório"),
  email: z.string().regex(emailRegex, "E-mail corporativo inválido"),
  responsible: z.string().min(1, "O nome do responsável é obrigatório"),
});

export type ClientFormData = z.infer<typeof clientSchema>;

export const loginSchema = z.object({
  email: z.string()
    .min(1, "O e-mail é obrigatório")
    .regex(emailRegex, "Insira um e-mail válido (ex: nome@empresa.com)"),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
  role: z.enum(["admin", "client"], {
    errorMap: () => ({ message: "Selecione o tipo de acesso" }),
  }),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export const registerSchema = z.object({
  company: z.string().min(1, "O nome da empresa é obrigatório"),
  cnpj: z.string()
    .regex(cnpjRegex, "CNPJ inválido. Use o formato 00.000.000/0001-00"),
  email: z.string()
    .regex(emailRegex, "E-mail corporativo inválido"),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "As senhas não coincidem",
  path: ["confirmPassword"],
});

export type RegisterFormData = z.infer<typeof registerSchema>;