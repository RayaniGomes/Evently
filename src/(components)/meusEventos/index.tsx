"use client";
import { useEffect } from "react";
import Paginacao from "../paginacao";
import FuncaoPaginacao from "@/help/funcaoPaginacao";
import { Inscricoes } from "../minhasInscrições/styled";
import { Usuario } from "@/interfaces";
import CardMeusEventos from "../cards/cardMeusEventos";
import { useEvento } from "@/stores/eventoStore";

interface Props {
  usuario: Usuario | null;
  getUsuario: () => void;
}
export default function MeusEventos({
  usuario,
  getUsuario: getUsuarios,
}: Props) {
  const { eventos, getCriadorEventos } = useEvento();

  const {
    totalPages,
    currentPage,
    handlePageClick,
    itemsPerPage,
    startIndex,
    endIndex,
  } = FuncaoPaginacao(eventos);

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
            getUsuario={getUsuarios}
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
