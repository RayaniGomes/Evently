import { useEvento } from "@/stores/eventoStore";
import { useEffect } from "react";

export default function SetFiltro() {
    const { eventos, getEventos } = useEvento();

    useEffect(() => {
        getEventos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const normalizarEOrdenar = (array: string[]) => {
        const mapaNormalizado = new Map();

        array.forEach((item) => {
            const chaveNormalizada = item.toLowerCase(); 
            if (!mapaNormalizado.has(chaveNormalizada)) {
                mapaNormalizado.set(chaveNormalizada, item);
            }
        });

        return Array.from(mapaNormalizado.values()).sort((a, b) =>
            a.localeCompare(b, undefined, { sensitivity: "base" })
        );
    };

    const estados = normalizarEOrdenar(
        eventos.map((evento) => evento.uf)
    );

    const cidades = normalizarEOrdenar(
        eventos.map((evento) => evento.cidade)
    );

    const tipos = normalizarEOrdenar(
        eventos.map((evento) => evento.tipo)
    );

    return { estados, cidades, tipos };
}
