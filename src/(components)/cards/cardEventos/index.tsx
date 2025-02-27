import Image from "next/image";
import { ContainerCard } from "../styled";
import Link from "next/link";
import Compartilhar from "../../compartinhar";
import { CardProps, MinhasInscricoes } from "@/interfaces";
import { redirect, usePathname } from "next/navigation";
import { formatarData } from "@/help/funcoesUteis";
import { useSession } from "next-auth/react";
import api from "@/service/api";
import { toast } from "react-toastify";
import { useState } from "react";

export default function CardEventos({
  evento,
  bgColor,
  color,
  hover,
}: CardProps) {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(false);

  const handleInscricao = async () => {
    setIsLoading(true);

    if (!session) {
      toast.warning("Por favor, faça login para realizar inscrição!");
      redirect("/login");
    }

    const dados = {
      evento: {
        id: evento._id,
        nome: evento.nome,
        data: evento.data,
        horario: evento.horario,
        maxPessoas: evento.maxPessoas,
        tipo: evento.tipo,
        descricao: evento.descricao,
        local: evento.local,
        endereco: evento.endereco,
        numero: evento.numero,
        bairro: evento.bairro,
        cidade: evento.cidade,
        uf: evento.uf,
        complemento: evento.complemento,
        imagem: evento.imagem,
      },
      inscritos: {
        id: session.user.id,
        nome: session.user.name ?? "",
        email: session.user.email ?? "",
      },
    };

    await api
      .post("/inscricoes", dados, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        if (response.status === 201) {
          toast.success("Inscrição realizada com sucesso!");
        }
      })
      .catch((response) => {
        if (response.status === 400) {
          toast.warning("Usuário já esta inscrito nesse evento!");
        } else {
          toast.error("Erro ao realizar inscrição, tente novamente!");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
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
              $url={`/detalhe-evento/${evento._id}`} 
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

        <div className="botoes-card ">
          {pathname === "/eventos" ? (
            <button
              type="button"
              onClick={handleInscricao}
              disabled={isLoading}
            >
              {isLoading ? "Carregando..." : "Inscrever-se"}
            </button>
          ) : (
            <button>Cancelar inscrição</button>
          )}
          <Link href={`/detalhe-evento/${evento._id}`}>Detalhes</Link>
        </div>
      </div>
    </ContainerCard>
  );
}
