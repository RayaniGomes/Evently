import { useEffect } from "react";
import { useEvento } from "@/stores/eventoStore";
import { Inscricoes } from "./styled";
import Card from "../cardEvento";

export default function MinhasInscrições() {
  const { eventos, getEventos } = useEvento();

  useEffect(() => {
    getEventos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Inscricoes>
     <div className="total-inscricoes">
      <>Total de eventos inscritos: 100</>
     </div>
     {eventos.map((evento) => (
        <Card key={evento.id} evento={evento} />
      ))}
    </Inscricoes>
  );
}
