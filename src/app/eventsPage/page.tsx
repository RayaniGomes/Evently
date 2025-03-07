"use client";
import CardEventos from "@/(components)/cards/cardEventos";
import { Filtro } from "@/(components)/filter";
import Titulo from "@/(components)/title";
import { useEvento } from "@/stores/eventStore";
import { useEffect, useState } from "react";
import { Pesquisar, Section } from "./styled";
import FiltroModal from "@/(components)/filterModal";
import Paginacao from "@/(components)/pagination";
import { Container } from "react-bootstrap";
import { FuncaoPaginacao } from "@/help/functionPagination";

export default function Eventos() {
  const { eventos, getEventos, filtrarEventos, isLoading } = useEvento();
  const [showModal, setShowModal] = useState(false);
  const eventosOrdenados = [...eventos].sort(
    (a, b) => new Date(a.data).getTime() - new Date(b.data).getTime()
  );

  const {
    paginatedEventos,
    totalPages,
    currentPage,
    handlePageClick,
    itemsPorPage,
  } = FuncaoPaginacao({ eventos: eventosOrdenados });

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    getEventos();
  }, []);

  if (eventos.length === 0) {
    return (
      <Container as={Section} style={{ height: "90vh" }}>
        <h2 className="text-center w-100 mt-5 mb-5">Carregando...</h2>
      </Container>
    );
  } else if (paginatedEventos.length === 0) {
    return (
      <Container as={Section} style={{ height: "90vh" }}>
        <h2 className="text-center w-100 mt-5 mb-5">
          Nenhum evento encontrado
        </h2>
      </Container>
    );
  }

  return (
    <>
      <Container style={{ marginTop: "8rem" }}>
        <Titulo titulo="Eventos" border="--azul-escuro" />
        <Pesquisar>
          <div className="form">
            <input
              type="search"
              placeholder="Pesquise pelo nome do seu evento"
              onChange={(e) => filtrarEventos({ nome: e.target.value })}
            />
            <button type="submit" className="bi bi-search" />
          </div>
          <button className="bi bi-funnel-fill filtro" onClick={toggleModal} />
          <FiltroModal showModal={showModal} toggleModal={toggleModal} />
        </Pesquisar>
        <Section>
          <Filtro />
          <div className="container-cards">
            <div className="cards">
              {paginatedEventos.map((evento) => (
                <CardEventos
                  key={evento._id}
                  evento={evento}
                  bgColor="--azul-medio"
                  color="--branco"
                  hover="--drop-shadow-branco-hover"
                />
              ))}
            </div>

            {eventos.length > itemsPorPage && (
              <Paginacao
                color="--azul-escuro"
                colorHover="--branco"
                currentPage={currentPage}
                totalPages={totalPages}
                handlePageClick={handlePageClick}
              />
            )}
          </div>
        </Section>
      </Container>
    </>
  );
}
