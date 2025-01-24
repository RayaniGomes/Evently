import { useEffect } from "react";
import { useEvento } from "@/stores/eventoStore";
import Card from "../cardEvento";
import Paginacao from "../paginacao";
import FuncaoPaginacao from "@/help/funcaoPaginacao";
import { Inscricoes } from "../minhasInscrições/styled";

export default function MeusEventos() {
  const { eventos, getEventos } = useEvento();
  const { paginatedEventos, totalPages, currentPage, handlePageClick, itemsPerPage } = FuncaoPaginacao();

  useEffect(() => {
    getEventos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Inscricoes>
      <div className="total-inscricoes">
        <p>Total de eventos: 100</p>
      </div>
      {eventos.length > 0 ? (
        paginatedEventos.map((evento) => (
          <Card
            key={evento.id}
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
