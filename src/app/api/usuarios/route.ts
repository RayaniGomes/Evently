import { db } from '@/lib/db';
import { NextApiRequest, NextApiResponse } from 'next';
import { Usuario } from '@/interfaces';
import { Role } from '@prisma/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const dataUsuario: Usuario = req.body;

    const CriarUsuario = await db.usuario
      .create({
        data: {
          nome: dataUsuario.nome,
          dataNascimento: dataUsuario.dataNascimento,
          email: dataUsuario.email,
          senha: dataUsuario.senha,
          role: dataUsuario.role === 'criador' ? Role.CRIADOR : Role.COMUM,
        },
      })
      .catch((error) => {
        if (error.status === 500) {
          return res.status(500).json({ message: 'Erro ao criar o usuário' });
        }
      });

    if (CriarUsuario) {
      return res.status(201).json({ message: 'Usuário criado com sucesso!' });
    }
  }
}
