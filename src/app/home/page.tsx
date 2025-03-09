"use client";
import BannerHome from "@/(components)/bannerHome";
import { useEffect } from "react";
import { Section } from "./styled";
import { Container } from "react-bootstrap";
import { eventsWeek } from "@/utils/funtions";
import { useEvent } from "@/stores/eventStore";
import CardEvents from "@/(components)/cards/cardEvents";

export default function Home() {
  const { events, getEvents } = useEvent();

  useEffect(() => {
    getEvents();
  }, []);

  if (events.length === 0) {
    return (
      <Container as={Section} style={{ height: "90vh" }}>
        <h2 className="text-center w-100 mt-5 mb-5">Carregando...</h2>
      </Container>
    );
  }

  return (
    <>
      <BannerHome />
      <Container as={Section}>
        <h2>Eventos da semana</h2>
        <div className="cards">
          {eventsWeek(events).length > 0 ? (
            eventsWeek(events).map((event) => (
              <CardEvents
                key={event._id}
                event={event}
                bgColor="--blue-medium"
                color="--white"
                hover="--drop-shadow-white-hover"
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
