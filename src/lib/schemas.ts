import * as z from "zod";

export const productSchema = z.object({
  name: z.string().min(1, "O nome do produto é obrigatório"),
  cas: z.string().min(1, "O Número CAS é obrigatório"),
  formula: z.string().min(1, "A fórmula química é obrigatória"),
  purity: z.string().min(1, "Selecione a pureza/grau"),
  price: z.coerce
    .number({ message: "Insira um valor numérico" })
    .positive("O preço deve ser maior que zero"),
  unit: z.string().min(1, "Selecione a unidade"),
  description: z.string().min(1, "A descrição técnica é obrigatória"),
  sds: z.any().optional(),
  coa: z.any().optional(),
});

export type ProductFormData = z.infer<typeof productSchema>;

export const clientSchema = z.object({
  company: z.string().min(1, "O nome da empresa é obrigatório"),
  cnpj: z.string().min(14, "CNPJ inválido (mínimo 14 números)"),
  address: z.string().min(1, "O endereço é obrigatório"),
  city: z.string().min(1, "A cidade é obrigatória"),
  state: z.string().min(2, "Estado inválido"),
  cep: z.string().min(8, "CEP inválido"),
  phone: z.string().min(1, "O telefone é obrigatório"),
  email: z.string().email("Formato de e-mail inválido"),
  responsible: z.string().min(1, "O nome do responsável é obrigatório"),
});

export type ClientFormData = z.infer<typeof clientSchema>;