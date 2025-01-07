import { useEvento } from "@/stores/eventoStore";
import Image from "next/image";
import { useEffect } from "react";

export default function Card() {
    const { eventos, getEventos } = useEvento();

    useEffect(() => {
        getEventos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            {eventos.map((evento) => {
                return (
                    <div key={evento.id}>
                        <Image 
                            src={evento.imagem} 
                            alt={evento.nome} 
                            width={200}
                            height={200}
                        />
                        <div>
                            <h6>{evento.nome}</h6>
                            <p>{evento.data}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}