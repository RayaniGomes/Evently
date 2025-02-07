import Usuario from "@/models/Usuario";
import { NextApiRequest, NextApiResponse } from "next";

// Criar um novo Usuario
export const createUsuario = async (req: NextApiRequest, res: NextApiResponse) => {
  const novoUsuario = new Usuario(req.body);
  await novoUsuario.save();
  if (!novoUsuario) {
    return res.status(500).json({ error: "Erro ao criar usuario" });
  } else {
    return res.status(201).json(novoUsuario);
  }
};

// Listar todos os usuarios
export const getUsuarios = async (req: NextApiRequest, res: NextApiResponse) => {
  const usuarios = await Usuario.find();
  
  if (!usuarios) {
    return res.status(500).json({ error: "Erro ao listar usuarios" });
  } else {
    return res.status(200).json(usuarios);
  }
};

// Atualizar usuario por ID
export const updateUsuario = async (req: NextApiRequest, res: NextApiResponse) => {
  const usuarioAtualizado = await Usuario.findByIdAndUpdate(req.query.id, req.body, {
    new: true,
  });

  if (!usuarioAtualizado) {
    return res.status(500).json({ error: "Erro ao atualizar usuario" });
  } else {
    return  res.status(200).json(usuarioAtualizado);
  }
};

// Deletar usuario por ID
export const deleteUsuario = async (req: NextApiRequest, res: NextApiResponse) => {
  await Usuario.findByIdAndDelete(req.query.id);
  
  if (!Usuario) {
    return res.status(500).json({ error: "Erro ao deletar usuario" });
  } else {
    return res.status(204).end();
  }
};
