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
        {eventos.length > 0 ? (
          eventos.slice(0, 4).map((evento) => {
            return (
              <Slide
                key={evento._id}
                imagem={evento.imagem ?? "/sem-imagem.svg"}
              >
                <div className="imagem" />
                <div className="conteudo">
                  <h3>{evento.nome}</h3>
                  <h4>{evento.data}</h4>
                  <h4>{evento.local}</h4>
                  <Link href={`/detalhes-evento/${evento._id}`}>Detalhes</Link>
                </div>
              </Slide>
            );
          })
        ) : (
          <h2 className="text-center w-100 mt-5">Nenhum evento encontrado</h2>
        )}
      </Container>
    </ContainerBanner>
  );
}
