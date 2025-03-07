import { TituloProps } from "@/interfaces";
import { ContainerTitulo } from "./styled";

export default function Titulo({ titulo, border }: TituloProps) {
  return (
    <ContainerTitulo color={border}>
      <h1>
        {titulo}
        <hr />
      </h1>
    </ContainerTitulo>
  );
}
