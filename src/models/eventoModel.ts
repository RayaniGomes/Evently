// models/EventoModel.ts

import { Evento } from '@/interfaces';
import { PrismaClient } from '@prisma/client';

class EventoModel {
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async criarEvento(data: Evento) {
    return this.prisma.evento.create({
      data: {
        nome: data.nome,
        data: data.data,
        horario: data.horario,
        maxPessoas: data.maxPessoas,
        tipo: data.tipo,
        descricao: data.descricao,
        local: data.local,
        endereco: data.endereco,
        numero: data.numero,
        bairro: data.bairro,
        cidade: data.cidade,
        uf: data.uf,
        complemento: data.complemento || null,
        imagem: data.imagem || null,
        criadorId: data.criadorId,
      },
    });
  }
}

export default EventoModel;
