import Image from "next/image";
import { ContainerCard } from "../styled";
import Link from "next/link";
import Compartilhar from "../../compartinhar";
import { CardProps } from "@/interfaces";
import { useEvento } from "@/stores/eventoStore";

export default function CardMeusEventos({ evento, bgColor, color, hover }: CardProps) {
  const { deleteEvento } = useEvento();
  return (
    <ContainerCard $bgColor={bgColor} $color={color} $hover={hover}>
      <Image
        src={evento.imagem ?? "/sem-imagem.svg"}
        alt={evento.nome}
        width={200}
        height={175}
      />
      <div className="box">
        <div>
          <div className="d-flex justify-content-between">
            <h6 className="nome-evento">{evento.nome}</h6>
            <Compartilhar
              $bgColor={color}
              $color={bgColor}
              $tamanho={25}
              $fontSize={12}
              $padding=".4rem"
              $top={1}
              $right={1}
              $hover={hover}
            />
          </div>
          <p>{evento.local}</p>
          <p>
            {evento.cidade} / <span>{evento.uf}</span>
          </p>
          <h6>{evento.data}</h6>
        </div>

        <div className="botoes">
          <button onClick={() => deleteEvento(evento._id)}>Cancelar evento</button>
          <button>Editar evento</button>
          <Link href={`/detalhe-evento/${evento._id}`}>Detalhes</Link>
        </div>
      </div>
    </ContainerCard>
  );
}
