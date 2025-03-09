import { startOfWeek, endOfWeek, isWithinInterval, parseISO } from "date-fns";
import { Event } from "@/interfaces";


/**
 * Recebe uma string no formato "yyyy-MM-dd" e retorna uma string com o formato
 * de data padr o do Brasil ("dd/MM/yyyy").
 * @param date Uma string no formato "yyyy-MM-dd".
 * @returns Uma string com o formato de data padr o do Brasil.
 */
export const formatDate = (date: string) => {
  const formatDate = new Date(date + "T00:00:00Z");
  const formattedDate = formatDate.toLocaleDateString("pt-BR", {
    timeZone: "UTC", 
  });
  return formattedDate;
};


/**
 * Retorna o primeiro nome de uma string que representa um nome completo.
 * @param name Uma string que representa um nome completo.
 * @returns O primeiro nome da string informada.
 */
export const firstName = (name: string) => {
  return name.split(" ")[0];
};


/**
 * Filtra os eventos que são da semana atual.
 * @param events Uma lista de eventos.
 * @returns Uma lista com os eventos da semana atual.
 */
export const eventsWeek = (events: Event[]) => {
  const today = new Date();
  const startWeek = startOfWeek(today, { weekStartsOn: 1 });
  const endWeek = endOfWeek(today, { weekStartsOn: 1 });

  const eventsWeek = events.filter((event) => {
    const dateEvent = parseISO(event.date);
    return isWithinInterval(dateEvent, { start: startWeek, end: endWeek });
  });

  return eventsWeek;
};


/**
 * Função que abre uma janela de confirmação para cancelar um
 * item. Se a resposta for "Sim", chama a função deleteItem com o
 * id do item e, se signOut for informado, chama a função signOut.
 * @param id Id do item a ser cancelado.
 * @param tipo Tipo do item a ser cancelado (ex: "Evento", "Inscrição", "Usuario", etc.).
 * @param deleteItem Função que cancela o item.
 * @param signOut Função que faz o logout do usuario.
 */
export const handleDelete = (
  id: string,
  tipo: string,
  deleteItem: (id: string) => void,
  signOut?: () => void
) => {
  if (confirm(`Tem certeza que deseja cancelar ${tipo}?`)) {
    deleteItem(id)
    signOut?.();
  }
};
