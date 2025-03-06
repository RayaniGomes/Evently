"use client";
import { MinhasInscricoes, PropInscritosStore } from "@/interfaces";
import api from "@/service/api";
import { toast } from "react-toastify";
import { create } from "zustand";


export const useInscritos = create<PropInscritosStore>((set) => ({
  inscricoes: [],
  isLoading: false,

  getInscricoes: async (email: string) => {
    set({ isLoading: true });
    api.get(`/inscricoes?email=${email}`).then((response) => {
      set({
        inscricoes: response.data,
      });
    })
    .finally(() => {
      set({ isLoading: false });
    });
  },

  postInscricao: async (inscricao: MinhasInscricoes) => {
    set({ isLoading: true });
    api.post("/inscricoes", inscricao, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      set({
        inscricoes: response.data,
      });
  
      if (response.status === 201) {
        toast.success("Inscrição realizada com sucesso!");
      } else {
        toast.error("Erro ao realizar inscrição, tente novamente!");
      }
    })
    .catch((error) => {
      if (error.response) {
        if (error.response.status === 400) {
          toast.warning("Usuário já está inscrito nesse evento!");
        } else {
          toast.error("Erro ao realizar inscrição, tente novamente!");
        }
      } else {
        toast.error("Erro de conexão, verifique sua internet e tente novamente.");
      }
    })
    .finally(() => {
      set({ isLoading: false });
    });
  },

  cancelarInscricao: async (id: string) => {
    set({ isLoading: true });
    api
      .delete(`/inscricoes/${id}`)
      .then((response) => {
        if (response.status === 204) {
          set({
            inscricoes: useInscritos
              .getState()
              .inscricoes.filter((inscricao) => inscricao._id !== id),
          })
          toast.success("Inscrição cancelada com sucesso!");
        }
      })
      .catch(() => {
        toast.error("Erro ao cancelar inscrição, tente novamente!");
      })
      .finally(() => {
        set({ isLoading: false });
      });
  },
  
}));
