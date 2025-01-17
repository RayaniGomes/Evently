import { Evento } from "@/interfaces";
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
}

export const useEvento = create<PropEventoStore>((set) => ({
    eventos: [],
    copyEventos: [],

    getEventos: async () => {
        await api.get("/eventos")
            .then((response) => {
                set({
                    eventos: response.data.data,
                    copyEventos: response.data.data
                })
            })
    },

    filtroEstado: async (uf: string) => {
        if (uf !== "") {
            useEvento.getState().getEventos();
            return;
        }

        await api.get(`/eventos/?uf=${uf}`)
        .then((response) => {
            set({
                eventos: response.data.data,
                copyEventos: response.data.data
            })
            console.log(uf);
            })
    },

    filtroCidade: async (cidade: string) => {
        if (cidade == "") {
            useEvento.getState().getEventos();
            return;
        }

        await api.get(`/eventos?cidade=${cidade}`)
            .then((response) => {
                set({
                    eventos: response.data.data,
                    copyEventos: response.data.data
                })
            })
    },

    filtroTipo: async (tipo: string) => {
        if (tipo == "") {
            useEvento.getState().getEventos();
            return;
        }

        await api.get(`/eventos?tipo=${tipo}`)
            .then((response) => {
                set({
                    eventos: response.data.data,
                    copyEventos: response.data.data
                })
            })
    },

    filtroData: async (data: string) => {
        set({
            eventos: useEvento.getState().eventos.filter((evento: Evento) => evento.data.toLowerCase().includes(data.toLowerCase()))
        })
        console.log(data);
    },

    filtroNome: async (nome: string) => {
        set({
            eventos: useEvento.getState().eventos.filter((evento) => evento.nome.toLowerCase().includes(nome.toLowerCase()))
        })
    }
}))