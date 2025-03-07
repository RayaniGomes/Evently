import { z } from "zod";

export const usuarioSchema = z.object({
  nome: z
    .string()
    .nonempty({ message: "O nome é obrigatório" })
    .refine((value) => !/^\s+$/g.test(value), {
      message: "O nome não pode ser apenas espaços em branco",
    }),
  dataNascimento: z
    .string()
    .refine((data) => !isNaN(Date.parse(data)), {
      message: "A data de nascimento deve ser uma data válida.",
    })
    .refine(
      (data) => {
        const birthDate = new Date(data);
        const today = new Date();
        return birthDate <= today;
      },
      {
        message: "A data de nascimento não pode ser maior que o dia atual.",
      }
    ),
  email: z.string().email("O e-mail é obrigatório"),
  senha: z
    .string()
    .min(6, "A senha deve conter no mínimo 6 caracteres.")
    .refine((value) => !/^\s+$/g.test(value), {
      message: "A senha não pode conter apenas espaços em branco.",
    }),
  criador: z.string(),
  fotoPerfil: z.string().optional(),
});

export type createDataUsuario = z.infer<typeof usuarioSchema>;
