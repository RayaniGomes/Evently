import { z } from "zod";

export const loginSchema = z
  .object({
    email: z.string().email("O e-mail é obrigatório"),
    senha: z
      .string()
      .min(6, "A senha deve conter no mínimo 6 caracteres.")
      .refine((value) => !/^\s+$/g.test(value), {
        message: "A senha não pode conter apenas espaços em branco.",
      }),
    criador: z.boolean().optional(),
  })

export type createDataLogin = z.infer<typeof loginSchema>;
