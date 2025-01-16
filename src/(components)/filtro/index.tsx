import { useEvento } from "@/stores/eventoStore";
import InputCheckbox from "../inputCheckbox";
import { Section } from "./styled";
import { useEffect } from "react";
import { Evento } from "@/interfaces";

export function Filtro() {
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

    return (
        <Section>
            <h5>Filtro</h5>

            <form action="">
                <div className="item-form">
                    <label htmlFor="">Data: <hr /></label>
                    <input type="date" />
                </div>
                <div className="item-form">
                    <label htmlFor="">Esatado: <hr /></label>
                    <div className="inputs">
                        {estados.map((uf) => (
                            <InputCheckbox key={uf} id={uf} htmlFor={uf} label={uf} />
                        ))}
                    </div>
                </div>
                <div className="item-form">
                    <label htmlFor="">Cidade: <hr /></label>
                    <div className="inputs">
                        {cidades.map((cidade) => (
                            <InputCheckbox key={cidade} id={cidade} htmlFor={cidade} label={cidade} />
                        ))}
                    </div>
                </div>
                <div className="item-form">
                    <label htmlFor="">Tipos: <hr /></label>
                    <div className="inputs">
                        {tipos.map((tipo) => (
                            <InputCheckbox key={tipo} id={tipo} htmlFor={tipo} label={tipo} />
                        ))}
                    </div>
                </div>
            </form>

        </Section >
    );
}