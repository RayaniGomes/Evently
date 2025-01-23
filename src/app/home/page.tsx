import Banner from "@/(components)/banner";
import Card from "@/(components)/cardEvento";
import Footer from "@/(components)/footer";
import Navbar from "@/(components)/navbar";
import { useEvento } from "@/stores/eventoStore";
import { useEffect } from "react";
import { Main, Section } from "./styled";
import { Container } from "react-bootstrap";

export default function Home() {
  const { eventos, getEventos } = useEvento();

  useEffect(() => {
    getEventos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Main>
      <Navbar />
      <Banner />
      <Container className="container-home">
        <Section>
          <h2>Eventos da semana</h2>
          <div className="cards">
            {eventos.slice(0, 4).map((evento) => (
              <Card key={evento.id} evento={evento} />
            ))}
          </div>
        </Section>
      </Container>
      <Footer />
    </Main>
  );
}
