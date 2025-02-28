"use client";
import { useEffect } from "react";
import { Inscricoes } from "./styled";
import Paginacao from "../paginacao";
import { useSession } from "next-auth/react";
import CardMinhasInscricoes from "../cards/cardMinhasInscricoes";
import { FuncaoPaginacao } from "@/help/funcaoPaginacao";
import { useInscritos } from "@/stores/inscricoesStore";

export default function MinhasInscrições() {
  const { inscricoes, getInscricoes } = useInscritos();
  const { data: session } = useSession();

  const inscricoesOrdenados = Array.isArray(inscricoes)
    ? [...inscricoes].sort((a, b) => {
        const dataA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
        const dataB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
        return dataB - dataA;
      })
    : [];

  const {
    paginatedEventos: paginatedInscricoes,
    itemsPorPage,
    totalPages,
    currentPage,
    handlePageClick,
  } = FuncaoPaginacao({ eventos: inscricoesOrdenados });

  const validacaoInscricoes = inscricoes.some(
    (inscricao) => inscricao.inscritos.nome === session?.user.name
  )
  

  useEffect(() => {
    getInscricoes(session?.user.name || "");
  }, [session]);

  return (
    <Inscricoes>
      <div className="total-inscricoes">
        {validacaoInscricoes ? (
          <p>Total de eventos inscritos: { inscricoes.length}</p>
        ) : (
          <p>Total de inscrições: 0</p>
        )}
      </div>
      {inscricoes.length > 0 && validacaoInscricoes ? (
        paginatedInscricoes.map(
          (inscricao) =>
              <CardMinhasInscricoes
                key={inscricao._id}
                inscricao={inscricao}
                getInscricoes={getInscricoes}
                bgColor="--branco"
                color="--azul-escuro"
                hover="--drop-shadow-azul-hover"
              />
            )
      ) : (
        <h3>Nenhuma inscrição encontrada</h3>
      )}
      {validacaoInscricoes && (
        inscricoes.length > itemsPorPage && (
          <Paginacao
            color="--branco"
            colorHover="--azul-escuro"
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageClick={handlePageClick}
          />
        )
      )}
    </Inscricoes>
  );
}
