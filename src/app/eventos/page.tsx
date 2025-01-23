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

export default function Eventos() {
  const { eventos, getEventos, filtroNome } = useEvento();
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedEventos = eventos.slice(startIndex, endIndex);
  const totalPages = Math.ceil(eventos.length / itemsPerPage);

  const handlePageClick = (page: number) => setCurrentPage(page);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    getEventos();
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
            {eventos.length === 0 && <h2>Nenhum evento encontrado</h2>}
            <div className="cards">
              {paginatedEventos.map((evento) => (
                <Card key={evento.id} evento={evento} />
              ))}
            </div>

            {eventos.length > itemsPerPage && (
              <Paginacao
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
