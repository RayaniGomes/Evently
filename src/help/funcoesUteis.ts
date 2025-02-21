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
