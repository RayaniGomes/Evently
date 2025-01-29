"use client";
import Card from "@/(components)/cardEvento";
import { Filtro } from "@/(components)/filtro";
import Navbar from "@/(components)/navbar";
import Titulo from "@/(components)/titulo";
import { useEvento } from "@/stores/eventoStore";
import { useEffect, useState } from "react";
import { Pesquisar, Section } from "./styled";
import FiltroModal from "@/(components)/filtroModal";
import Footer from "@/(components)/footer";
import Paginacao from "@/(components)/paginacao";
import { Container } from "react-bootstrap";
import FuncaoPaginacao from "@/help/funcaoPaginacao";

export default function Eventos() {
  const { eventos, getEventos, filtroNome } = useEvento();
  const [showModal, setShowModal] = useState(false);
  const {
    paginatedEventos,
    totalPages,
    currentPage,
    handlePageClick,
    itemsPerPage,
  } = FuncaoPaginacao();
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    getEventos();
    console.log(paginatedEventos);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <Navbar />
      <Container style={{ marginTop: "8rem" }}>
        <Titulo titulo="Eventos" border="--azul-escuro" />
        <Pesquisar>
          <div className="form">
            <input
              type="search"
              placeholder="Pesquise pelo nome do seu evento"
              onChange={(e) => filtroNome(e.target.value)}
            />
            <button type="submit" className="bi bi-search" />
          </div>
          <button className="bi bi-funnel-fill filtro" onClick={toggleModal} />
          <FiltroModal showModal={showModal} toggleModal={toggleModal} />
        </Pesquisar>
        <Section>
          <Filtro />
          <div className="container-cards">
            {eventos.length > 0 ? (
              <div className="cards">
                {paginatedEventos.map((evento, index) => (
                  <Card
                    key={index}
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
      <Footer />
    </main>
  );
}
