import { z } from "zod";

export const valid_state = [
  "AC",
  "AL",
  "AP",
  "AM",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "SE",
  "TO",
];

const nonEmptyString = (fieldName: string) =>
  z
    .string()
    .min(1, `${fieldName} é obrigatório.`)
    .refine((value) => !/^\s+$/g.test(value), {
      message: `${fieldName} não pode conter apenas espaços em branco.`,
    });

export const eventSchema = z.object({
  name: nonEmptyString("O nome do evento"),
  date: z
    .string()
    .refine((date) => !isNaN(Date.parse(date)), {
      message: "A data de nascimento deve ser uma data válida.",
    })
    .refine((date) => new Date(date) >= new Date(), {
      message: "Você não pode cadastrar um evento no passado.",
    }),
  time: z
    .string()
    .regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, {
      message: "Formato de hora inválido. Use o formato HH:MM.",
    })
    .refine(
      (value) => {
        const [hour, minute] = value.split(":").map(Number);
        return hour >= 0 && hour <= 23 && minute >= 0 && minute <= 59;
      },
      { message: "Hora inválida. Verifique os valores de hora e minuto." }
    ),
  maxPeople: z
    .number()
    .int("A quantidade de pessoas deve ser um número inteiro.")
    .refine((value) => value > 0, {
      message: "A quantidade de pessoas deve ser maior que zero.",
    }),

  category: nonEmptyString("A categoria do evento"),
  image: z.string().url("A URL fornecida não é válida."),
  description: z.string().optional(),
  location: nonEmptyString("O location do evento"),
  address: nonEmptyString("O endereço do evento"),
  number: nonEmptyString("O número do endereço do evento"),
  neighborhood: z.string(),
  city: nonEmptyString("A cidade do evento"),
  state: z.string().refine((value) => valid_state.includes(value), {
    message: "UF inválida. Insira uma sigla de state brasileiro válida.",
  }),
  complement: z
    .string()
    .max(255, { message: "O complemento pode ter no máximo 255 caracteres." }),
});

export type createDataEvent = z.infer<typeof eventSchema>;
