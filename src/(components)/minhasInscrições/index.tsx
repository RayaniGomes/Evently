"use client";
import { useEffect } from "react";
import { useEvento } from "@/stores/eventoStore";
import { Inscricoes } from "./styled";
import CardEventos from "../cards/cardEventos";
import Paginacao from "../paginacao";
import FuncaoPaginacao from "@/help/funcaoPaginacao";
import { useSession } from "next-auth/react";
import { useInscricoes } from "@/stores/usuarioStore";

export default function MinhasInscrições() {
  const { eventos, getEventos } = useEvento();
  const { inscricoes, getMeusEventos } = useInscricoes();
  const {
    paginatedEventos,
    totalPages,
    currentPage,
    handlePageClick,
    itemsPerPage,
  } = FuncaoPaginacao(eventos);
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      getEventos();
      getMeusEventos(session.user.name ?? "");
    }
  }, [session, getEventos, getMeusEventos]);

  return (
    <Inscricoes>
      <div className="total-inscricoes">
        <p>Total de eventos inscritos: 100</p>
      </div>
      {eventos.length > 0 ? (
        paginatedEventos.map((evento) => {
          const minhasInscricoes = inscricoes.find(
            (inscricao) => inscricao.evento.nome === evento.nome
          );
          if (minhasInscricoes) {
            return (
              <CardEventos
                key={evento._id}
                evento={evento}
                bgColor="--branco"
                color="--azul-escuro"
                hover="--drop-shadow-azul-hover"
              />
            );
          }
          return null;
        })
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
