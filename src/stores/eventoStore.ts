"use client";
import { Evento } from "@/interfaces";
import { createDataEvento } from "@/schema/evento.schema";
import api from "@/service/api";
import { toast } from "react-toastify";
import { create } from "zustand";

interface PropEventoStore {
  eventos: Evento[];
  copyEventos: Evento[];
  loading: boolean;
  error: string | null;
  getEventos: () => void;
  // filtroEstado: (uf: string) => void;
  // filtroCidade: (cidade: string) => void;
  // filtroTipo: (tipo: string) => void;
  // filtroData: (data: string) => void;
  // filtroNome: (nome: string) => void;
  criarEvento: (data: createDataEvento) => void;
}

export const useEvento = create<PropEventoStore>((set) => ({
  eventos: [],
  copyEventos: [],
  loading: false,
  error: null,

  getEventos: async () => {
    set({ loading: true, error: null });
    await api.get("/eventos")
      .then((response) => {
        set({
          loading: false,
          error: null,
          eventos: response.data.data,
          copyEventos: response.data.data,
        });
        console.log(response);
      })
  },

  criarEvento: async (evento) => {
    set({ loading: true, error: null });
    await api.post("/eventos", evento)
      .then((response) => {
        set({
          loading: false,
          error: null,
          eventos: response.data.data,
        });
        toast.success("Evento criado com sucesso!");
      })
      .catch((error) => {
        set({ loading: false, error: error.message });
        toast.error("Erro ao criar o evento, tente novamente!");
      });
  },

  // filtroEstado: (uf: string) => {
  //   if (!uf) {
  //     useEvento.getState().getEventos();
  //     return;
  //   }

  //   const eventosFiltrados = useEvento
  //     .getState()
  //     .copyEventos.filter(
  //       (evento) => evento.uf?.toLowerCase() === uf.toLowerCase()
  //     );

  //   useEvento.setState({
  //     eventos: eventosFiltrados,
  //   });
  // },

  // filtroCidade: (cidade: string) => {
  //   if (!cidade) {
  //     useEvento.getState().getEventos();
  //     return;
  //   }

  //   useEvento.setState((state) => ({
  //     eventos: state.copyEventos.filter(
  //       (evento) => evento.cidade?.toLowerCase() === cidade.toLowerCase()
  //     ),
  //   }));
  // },

  // filtroTipo: (tipo: string) => {
  //   if (!tipo) {
  //     useEvento.getState().getEventos();
  //     return;
  //   }

  //   useEvento.setState((state) => ({
  //     eventos: state.copyEventos.filter(
  //       (evento) => evento.tipo_evento?.toLowerCase() === tipo.toLowerCase()
  //     ),
  //   }));
  // },

  // filtroData: (data: string) => {
  //   if (!data) {
  //     useEvento.getState().getEventos();
  //     return;
  //   }

  //   const newData = data.replace(/-/g, "/");

  //   useEvento.setState((state) => ({
  //     eventos: state.copyEventos.filter((evento) => evento.data === newData),
  //   }));
  // },

  // filtroNome: (nome: string) => {
  //   if (!nome) {
  //     useEvento.setState((state) => ({
  //       eventos: state.copyEventos,
  //     }));
  //     return;
  //   }

  //   useEvento.setState((state) => ({
  //     eventos: state.copyEventos.filter((evento) =>
  //       evento.name?.toLowerCase().includes(nome.toLowerCase())
  //     ),
  //   }));
  // },
}));
