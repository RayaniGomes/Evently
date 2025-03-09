import { IndiceProps } from "@/interfaces";
import { ContainerIndice } from "./styled";

export default function Indice({ title, indice }: IndiceProps) {
  return (
    <ContainerIndice>
      <h2>{indice}</h2>
      <h5>{title}</h5>
    </ContainerIndice>
  );
}
