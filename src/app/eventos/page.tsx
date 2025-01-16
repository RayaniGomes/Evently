'use client';
import Card from "@/(components)/card";
import { Filtro } from "@/(components)/filtro";
import Navbar from "@/(components)/navbar";
import Titulo from "@/(components)/titulo";
import { useEvento } from "@/stores/eventoStore";
import { useEffect, useState } from "react";
import { Pesquisar, Section } from "./styled";
import FiltroModal from "@/(components)/filtroModal";
import Footer from "@/(components)/footer";

export default function Eventos() {
    const { eventos, getEventos } = useEvento();
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    useEffect(() => {
        getEventos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <main>
            <Navbar />
            <div style={{ marginTop: "8rem" }}>
                <Titulo
                    titulo="Eventos"
                    border="--azul-escuro"
                />
                <Pesquisar>
                    <div className="form">
                        <input type="search" placeholder="Pesquisar" />
                        <button type="submit" className="bi bi-search" />
                    </div>
                    <button className="bi bi-funnel-fill filtro" onClick={toggleModal}/>
                    <FiltroModal 
                        showModal={showModal}
                        toggleModal={toggleModal}
                    />
                </Pesquisar>
                <Section>
                    <Filtro />
                    <div className="cards">
                        {eventos.map((evento) => (
                            <Card key={evento.id} evento={evento} />
                        ))}
                    </div>
                </Section>
            </div>
            <Footer />
        </main>
    );
}