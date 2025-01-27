import Banner from "@/(components)/banner";
import Card from "@/(components)/cardEvento";
import Footer from "@/(components)/footer";
import Navbar from "@/(components)/navbar";
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
      <Navbar />
      <Banner />
        <Container as={Section}>
          <h2>Eventos da semana</h2>
          <div className="cards">
            {eventos.slice(0, 4).map((evento) => (
              <Card
                key={evento.id}
                evento={evento}
                bgColor="--azul-medio"
                color="--branco"
                hover="--drop-shadow-branco-hover"
              />
            ))}
          </div>
        </Container>
      <Footer />
    </main>
  );
}
