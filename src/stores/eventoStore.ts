import { Evento } from "@/interfaces";
import { createDataEvento } from "@/schema/evento.schema";
import api from "@/service/api";
import { create } from "zustand";

interface PropEventoStore {
  eventos: Evento[];
  copyEventos: Evento[];
  getEventos: () => void;
  filtroEstado: (uf: string) => void;
  filtroCidade: (cidade: string) => void;
  filtroTipo: (tipo: string) => void;
  filtroData: (data: string) => void;
  filtroNome: (nome: string) => void;
  criarEvento: (novoEvento: createDataEvento) => void;
}

export const useEvento = create<PropEventoStore>((set) => ({
  eventos: [],
  copyEventos: [],

  getEventos: async () => {
    await api.get("/eventos").then((response) => {
      set({
        eventos: response.data.data,
        copyEventos: response.data.data,
      });
      console.log(response);
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

  criarEvento: async (novoEvento: createDataEvento) => {
    await api
      .post("/eventos", novoEvento)
      .then((response) => {
        set((state) => ({
          eventos: [...state.eventos, response.data],
          copyEventos: [...state.copyEventos, response.data],
        }));
        console.log("Evento criado com sucesso!", response.data);
      })
      .catch((error) => {
        console.error("Erro ao criar evento:", error);
      });
  },
}));
