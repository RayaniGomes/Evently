"use client";
import { useEffect, useState } from "react";
import Paginacao from "../paginacao";
import FuncaoPaginacao from "@/help/funcaoPaginacao";
import { Inscricoes } from "../minhasInscrições/styled";
import { Evento, Usuario } from "@/interfaces";
import api from "@/service/api";
import CardMeusEventos from "../cards/cardMeusEventos";
import { useEvento } from "@/stores/eventoStore";

interface Props {
  usuario: Usuario | null;
}
export default function MeusEventos({ usuario }: Props) {
  const { eventos, getCriadorEventos } = useEvento();

  const {
    totalPages,
    currentPage,
    handlePageClick,
    itemsPerPage,
    startIndex,
    endIndex,
  } = FuncaoPaginacao();

  const paginatedEventos = eventos.slice(startIndex, endIndex);

  useEffect(() => {
    getCriadorEventos(usuario?._id || "");
  }, []);

  return (
    <Inscricoes>
      <div className="total-inscricoes">
        <p>Total de eventos: {eventos.length}</p>
      </div>
      {eventos.length > 0 ? (
        paginatedEventos.map((evento) => (
          <CardMeusEventos
            key={evento._id}
            evento={evento}
            bgColor="--branco"
            color="--azul-escuro"
            hover="--drop-shadow-azul-hover"
          />
        ))
      ) : (
        <h3>Você não tem eventos cadastrados</h3>
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
