"use client";
import Link from "next/link";
import { ContainerBanner, Slide } from "./styled";
import { useEvento } from "@/stores/eventoStore";
import { useEffect } from "react";
import { Container } from "react-bootstrap";

export default function Banner() {
  const { eventos, getEventos: getEventos } = useEvento();

  useEffect(() => {
    getEventos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ContainerBanner>
      <Container>
        {eventos.slice(0, 4).map((evento) => {
          return (
            <Slide key={evento._id} imagem={evento.imagem}>
              <div className="imagem" />
              <div className="conteudo">
                <h3>{evento.name}</h3>
                <h4>{evento.data}</h4>
                <h4>{evento.local}</h4>
                <Link href={`/detalhes-evento/${evento._id}`}>Detalhes</Link>
              </div>
            </Slide>
          );
        })}
      </Container>
    </ContainerBanner>
  );
}
