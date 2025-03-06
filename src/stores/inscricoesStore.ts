"use client";
import { MinhasInscricoes, PropInscritosStore } from "@/interfaces";
import api from "@/service/api";
import { toast } from "react-toastify";
import { create } from "zustand";

export const useInscritos = create<PropInscritosStore>((set) => ({
  inscricoes: [],
  isLoading: false,

  getListaInscricoes: async () => {
    set({ isLoading: true });
    await api.get("/inscricoes")
      .then((response) => set({ inscricoes: response.data }))
      .catch(() => toast.error("Erro ao buscar inscrições!"))
      .finally(() => set({ isLoading: false }));
  },

  getInscricoes: async (email: string) => {
    set({ isLoading: true });
    await api.get(`/inscricoes?email=${email}`)
      .then((response) => set({ inscricoes: response.data }))
      .catch(() => toast.error("Erro ao buscar inscrições!"))
      .finally(() => set({ isLoading: false }));
  },

  postInscricao: async (inscricao: MinhasInscricoes) => {
    set({ isLoading: true });
    await api.post("/inscricoes", inscricao, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 201) {
          toast.success("Inscrição realizada com sucesso!");
          set((state) => ({
            inscricoes: [...state.inscricoes, response.data],
          }));
        } else {
          toast.error("Erro ao realizar inscrição, tente novamente!");
        }
      })
      .catch((error) => {
        if (error.response?.status === 400) {
          toast.warning("Usuário já está inscrito nesse evento!");
        } else {
          toast.error("Erro ao realizar inscrição, tente novamente!");
        }
      })
      .finally(() => set({ isLoading: false }));
  },

  cancelarInscricao: async (id: string) => {
    set({ isLoading: true });
    await api.delete(`/inscricoes/${id}`)
      .then((response) => {
        if (response.status === 204) {
          set((state) => ({
            inscricoes: state.inscricoes.filter((inscricao) => inscricao._id !== id),
          }));
          toast.success("Inscrição cancelada com sucesso!");
        }
      })
      .catch(() => toast.error("Erro ao cancelar inscrição, tente novamente!"))
      .finally(() => set({ isLoading: false }));
  },
}));
