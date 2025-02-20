import { useEffect, useState } from "react";
import Image from "next/image";
import { ContainerCard } from "../styled";
import Link from "next/link";
import Compartilhar from "../../compartinhar";
import { CardProps } from "@/interfaces";

export default function CardEventos({
  evento,
  bgColor,
  color,
  hover,
}: CardProps) {
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPathname(window.location.pathname);
    }
  }, []);

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
              $evento={evento}
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
          {pathname === "/perfil" ? (
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
