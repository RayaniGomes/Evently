import { useEvento } from "@/stores/eventoStore";
import Image from "next/image";
import { useEffect } from "react";
import { CardEvento } from "./styled";
import Link from "next/link";
import Compartilhar from "../compartinhar";

export default function Card() {
    const { eventos, getEventos } = useEvento();

    useEffect(() => {
        getEventos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="d-flex m-5 flex-wrap justify-content-center">
            
            {eventos.map((evento) => {
                return (
                    <CardEvento key={evento.id}>
                        <Image
                            src={evento.imagem}
                            alt={evento.nome}
                            width={200}
                            height={218}
                        />
                        <div className="box">
                            <div>
                                <div className="d-flex justify-content-between">
                                    <h6>{evento.nome}</h6>
                                    
                                    <Compartilhar />
                                </div>
                                <p>{evento.local}</p>
                                <p>{evento.cidade} / {evento.uf}</p>
                                <h6>{evento.data}</h6>
                            </div>

                            <div className="botoes">
                                <button>Inscreva-se</button>
                                <Link href={`/detalhes-evento/${evento.id}`}>Detalhes</Link>
                            </div>
                        </div>
                    </CardEvento>
                )
            })}
        </div>
    )
}