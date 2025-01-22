import Link from "next/link";
import { CntainerBanner, Slide } from "./styled";
import { useEvento } from "@/stores/eventoStore";
import { useEffect } from "react";

export default function Banner() {
  const { eventos, getEventos: getEventos } = useEvento();

  useEffect(() => {
    getEventos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CntainerBanner>
      {eventos.slice(0, 4).map((evento) => {
        return (
          <Slide key={evento.id} imagem={evento.imagem}>
            <div className="imagem" />
            <div className="conteudo">
              <h3>{evento.nome}</h3>
              <h4>{evento.data}</h4>
              <h4>{evento.local}</h4>
              <Link href={`/detalhes-evento/${evento.id}`}>Detalhes</Link>
            </div>
          </Slide>
        );
      })}
    </CntainerBanner>
  );
}
