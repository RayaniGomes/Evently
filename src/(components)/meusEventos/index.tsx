"use client";
import { useEffect } from "react";
import Paginacao from "../paginacao";
import { Inscricoes } from "../minhasInscrições/styled";
import { Usuario } from "@/interfaces";
import CardMeusEventos from "../cards/cardMeusEventos";
import { useEvento } from "@/stores/eventoStore";
import { FuncaoPaginacao } from "@/help/funcaoPaginacao";

interface Props {
  usuario: Usuario | null;
}
export default function MeusEventos({ usuario }: Props) {
  const { eventos, getCriadorEventos } = useEvento();

  const eventosOrdenados = [...eventos].sort((a, b) => {
    const dataA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
    const dataB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
    return dataB - dataA;
  });

  const {
    paginatedEventos: paginatedEventos,
    itemsPorPage,
    totalPages,
    currentPage,
    handlePageClick,
  } = FuncaoPaginacao({ eventos: eventosOrdenados });

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

      {eventos.length > itemsPorPage && (
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
