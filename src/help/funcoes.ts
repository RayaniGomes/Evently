export const formatarData = (dataISO: string) => {
  const [ano, mes, dia] = dataISO.split("-");
  return `${dia}-${mes}-${ano}`;
};
