"use client";
import CardEventos from "@/(components)/cards/cardEventos";
import { Filtro } from "@/(components)/filtro";
import Titulo from "@/(components)/titulo";
import { useEvento } from "@/stores/eventoStore";
import { useEffect, useState } from "react";
import { Pesquisar, Section } from "./styled";
import FiltroModal from "@/(components)/filtroModal";
import Paginacao from "@/(components)/paginacao";
import { Container } from "react-bootstrap";
import { FuncaoPaginacao } from "@/help/funcaoPaginacao";

export default function Eventos() {
  const { eventos, getEventos, filtrarEventos } = useEvento();
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const eventosOrdenados = [...eventos].sort((a, b) => new Date(a.data).getTime() - new Date(b.data).getTime());
  
  const {
    paginatedEventos,
    totalPages,
    currentPage,
    handlePageClick,
    itemsPerPage,
  } = FuncaoPaginacao({eventos: eventosOrdenados});

  const toggleModal = () => {
    setShowModal(!showModal);
  };

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
              {eventos.length > 0 && paginatedEventos.length > 0 ? (
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
              ) : (
                <h2>Nenhum evento encontrado</h2>
              )}

              {eventos.length > itemsPerPage && (
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
      )}
    </>
  );
}
