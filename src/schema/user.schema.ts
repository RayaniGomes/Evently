import { z } from "zod";

export const userSchema = z.object({
  name: z
    .string()
    .nonempty({ message: "O name é obrigatório" })
    .refine((value) => !/^\s+$/g.test(value), {
      message: "O nome não pode ser apenas espaços em branco",
    }),
  dateOfBirth: z
    .string()
    .refine((date) => !isNaN(Date.parse(date)), {
      message: "A data de nascimento deve ser uma data válida.",
    })
    .refine(
      (date) => {
        const birthDate = new Date(date);
        const today = new Date();
        return birthDate <= today;
      },
      {
        message: "A data de nascimento não pode ser maior que o dia atual.",
      }
    ),
  email: z.string().email("O e-mail é obrigatório"),
  password: z
    .string()
    .min(6, "A senha deve conter no mínimo 6 caracteres.")
    .refine((value) => !/^\s+$/g.test(value), {
      message: "A senha não pode conter apenas espaços em branco.",
    }),
  creator: z.string().optional(),
  profilePhoto: z.string().optional(),
});

export type createDataUser = z.infer<typeof userSchema>;
