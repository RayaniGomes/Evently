
import { eventos } from "@/help/eventos";
// import Image from "next/image";
import Link from "next/link";
import { CntainerBanner, Slide } from "./styled";

export default function Banner() {
    return (
        <CntainerBanner>
            {eventos.slice(0, 4).map((evento, index) => (
                <Slide key={index} imagem={evento.imagem}>
                    <div className="imagem"/>
                    <div className="conteudo">
                        <h3>{evento.nome}</h3>
                        <h4>{evento.data}</h4>
                        <h4>{evento.local}</h4>
                        <Link href={`/detalhes-evento/${evento.id}`}>Detalhes</Link>
                    </div>
                </Slide>
            ))}
        </CntainerBanner>
    );
}
