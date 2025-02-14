import { Usuario } from "@/interfaces";
import api from "@/service/api";
import { toast } from "react-toastify";
import { create } from "zustand";

interface PropUsuarioStore {
  usuarios: Usuario[];
  getUsuario: () => void;
  criarUsuario: (usuario: Usuario) => void;
}

export const useUsuario = create<PropUsuarioStore>((set) => ({
  usuarios: [],
  getUsuario: async () => {
    await api.get("/usuarios").then((response) => {
      set({
        usuarios: response.data.data,
      });
      console.log(response);
    });
  },

  
  criarUsuario: async (user: Usuario) => {
    await api.post("/usuarios", user).then((response) => {
      set({
        usuarios: response.data.data,
      });
      if (response.status === 201) {
        toast.success("Usuarios criado com sucesso!");
      } else {
        toast.error("Erro ao criar o usuario, tente novamente!");
      }
    });
  },
}));
