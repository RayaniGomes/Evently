import Image from "next/image";
import { ContainerCard } from "../styled";
import Link from "next/link";
import Compartilhar from "../../buttons/btnCompartinhar";
import { CardInscricoesProps } from "@/interfaces";
import { formatarData } from "@/help/functionsUseful";
import { useInscritos } from "@/stores/enrollmentStore";

export default function CardMinhasInscricoes({
  inscricao,
  bgColor,
  color,
  hover,
}: CardInscricoesProps) {
  const { cancelarInscricao } = useInscritos();

  return (
    <ContainerCard $bgColor={bgColor} $color={color} $hover={hover}>
      <Image
        src={inscricao.evento.imagem ?? "/sem-imagem.svg"}
        alt={inscricao.evento.nome}
        width={200}
        height={175}
      />
      <div className="box">
        <div>
          <div className="d-flex justify-content-between">
            <h6 className="nome-evento">{inscricao.evento.nome}</h6>
            <Compartilhar
              $url={`/detalhe-evento/${inscricao.evento?.id?._id || ""}`}
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
          <p>{inscricao.evento.local}</p>
          <p>
            {inscricao.evento.cidade} / {inscricao.evento.uf}
          </p>
          <h6>{formatarData(inscricao.evento.data)}</h6>
        </div>

        <div className="botoes-card ">
          <button
            onClick={() => {
              if (confirm("Tem certeza que deseja cancelar a inscrição?")) {
                cancelarInscricao(inscricao._id || "");
              }
            }}
          >
            Cancelar inscrição
          </button>
          <Link href={`/detalhe-evento/${inscricao.evento?.id?._id || ""}`}>
            Detalhes
          </Link>
        </div>
      </div>
    </ContainerCard>
  );
}
