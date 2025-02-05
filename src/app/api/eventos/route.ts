// api/eventos.ts

import { Evento } from "@/interfaces";
import { db } from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const dataEvento: Evento = req.body;

    const CriarEvento = await db.evento
      .create({
        data: {
          nome: dataEvento.nome,
          data: new Date(dataEvento.data),
          horario: dataEvento.horario,
          maxPessoas: dataEvento.maxPessoas,
          tipo: dataEvento.tipo,
          descricao: dataEvento.descricao,
          local: dataEvento.local,
          endereco: dataEvento.endereco,
          numero: dataEvento.numero,
          bairro: dataEvento.bairro,
          cidade: dataEvento.cidade,
          uf: dataEvento.uf,
          complemento: dataEvento.complemento,
          imagem: dataEvento.imagem,
          criadorId: dataEvento.criadorId,
        },
      })
      .catch((error) => {
        if (error.status === 500) {
          return res.status(500).json({ message: "Erro ao criar o evento" });
        }
      });

      if (CriarEvento) {
        return res.status(201).json({ message: 'Usuário criado com sucesso!' });
      }
  } else {
    res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  if (req.method === "PUT") {
    const { id, ...eventoData } = req.body;

    const atualizarEvento = await db.evento
      .update({
        where: { id: id },
        data: {
          nome: eventoData.nome ?? undefined,
          data: eventoData.data ? new Date(eventoData.data) : undefined,
          horario: eventoData.horario ?? undefined,
          maxPessoas: eventoData.maxPessoas ?? undefined,
          tipo: eventoData.tipo ?? undefined,
          descricao: eventoData.descricao ?? undefined,
          local: eventoData.localNome ?? undefined,
          endereco: eventoData.endereco ?? undefined,
          numero: eventoData.numero ?? undefined,
          bairro: eventoData.bairro ?? undefined,
          cidade: eventoData.cidade ?? undefined,
          uf: eventoData.uf ?? undefined,
          complemento: eventoData.complemento ?? undefined,
          imagem: eventoData.imagem ?? undefined,
          criadorId: eventoData.criadorId ?? undefined,
        },
      })
      .catch((error) => {
        if (error.status === 500) {
          return res.status(500).json({ message: "Erro ao criar o evento" });
        }
      });

    if (atualizarEvento) {
      res.status(200).json(atualizarEvento);
    }
  }
}
