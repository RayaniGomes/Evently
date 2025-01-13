'use client';
import Indice from "@/(components)/indece";
import Navbar from "@/(components)/navbar";
import Sobre from "@/(components)/sobreNos";
import { Container } from "./styled";

export default function QuemSomos() {
    return (
        <main>
            <Navbar />
            <Sobre />
            <Container>
                <div className="indices">
                    <Indice indice={1000} titulo="Eventos Cadastrados" />
                    <Indice indice={1000} titulo="Cadastros Realizados" />
                    <Indice indice={1000} titulo="Inscrições em Eventos" />
                </div> 
            </Container>
        </main>
    );
}