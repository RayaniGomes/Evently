/**
 * Formata uma data ISO para o padrão brasileiro (dd-mm-yyyy)
 **/

export const formatarData = (dataISO: string) => {
  const [ano, mes, dia] = dataISO.split("-");
  return `${dia}/${mes}/${ano}`;
};
