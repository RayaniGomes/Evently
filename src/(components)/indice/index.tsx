import { IndiceProps } from "@/interfaces";
import { ContainerIndice } from "./styled";

export default function Indice({ titulo, indice }: IndiceProps) {
  return (
    <ContainerIndice>
      <h2>{indice}</h2>
      <h5>{titulo}</h5>
    </ContainerIndice>
  );
}
