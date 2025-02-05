import Image from "next/image";
import { ContainerCard } from "./styled";
import Link from "next/link";
import Compartilhar from "../compartinhar";
import { Evento } from "@/interfaces";

export interface CardProps {
  evento: Evento;
  bgColor: string;
  color: string;
  hover: string;
}

export default function Card({ evento, bgColor, color, hover }: CardProps) {
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
          {window.location.pathname === "/perfil" ? (
            <button>Cancelar inscrição</button>
          ) : (
            <button>Inscrever-se</button>
          )}
          <Link href={`/detalhe-evento/${evento._id}`}>Detalhes</Link>
        </div>
      </div>
    </ContainerCard>
  );
}
