import { z } from "zod";

export const UFS_VALIDAS = [
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

export const eventoSchema = z.object({
  nomeEvento: nonEmptyString("O nome do evento"),
  dataEvento: z
    .string()
    .refine((data) => !isNaN(Date.parse(data)), {
      message: "A data de nascimento deve ser uma data válida.",
    })
    .refine((data) => new Date(data) >= new Date(), {
      message: "Você não pode cadastrar um evento no passado.",
    }),
  horario: z
    .string()
    .regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, {
      message: "Formato de hora inválido. Use o formato HH:MM.",
    })
    .refine(
      (value) => {
        const [hora, minuto] = value.split(":").map(Number);
        return hora >= 0 && hora <= 23 && minuto >= 0 && minuto <= 59;
      },
      { message: "Hora inválida. Verifique os valores de hora e minuto." }
    ),
  qtdPessoas: z
    .string()
    .transform((value) => Number(value))
    .refine((value) => !isNaN(value), {
      message: "A quantidade de pessoas deve ser um número válido.",
    })
    .refine((value) => value > 0, {
      message: "A quantidade de pessoas deve ser maior que zero.",
    }),
  tipoEvento: nonEmptyString("O tipo do evento"),
  linkImagem: z.string().url("A URL fornecida não é válida."),
  descricao: nonEmptyString("A descrição do evento"),
  local: nonEmptyString("O local do evento"),
  endereco: nonEmptyString("O endereço do evento"),
  numero: z
    .string()
    .transform((value) => Number(value))
    .refine((value) => !isNaN(value), {
      message: "O numero deve ser um número válido.",
    })
    .refine((value) => value > 0, {
      message: "O numero deve ser maior que zero.",
    })
    .refine((value) => Number.isInteger(value), {
      message: "O numero deve ser um inteiro.",
    }),
  bairro: nonEmptyString("O bairro do evento"),
  cidade: nonEmptyString("A cidade do evento"),
  uf: z
    .string()
    .length(2, { message: "A UF deve ter exatamente 2 caracteres." })
    .refine((value) => UFS_VALIDAS.includes(value), {
      message: "UF inválida. Insira uma sigla de estado brasileiro válida.",
    }),
  complemento: z
    .string()
    .max(255, { message: "O complemento pode ter no máximo 255 caracteres." }),
});

export type createDataEvento = z.infer<typeof eventoSchema>;