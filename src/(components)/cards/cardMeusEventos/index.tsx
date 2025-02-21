import Image from "next/image";
import { ContainerCard } from "../styled";
import Link from "next/link";
import Compartilhar from "../../compartinhar";
import { CardProps } from "@/interfaces";
import { useEvento } from "@/stores/eventoStore";
import { formatarData } from "@/help/funcoesUteis";
import { useState } from "react";
import ModalUpdateEvento from "@/(components)/modalUlpdateEvento";

export default function CardMeusEventos({
  evento,
  bgColor,
  color,
  hover,
}: CardProps) {
  const { deleteEvento } = useEvento();
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

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
            {evento.cidade} / {evento.uf}
          </p>
          <h6>{formatarData(evento.data)}</h6>
        </div>

        <div className="botoes-card">
          <button
            onClick={() => {
              if (confirm("Tem certeza que deseja cancelar este evento?")) {
                deleteEvento(evento._id);
              }
            }}
          >
            Cancelar evento
          </button>
          <button onClick={toggleModal}>Editar evento</button>
          <ModalUpdateEvento showModal={showModal} toggleModal={toggleModal} evento={evento} />
          <Link href={`/detalhe-evento-criador/${evento._id}`}>Detalhes</Link>
        </div>
      </div>
    </ContainerCard>
  );
}
