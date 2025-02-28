"use client";
import { MinhasInscricoes, PropInscritosStore } from "@/interfaces";
import api from "@/service/api";
import { get } from "http";
import { toast } from "react-toastify";
import { create } from "zustand";


export const useInscritos = create<PropInscritosStore>((set) => ({
  inscricoes: [],

  getInscricoes: async (nome: string) => {
    api.get(`/inscricoes?email=${nome}`).then((response) => {
      set({
        inscricoes: response.data,
      });
    });
  },

  postInscricao: async (inscricao: MinhasInscricoes) => {
    // Inicia a requisição POST
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
    });
  }
  
}));
