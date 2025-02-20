"use client";
import { useEffect } from "react";
import { useEvento } from "@/stores/eventoStore";
import { Inscricoes } from "./styled";
import CardEventos from "../cards/cardEventos";
import Paginacao from "../paginacao";
import FuncaoPaginacao from "@/help/funcaoPaginacao";

export default function MinhasInscrições() {
  const { eventos, getEventos } = useEvento();
  const {
    paginatedEventos,
    totalPages,
    currentPage,
    handlePageClick,
    itemsPerPage,
  } = FuncaoPaginacao();

  useEffect(() => {
    getEventos();
  }, []);

  return (
    <Inscricoes>
      <div className="total-inscricoes">
        <p>Total de eventos inscritos: 100</p>
      </div>
      {eventos.length > 0 ? (
        paginatedEventos.map((evento) => (
          <CardEventos
            key={evento._id}
            evento={evento}
            bgColor="--branco"
            color="--azul-escuro"
            hover="--drop-shadow-azul-hover"
          />
        ))
      ) : (
        <h3>Nenhuma inscrição encontrada</h3>
      )}

      {eventos.length > itemsPerPage && (
        <Paginacao
          color="--branco"
          colorHover="--azul-escuro"
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageClick={handlePageClick}
        />
      )}
    </Inscricoes>
  );
}
