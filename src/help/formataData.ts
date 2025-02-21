/**
 * Formata uma data ISO para o padrão brasileiro (dd-mm-yyyy)
 **/

export const formatarData = (data: string) => {
  const dataFormatada = new Date(data);
  return dataFormatada.toLocaleDateString("pt-BR");
};
