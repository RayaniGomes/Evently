"use client";
import Banner from "@/(components)/banner";
import CardEventos from "@/(components)/cards/cardEventos";
import { useEvento } from "@/stores/eventoStore";
import { useEffect, useState } from "react";
import { Section } from "./styled";
import { Container } from "react-bootstrap";
import { eventosDaSemana } from "@/help/funcoesUteis";

export default function Home() {
  const { eventos, getEventos } = useEvento();
  const [isLoading, setIsLoading] = useState(true);
  
  const carregarEventos = async () => {
    setIsLoading(true);
    await getEventos();
    setIsLoading(false);
  };

  useEffect(() => {
    carregarEventos();
  }, []);

  return (
    <>
      {isLoading ? (
        <Container as={Section} style={{ height: "90vh" }}>
          <h2 className="text-center w-100 mt-5 mb-5">Carregando...</h2>
        </Container>
      ) : (
        <>
          <Banner />
          <Container as={Section}>
            {eventos.length > 0 ? (
              <>
                <h2>Eventos da semana</h2>
                <div className="cards">
                  {eventosDaSemana(eventos).map((evento) => (
                    <CardEventos
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
              <h2 className="text-center w-100 mt-5">
                Nenhum evento encontrado
              </h2>
            )}
          </Container>
        </>
      )}
    </>
  );
}
