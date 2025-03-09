"use client";
import { PropUserStore } from "@/interfaces";
import { createDataUser } from "@/schema/user.schema";
import api from "@/service/api";
import { toast } from "react-toastify";
import { create } from "zustand";

export const useUser = create<PropUserStore>((set) => ({
  users: [],
  isLoading: false,

  getUser: async (email: string) => {
    set({ isLoading: true });
    await api
      .get(`/users/email?email=${email}`)
      .then((response) => set({ users: [response.data] }))
      .finally(() => set({ isLoading: false }));
  },

  getUsersList: async () => {
    set({ isLoading: true });
    await api
      .get("/users")
      .then((response) => set({ users: response.data }))
      .catch(() => toast.error("Erro ao buscar os usuários, tente novamente!"))
      .finally(() => set({ isLoading: false }));
  },

  postUser: async (data: createDataUser, reset?: () => void) => {
    set({ isLoading: true });
    await api
      .post("/users", data)
      .then((response) => {
        if (response.status === 201) {
          toast.success(
            "Usuário criado com sucesso! Agora você pode fazer seu login!"
          );
          if (reset) reset();
        } else {
          toast.error("Erro ao criar o usuário, tente novamente!");
        }
      })
      .catch(() => toast.error("Erro ao criar o usuário, tente novamente!"))
      .finally(() => set({ isLoading: false }));
  },

  patchUser: async (id: string, data: createDataUser) => {
    set({ isLoading: true });
    await api
      .patch(`/users/${id}`, data)
      .then(() => {
        toast.success("Dados atualizados com sucesso!");
        useUser.getState().getUser(data.email);
      })
      .catch(() => toast.error("Erro ao atualizar o usuário, tente novamente!"))
      .finally(() => set({ isLoading: false }));
  },

  deleteUser: async (id: string) => {
    set({ isLoading: true });
    await api
      .delete(`/users/${id}`)
      .then((response) => {
        if (response.status === 204) {
          set({
            users: useUser.getState().users.filter((user) => user._id !== id),
          });
          toast.success("Conta excluída com sucesso!");
        }
      })
      .catch(() => toast.error("Erro ao excluir a conta, tente novamente!"))
      .finally(() => set({ isLoading: false }));
  },
}));
