"use client";
import { Evento, PropEventoStore } from "@/interfaces";
import api from "@/service/api";
import { toast } from "react-toastify";
import { create } from "zustand";

export const useEvento = create<PropEventoStore>((set) => ({
  eventos: [],
  copyEventos: [],
  getEventos: async () => {
    await api.get("/eventos").then((response) => {
      set({
        eventos: response.data,
      });
    });
  },

  getEventoID: async (id: string) => {
    await api.get(`/eventos/${id}`).then((response) => {
      set({
        eventos: response.data,
      });
    });
  },

  getCriadorEventos: async (id: string) => {
    await api.get(`/eventos?criador=${id}`).then((response) => {
      set({
        eventos: response.data,
      });
    });
  },

  deleteEvento: async (id: string) => {
    await api
      .delete(`/eventos/${id}`)
      .then((res) => {
        if (res.status === 204) {
          set({
            eventos: useEvento
              .getState()
              .eventos.filter((evento: Evento) => evento._id !== id),
          });
          toast.success("Evento cancelado com sucesso!");
        }
      })
      .catch(() => {
        toast.error("Erro ao deletar o evento, tente novamente!");
      });
  },

  filtrarEventos: async (filtros: {
    data?: string;
    cidade?: string;
    uf?: string;
    tipo?: string;
    nome?: string;
  }) => {
    const params = new URLSearchParams();

    if (filtros.data) params.append("data", filtros.data.replace(/\//g, "-"));
    if (filtros.cidade) params.append("cidade", filtros.cidade);
    if (filtros.uf) params.append("uf", filtros.uf);
    if (filtros.tipo) params.append("tipo", filtros.tipo);
    if (filtros.nome) params.append("nome", filtros.nome);

    const query = params.toString() ? `?${params.toString()}` : "";

    await api.get(`/eventos${query}`).then((response) => {
      set({ eventos: response.data });
    });
  },
}));
