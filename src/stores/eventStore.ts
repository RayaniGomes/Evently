"use client";
import { Event, PropEventStore } from "@/interfaces";
import { createDataEvent } from "@/schema/event.schema";
import api from "@/service/api";
import { toast } from "react-toastify";
import { create } from "zustand";

export const useEvent = create<PropEventStore>((set) => ({
  events: [],
  isLoading: false,

  getEvents: async () => {
    set({ isLoading: true });

    await api
      .get("/events")
      .then((response) => set({ events: response.data }))
      .catch(() => toast.error("Erro ao carregar eventos!"))
      .finally(() => set({ isLoading: false }));
  },

  getEventId: async (id: string) => {
    set({ isLoading: true });
    await api
      .get(`/events/${id}`)
      .then((response) => set({ events: [response.data] }))
      .catch(() => toast.error("Erro ao carregar evento!"))
      .finally(() => set({ isLoading: false }));
  },

  getCreatorEvents: async (email: string) => {
    set({ isLoading: true });
    await api
      .get(`/events?creator=${email}`)
      .then((response) => {
        if (response.data) {
          set({ events: response.data });
        }
      })
      .catch(() => toast.error("Erro ao carregar eventos do criador!"))
      .finally(() => set({ isLoading: false }));
  },

  postEvent: async (data: createDataEvent, reset?: () => void) => {
    set({ isLoading: true });
    await api
      .post("/events", data)
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

  patchEvent: async (id: string, data: createDataEvent) => {
    set({ isLoading: true });
    await api
      .patch(`/events/${id}`, data)
      .then(() => {
        toast.success("Evento atualizado com sucesso!");
      })
      .catch(() => toast.error("Erro ao atualizar o evento, tente novamente!"))
      .finally(() => set({ isLoading: false }));
  },

  deleteEvent: async (id: string) => {
    set({ isLoading: true });
    await api
      .delete(`/events/${id}`)
      .then((res) => {
        if (res.status === 204) {
          set({
            events: useEvent
              .getState()
              .events.filter((event: Event) => event._id !== id),
          });
          toast.success("Evento cancelado com sucesso!");
        }
      })
      .catch(() => toast.error("Erro ao cancelar o evento, tente novamente!"))
      .finally(() => set({ isLoading: false }));
  },

  filterEvents: async (filter: {
    date?: string;
    city?: string;
    state?: string;
    category?: string;
    name?: string;
  }) => {
    set({ isLoading: true });

    const params = new URLSearchParams();
    if (filter.date) params.append("date", filter.date.replace(/\//g, "-"));
    if (filter.city) params.append("city", filter.city);
    if (filter.state) params.append("state", filter.state);
    if (filter.category) params.append("category", filter.category);
    if (filter.name) params.append("name", filter.name);

    await api
      .get(`/events?${params.toString()}`)
      .then((response) => {
        set({ events: response.data });
      })
      .catch(() => toast.error("Erro ao filtrar eventos!"))
      .finally(() => set({ isLoading: false }));
  },
}));
