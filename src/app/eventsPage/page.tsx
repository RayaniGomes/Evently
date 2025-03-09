"use client";
import { Filter } from "@/(components)/filter";
import Title from "@/(components)/title";
import { useEvent } from "@/stores/eventStore";
import { useEffect, useState } from "react";
import { Search, Section } from "./styled";
import FilterModal from "@/(components)/filterModal";
import Pagination from "@/(components)/pagination";
import { Container } from "react-bootstrap";
import CardEvents from "@/(components)/cards/cardEvents";
import { SetPagination } from "@/utils/pagination";

export default function Events() {
  const { events, getEvents, filterEvents } = useEvent();
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const orderOfEvents = [...events].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  const {
    paginatedEvents,
    totalPages,
    currentPage,
    handlePageClick,
    itemsPorPage,
  } = SetPagination({ events: orderOfEvents });

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    setIsLoading(true);
    getEvents();
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <Container as={Section} style={{ height: "90vh" }}>
          <h2 className="text-center w-100 mt-5 mb-5">Carregando...</h2>
        </Container>
      ) : (
        <Container style={{ marginTop: "8rem" }}>
          <Title title="Eventos" border="--blue-dark" />
          <Search>
            <div className="form">
              <input
                type="search"
                placeholder="Pesquise pelo name do seu evento"
                onChange={(e) => filterEvents({ name: e.target.value })}
              />
              <button type="submit" className="bi bi-search" />
            </div>
            <button
              className="bi bi-funnel-fill filter"
              onClick={toggleModal}
            />
            <FilterModal showModal={showModal} toggleModal={toggleModal} />
          </Search>
          <Section>
            <Filter />
            <div className="container-cards">
              <div className="cards">
                {events.length > 0 && paginatedEvents.length > 0 ? (
                  paginatedEvents.map((event, index) => (
                    <CardEvents
                      event={event}
                      bgColor="--blue-medium"
                      color="--white"
                      hover="--drop-shadow-white-hover"
                    />
                  ))
                ) : (
                  <h2 className="text-center w-100 mt-5 mb-5">
                    Nenhum evento encontrado
                  </h2>
                )}
              </div>

              {events.length > itemsPorPage && (
                <Pagination
                  color="--blue-dark"
                  colorHover="--white"
                  currentPage={currentPage}
                  totalPages={totalPages}
                  handlePageClick={handlePageClick}
                />
              )}
            </div>
          </Section>
        </Container>
      )}
    </>
  );
}
