import { Usuario } from "@/interfaces";
import api from "@/service/api";
import { toast } from "react-toastify";
import { create } from "zustand";

interface PropUsuarioStore {
  inscricoes: Inscricoes[];
  getMeusEventos: (nome: string) => void;
}

export interface Inscricoes {
  evento: {
    id: string;
    nome: string;
  },
  inscritos: {
    id: string;
    nome: string;
    email: string;
  }
}

export const useInscricoes = create<PropUsuarioStore>((set) => ({
  inscricoes: [],
  getMeusEventos: async (nome: string) => {
    await api.get(`/inscricoes?nome=${nome}`).then((response) => {
      set({
        inscricoes: response.data.data,
      });
      console.log(response);
    });
  }
}));
