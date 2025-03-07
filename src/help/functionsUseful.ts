import { startOfWeek, endOfWeek, isWithinInterval, parseISO } from "date-fns";
import { Evento } from "@/interfaces";

/**
 * Formata uma data para o padrão brasileiro (dd-mm-yyyy)
 **/

export const formatarData = (data: string) => {
  const dataFormatada = new Date(data);
  return dataFormatada.toLocaleDateString("pt-BR");
};

/**
 * Retorna o primeiro nome de uma string de nomes.
**/
export const primeiroNome = (nome: string) => {
  return nome.split(" ")[0];
}


/**
 * Filtra e retorna eventos que ocorrem durante a semana atual.
**/
export const eventosDaSemana = (eventos: Evento[]) => {
  const hoje = new Date();
  const inicioSemana = startOfWeek(hoje, { weekStartsOn: 1 });
  const fimSemana = endOfWeek(hoje, { weekStartsOn: 1 }); 
  
  const eventosDaSemana = eventos.filter((evento) => {
    const dataEvento = parseISO(evento.data); 
    return isWithinInterval(dataEvento, { start: inicioSemana, end: fimSemana });
  });

  return eventosDaSemana;
}