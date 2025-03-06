"use client";
import { Evento, PropEventoStore } from "@/interfaces";
import { createDataEvento } from "@/schema/evento.schema";
import api from "@/service/api";
import { use } from "react";
import { toast } from "react-toastify";
import { create } from "zustand";

export const useEvento = create<PropEventoStore>((set) => ({
  eventos: [],
  isLoading: false,

  getEventos: async () => {
    set({ isLoading: true });

    await api
      .get("/eventos")
      .then((response) => set({ eventos: response.data }))
      .catch(() => toast.error("Erro ao carregar eventos!"))
      .finally(() => set({ isLoading: false }));
  },

  getEventoId: async (id: string) => {
    set({ isLoading: true });
    await api
      .get(`/eventos/${id}`)
      .then((response) => set({ eventos: [response.data] }))
      .catch(() => toast.error("Erro ao carregar evento!"))
      .finally(() => set({ isLoading: false }));
  },

  getCriadorEventos: async (id: string) => {
    set({ isLoading: true });
    await api
      .get(`/eventos?criador=${id}`)
      .then((response) => set({ eventos: response.data }))
      .catch(() => toast.error("Erro ao carregar eventos do criador!"))
      .finally(() => set({ isLoading: false }));
  },

  postEvento: async (data: createDataEvento, reset?: () => void) => {
    set({ isLoading: true });
    await api
      .post("/eventos", data)
      .then((response) => {
        if (response.status === 201) {
          toast.success("Evento criado com sucesso!");
          if (reset) reset();
        } else {
          toast.error("Erro ao criar o evento, tente novamente!");
        }
      })
      .catch(() => {
        toast.error("Erro ao criar o evento, tente novamente!");
      })
      .finally(() => {
        set({ isLoading: false });
      });
  },

  patchEvento: async (id: string, data: any) => {
    set({ isLoading: true });
    await api
      .patch(`/eventos/${id}`, data)
      .then((response) => {
        if (response.status === 200) {
          toast.success("Evento atualizado com sucesso!");
          useEvento.getState().getEventoId(id);
        } else {
          toast.error("Erro ao atualizar o evento, tente novamente!");
        }
      })
      .catch(() => toast.error("Erro ao atualizar o evento, tente novamente!"))
      .finally(() => set({ isLoading: false }));
  },

  deleteEvento: async (id: string) => {
    set({ isLoading: true });
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
          useEvento.getState().getEventos();
        }
      })
      .catch(() => toast.error("Erro ao deletar o evento, tente novamente!"))
      .finally(() => set({ isLoading: false }));
  },

  filtrarEventos: async (filtros: {
    data?: string;
    cidade?: string;
    uf?: string;
    tipo?: string;
    nome?: string;
  }) => {
    set({ isLoading: true });

    const params = new URLSearchParams();
    if (filtros.data) params.append("data", filtros.data.replace(/\//g, "-"));
    if (filtros.cidade) params.append("cidade", filtros.cidade);
    if (filtros.uf) params.append("uf", filtros.uf);
    if (filtros.tipo) params.append("tipo", filtros.tipo);
    if (filtros.nome) params.append("nome", filtros.nome);

    await api
      .get(`/eventos?${params.toString()}`)
      .then((response) => set({ eventos: response.data }))
      .catch(() => toast.error("Erro ao filtrar eventos!"))
      .finally(() => set({ isLoading: false }));
  },
}));
