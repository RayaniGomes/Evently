"use client";
import Banner from "@/(components)/banner";
import Card from "@/(components)/cardEvento";
import { useEvento } from "@/stores/eventoStore";
import { useEffect } from "react";
import { Section } from "./styled";
import { Container } from "react-bootstrap";

export default function Home() {
  const { eventos, getEventos } = useEvento();

  useEffect(() => {
    getEventos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <Banner />
      <Container as={Section}>
        {eventos.length > 0 ? (
          <>
            <h2>Eventos da semana</h2>
            <div className="cards">
              {eventos.slice(0, 4).map((evento) => (
                <Card
                  key={evento._id}
                  evento={evento}
                  bgColor="--azul-medio"
                  color="--branco"
                  hover="--drop-shadow-branco-hover"
                />
              ))}
            </div>
          </>
        ) : (
          <h2 className="text-center w-100 mt-5">Nenhum evento encontrado</h2>
        )}
      </Container>
    </main>
  );
}
