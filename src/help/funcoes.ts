/*************  ✨ Codeium Command ⭐  *************/
/**
 * Formata uma data ISO para o padrão brasileiro (dd-mm-yyyy)
 * @param {string} dataISO - Data no formato ISO
 * @returns {string} Data formatada no padrão brasileiro
 */
/******  3c0ee8f8-54ce-4426-bb2f-2431a404cdf9  *******/
export const formatarData = (dataISO: string) => {
  const [ano, mes, dia] = dataISO.split("-");
  return `${dia}-${mes}-${ano}`;
};

