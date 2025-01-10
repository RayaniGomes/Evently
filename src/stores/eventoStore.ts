import { Evento } from "@/interfaces";
import api from "@/service/api";
import { create } from "zustand";

interface PropEventoStore {
    eventos: Evento[];
    getEventos: () => void;
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
    }

}))