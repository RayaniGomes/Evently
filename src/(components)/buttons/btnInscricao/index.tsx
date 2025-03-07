"use client";
import { BtnInscricaoProps, MinhasInscricoes } from "@/interfaces";
import { useInscritos } from "@/stores/inscricoesStore";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";
import { Btn } from "./styled";

export default function BtnInscricao({
  evento,
  color,
  bgColor,
  hover,
}: BtnInscricaoProps) {
  const { postInscricao, isLoading } = useInscritos();
  const { data: session } = useSession();

  const handleInscricao = async () => {
    if (!session) {
      toast.warning("Por favor, faça login para realizar inscrição!");
      redirect("/login");
    }

    const dados: MinhasInscricoes = {
      evento: {
        id: {
          _id: evento._id,
        },
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
        criador: evento.criador,
      },
      inscritos: {
        _id: session.user.id ?? "",
        nome: session.user.name ?? "",
        email: session.user.email ?? "",
      },
    };

    postInscricao(dados);
  };

  return (
    <Btn
      $color={color}
      $bgColor={bgColor}
      $hover={hover}
      onClick={handleInscricao}
    >
      {isLoading ? "Carregando..." : "Inscrever-se"}
    </Btn>
  );
}
