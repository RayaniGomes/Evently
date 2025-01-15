import { ContainerTitulo } from "./styled";

interface TituloProps {
    titulo: string;
    border: string;
}

export default function Titulo({ titulo, border }: TituloProps) {
    return (
        <ContainerTitulo color={border}>
            <h1>
                {titulo} 
                <hr/>
            </h1>
        </ContainerTitulo>
    );
}