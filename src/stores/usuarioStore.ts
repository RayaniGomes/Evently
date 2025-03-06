"use client";
import { PropUsuarioStore } from "@/interfaces";
import api from "@/service/api";
import { toast } from "react-toastify";
import { create } from "zustand";

export const useUsuario = create<PropUsuarioStore>((set) => ({
  usuarios: [],
  isLoading: false,
  getUsuario: async (email: string) => {
    set({ isLoading: true });
    await api
      .get(`/usuarios/email?email=${email}`)
      .then((response) => {
        set({ usuarios: [response.data] });
      })
      .catch(() => {
        toast.error("Erro ao buscar o usuário, tente novamente!");
      })
      .finally(() => {
        set({ isLoading: false });
      });
  },

  getUsuariosLista: async () => {
    set({ isLoading: true });
    await api
      .get("/usuarios")
      .then((response) => {
        set({ usuarios: response.data });
      })
      .catch(() => {
        toast.error("Erro ao buscar os usuários, tente novamente!");
      })
      .finally(() => {
        set({ isLoading: false });
      });
  },

  postUsuario: async (data: any, reset?: () => void) => {
    set({ isLoading: true });
    await api
      .post("/usuarios", data)
      .then((response) => {
        if (response.status === 201) {
          toast.success("Usuário criado com sucesso! Agora você pode logar.");
          if (reset) reset();
        } else {
          toast.error("Erro ao criar o usuário, tente novamente!");
        }
      })
      .catch(() => {
        toast.error("Erro ao criar o usuário, tente novamente!");
      })
      .finally(() => {
        set({ isLoading: false });
      });
  },

  patchUsuario: async (id: string, data: any) => {
    set({ isLoading: true });
    await api
      .patch(`/usuarios/${id}`, data)
      .then(() => {
        toast.success("Dados atualizados com sucesso!");
        useUsuario.getState().getUsuario(data.email);
      })
      .catch(() => {
        toast.error("Erro ao atualizar o usuário, tente novamente!");
      })
      .finally(() => {
        set({ isLoading: false });
      });
  },

  deleteUsuario: async (id: string) => {
    set({ isLoading: true });
    await api
      .delete(`/usuarios/${id}`)
      .then((response) => {
        if (response.status === 204) {
          set({
            usuarios: useUsuario
              .getState()
              .usuarios.filter((usuario) => usuario._id !== id),
          });
        }
      })
      .catch(() => {
        toast.error("Erro ao excluir o conta, tente novamente!");
      })
      .finally(() => {
        set({ isLoading: false });
      });
  },
}));
