import { Usuario } from '@/interfaces';
import { PrismaClient, Role } from '@prisma/client';

class UsuarioModel {
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async criarUsuario(data: Usuario) {
    return this.prisma.usuario.create({
      data: {
        nome: data.nome,
        dataNascimento: data.dataNascimento,
        email: data.email,
        senha: data.senha,
        role: data.role === 'criador' ? Role.CRIADOR : Role.COMUM,
      },
    });
  }
}

export default UsuarioModel;
