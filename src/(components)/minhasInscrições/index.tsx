"use client";
import { useEffect, useState } from "react";
import { useEvento } from "@/stores/eventoStore";
import { Inscricoes } from "./styled";
import Paginacao from "../paginacao";
import { useSession } from "next-auth/react";
import api from "@/service/api";
import FuncaoPaginacao from "@/help/funcaoPaginacao";
import CardMinhasInscricoes from "../cards/cardMinhasInscricoes";
import { MinhasInscricoes } from "@/interfaces";

export default function MinhasInscrições() {
  const { eventos, getEventos } = useEvento();
  const [inscricoes, setInscricoes] = useState<MinhasInscricoes[]>([]);
  const { data: session } = useSession();
  const {
    paginatedEventos,
    totalPages,
    currentPage,
    handlePageClick,
    itemsPerPage,
  } = FuncaoPaginacao(eventos);

  const getInscricoes = () => {
    if (session) {
      api.get(`/inscricoes?email=${session.user.name}`).then((response) => {
        if (Array.isArray(response.data)) {
          setInscricoes(response.data as MinhasInscricoes[]);
        } else {
          console.error("Erro: resposta não é um array");
        }
      });
    }
  };

  useEffect(() => {
    getInscricoes();
  }, []);

  return (
    <Inscricoes>
      <div className="total-inscricoes">
        <p>Total de eventos inscritos: 100</p>
      </div>
      {inscricoes.length > 0 ? (
        inscricoes.map((inscricao, index) => (
          <CardMinhasInscricoes
            key={index}
            inscricao={inscricao}
            getInscricoes={getInscricoes}
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
