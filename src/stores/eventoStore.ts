"use client";
import { PropEventoStore } from "@/interfaces";
import api from "@/service/api";
import { toast } from "react-toastify";
import { create } from "zustand";

export const useEvento = create<PropEventoStore>((set) => ({
  eventos: [],
  copyEventos: [],
  getEventos: async () => {
    await api.get("/eventos")
      .then((response) => {
        set({
          eventos: response.data,
        });
        console.log(response);
      })
  },

  criarEvento: async (evento) => {
    await api.post("/eventos", evento)
      .then((response) => {
        set({
          eventos: response.data,
        });
        toast.success("Evento criado com sucesso!");
      })
      .catch(() => {
        toast.error("Erro ao criar o evento, tente novamente!");
      });
  },

  filtroEstado: (uf: string) => {
    if (!uf) {
      useEvento.getState().getEventos();
      return;
    }

    const eventosFiltrados = useEvento
      .getState()
      .copyEventos.filter(
        (evento) => evento.uf?.toLowerCase() === uf.toLowerCase()
      );

    useEvento.setState({
      eventos: eventosFiltrados,
    });
  },

  filtroCidade: (cidade: string) => {
    if (!cidade) {
      useEvento.getState().getEventos();
      return;
    }

    useEvento.setState((state) => ({
      eventos: state.copyEventos.filter(
        (evento) => evento.cidade?.toLowerCase() === cidade.toLowerCase()
      ),
    }));
  },

  filtroTipo: (tipo: string) => {
    if (!tipo) {
      useEvento.getState().getEventos();
      return;
    }

    useEvento.setState((state) => ({
      eventos: state.copyEventos.filter(
        (evento) => evento.tipo?.toLowerCase() === tipo.toLowerCase()
      ),
    }));
  },

  filtroData: (data: string) => {
    if (!data) {
      useEvento.getState().getEventos();
      return;
    }

    const newData = data.replace(/-/g, "/");

    useEvento.setState((state) => ({
      eventos: state.copyEventos.filter((evento) => evento.data === newData),
    }));
  },

  filtroNome: (nome: string) => {
    if (!nome) {
      useEvento.setState((state) => ({
        eventos: state.copyEventos,
      }));
      return;
    }

    useEvento.setState((state) => ({
      eventos: state.copyEventos.filter((evento) =>
        evento.nome?.toLowerCase().includes(nome.toLowerCase())
      ),
    }));
  },
}));
