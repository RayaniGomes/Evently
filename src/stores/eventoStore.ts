import { Evento } from "@/interfaces";
import api from "@/service/api";
import { create } from "zustand";

interface PropEventoStore {
    eventos: Evento[];
    getEventos: () => void;
    getEventoDetalhe: (id: number) => void;
}

export const useEvento = create<PropEventoStore>((set) => ({
    eventos: [],

    getEventos: async () => {
        await api.get("/eventos")
            .then((response) => {
                set({
                    eventos: response.data.data
                })
            })
    },

    getEventoDetalhe: async (id: number) => {
        await api.get(`/evento/${id}/`)
            .then((response) => {
                set({
                    eventos: response.data.data
                })
            })
    }

}))