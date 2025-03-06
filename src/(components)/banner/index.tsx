"use client";
import Link from "next/link";
import { ContainerBanner, Slide } from "./styled";
import { useEvento } from "@/stores/eventoStore";
import { useEffect } from "react";
import { Container } from "react-bootstrap";

export default function Banner() {
  const { eventos, getEventos } = useEvento();

  useEffect(() => {
    getEventos();
  }, []);

  const ultimosEventos = [...eventos]
    .sort((a, b) => {
      const dataA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
      const dataB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
      return dataA - dataB;
    })
    .slice(0, 4);

  return (
    <ContainerBanner>
      <Container>
        {ultimosEventos.length > 0 ? (
          ultimosEventos.map((evento, index) => (
            <Slide
              key={evento._id ?? index}
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
          ))
        ) : (
          <h2 className="text-center w-100 mt-5">Nenhum evento encontrado</h2>
        )}
      </Container>
    </ContainerBanner>
  );
}
