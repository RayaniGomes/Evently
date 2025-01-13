import { ContainerIndice } from "./styled";

interface IndiceProps {
    titulo: string;
    indice: number
}
export default function Indice({ titulo, indice }: IndiceProps) {
    return (
        <ContainerIndice>
            <h2>{indice}</h2>
            <h5>{titulo}</h5>
        </ContainerIndice>
    );
}