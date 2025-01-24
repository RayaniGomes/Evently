/**
 * Formata uma data ISO para o padrão brasileiro (dd-mm-yyyy)
 * 
 * @param {string} dataISO - Data no formato ISO
 * @returns {string} Data formatada no padrão brasileiro
*/

export const formatarData = (dataISO: string) => {
  const [ano, mes, dia] = dataISO.split("-");
  return `${dia}-${mes}-${ano}`;
};