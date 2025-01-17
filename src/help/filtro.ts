import { Evento } from "@/interfaces";
import { useEvento } from "@/stores/eventoStore";
import { useEffect } from "react";

export default function SetFiltro() {
    const { eventos, getEventos } = useEvento();

    useEffect(() => {
        getEventos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const estados = Object.keys(eventos.reduce((acc: { [uf: string]: Evento }, evento) => {
        acc[evento.uf] = evento;
        return acc;
    }, {} as { [uf: string]: Evento })).sort();
    
    const cidades = Object.keys(eventos.reduce((acc: { [cidade: string]: Evento }, evento) => {
        acc[evento.cidade] = evento;
        return acc;
    }, {} as { [cidade: string]: Evento })).sort();
    
    const tipos = Object.keys(eventos.reduce((acc: { [tipo: string]: Evento }, evento) => {
        acc[evento.tipo] = evento;
        return acc;
    }, {} as { [tipo: string]: Evento })).sort();
    
    return { estados, cidades, tipos };
}