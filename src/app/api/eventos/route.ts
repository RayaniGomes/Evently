import { Evento } from "@/models/Eventos";
import { NextApiRequest, NextApiResponse } from "next";

// Criar um novo evento
export const createEvento = async (req: NextApiRequest, res: NextApiResponse) => {
  const novoEvento = new Evento(req.body);
  await novoEvento.save();
  
  if (!novoEvento) {
    return res.status(500).json({ error: "Erro ao criar evento" });
  } else {
    return res.status(201).json(novoEvento);
  }
};


// Listar todos os eventos
export const getEventos = async (res: NextApiResponse) => {
  const Eventos = await Evento.find();

  if (!Eventos) {
    return res.status(500).json({ error: "Erro ao listar eventos" });
  } else {
    return res.status(200).json(Eventos);
  }
};

// Atualizar evento por ID
export const updateEvento = async (req: NextApiRequest, res: NextApiResponse) => {
  const eventoAtualizado = await Evento.findByIdAndUpdate(req.query.id, req.body, {
    new: true,
  });

  if (!eventoAtualizado) {
    return res.status(500).json({ error: "Erro ao atualizar evento" });
  } else {
    return res.status(200).json(eventoAtualizado);
  }
};

// Deletar evento por ID
export const deleteEvento = async (req: NextApiRequest, res: NextApiResponse) => {
  await Evento.findByIdAndDelete(req.query.id);

  if (!req.query.id) {
    return res.status(500).json({ error: "Erro ao deletar evento" });
  } else {
    return res.status(204).end();
  }
};

