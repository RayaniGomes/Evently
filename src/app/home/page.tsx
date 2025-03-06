"use client";
import Banner from "@/(components)/banner";
import CardEventos from "@/(components)/cards/cardEventos";
import { useEvento } from "@/stores/eventoStore";
import { useEffect } from "react";
import { Section } from "./styled";
import { Container } from "react-bootstrap";
import { eventosDaSemana } from "@/help/funcoesUteis";

export default function Home() {
  const { eventos, getEventos } = useEvento();

  useEffect(() => {
    getEventos();
  }, []);

  if (eventos.length === 0) {
    return (
      <Container as={Section} style={{ height: "90vh" }}>
        <h2 className="text-center w-100 mt-5 mb-5">Carregando...</h2>
      </Container>
    );
  }

  return (
    <>
      <Banner />
      <Container as={Section}>
        <h2>Eventos da semana</h2>
        <div className="cards">
          {eventosDaSemana(eventos).length > 0 ? (
            eventosDaSemana(eventos).map((evento) => (
              <CardEventos
                key={evento._id}
                evento={evento}
                bgColor="--azul-medio"
                color="--branco"
                hover="--drop-shadow-branco-hover"
              />
            ))
          ) : (
            <h4 className="text-center w-100 mt-5 mb-5">
              Não há eventos nesta semana
            </h4>
          )}
        </div>
      </Container>
    </>
  );
}
