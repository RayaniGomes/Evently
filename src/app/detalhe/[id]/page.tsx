'use client';
import Footer from "@/(components)/footer";
import Navbar from "@/(components)/navbar";
import { use, useEffect } from "react";
import { useEvento } from "@/stores/eventoStore";
import Image from "next/image";
import { Detalhe, Section } from "./styled";
import { toast } from "react-toastify";

type Params = Promise<{ id: string }>;

export default function DetalheEvento(props: { params: Params }) {
    const urlParams = use(props.params);
    const { eventos, getEventoDetalhe } = useEvento();
    const eventoID = parseInt(urlParams.id);

    useEffect(() => {
        getEventoDetalhe(eventoID);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <main>
            <Navbar />
            <Section>
                <h1>{eventos.nome}</h1>

                <Detalhe>
                    <Image
                        src={eventos.imagem}
                        alt={eventos.nome}
                        width={600}
                        height={500}
                    />

                    <div className="d-flex flex-column gap-4">
                        <div>
                            <h6 style={{ opacity: 0.5, marginBottom: 0 }}>Tipo:</h6>
                            <div className="d-flex gap-2">
                                <Image
                                    src="/FaTheaterMasks.svg"
                                    alt="Logo"
                                    width={30}
                                    height={30}
                                />
                                <h6>{eventos.tipo}</h6>
                            </div>
                        </div>
                        <div>
                            <h6 style={{ opacity: 0.5, marginBottom: 0 }}>Data:</h6>
                            <div className="d-flex gap-2">
                                <i className="bi bi-calendar-event-fill" />
                                <h6>{eventos.data}</h6>
                            </div>
                        </div>
                        <div>
                            <h6 style={{ opacity: 0.5, marginBottom: 0 }}>Local:</h6>
                            <div className="d-flex gap-2">
                                <i className="bi bi-calendar-event-fill" />
                                <div >
                                    <h6>{eventos.local}</h6>
                                    <h6>{eventos.endereco}, {eventos.numero} - {eventos.bairro}</h6>
                                    <h6>{eventos.cidade} - {eventos.uf}</h6>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h6 style={{ opacity: 0.5, marginBottom: 0 }}>Descrição:</h6>
                            <div className="d-flex gap-2">
                                <i className="bi bi-file-earmark-text-fill" />
                                <h6>{eventos.descricao}</h6>
                            </div>
                        </div>
                        <div>
                            <h6 style={{ opacity: 0.5, marginBottom: 0 }}>Qtd. máxima de pessoas:</h6>
                            <div className="d-flex gap-2">
                                <i className="bi bi-people-fill" />
                                <h6>{eventos.qtd}</h6>
                            </div>
                        </div>
                        <button>Inscreva-se</button>
                    </div>
                </Detalhe>
            </Section>
            <Footer />
        </main>
    );
}