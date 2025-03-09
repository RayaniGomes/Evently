"use client";
import Link from "next/link";
import { ContainerBanner, Slide } from "./styled";
import { useEvent } from "@/stores/eventStore";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { formatDate } from "@/utils/funtions";

export default function BannerHome() {
  const { events, getEvents } = useEvent();

  useEffect(() => {
    getEvents();
  }, []);

  const latestEvents = [...events]
    .sort((a, b) => {
      const dataA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
      const dataB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
      return dataB - dataA;
    })
    .slice(0, 4);

  return (
    <ContainerBanner>
      <Container>
        {latestEvents.length > 0 ? (
          latestEvents.map((event, index) => (
            <Slide
              key={event._id ?? index}
              image={event.image ?? "/sem-image.svg"}
            >
              <div className="image" />
              <div className="content">
                <h3>{event.name}</h3>
                <h4>{formatDate(event.date)}</h4>
                <h4>{event.location}</h4>
                <Link href={`/eventDetail/${event._id}`}>Detalhes</Link>
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
