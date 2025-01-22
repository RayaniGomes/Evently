"use client";
import Footer from "@/(components)/footer";
import Navbar from "@/(components)/navbar";
import { use, useEffect, useState } from "react";
import Image from "next/image";
import { Detalhe, Section } from "./styled";
import { toast } from "react-toastify";
import { Evento } from "@/interfaces";
import api from "@/service/api";
import Compartilhar from "@/(components)/compartinhar";

type Params = Promise<{ id: string }>;

export default function DetalheEvento(props: { params: Params }) {
  const urlParams = use(props.params);
  const [evento, setEvento] = useState<Evento>({} as Evento);
  const eventoID = parseInt(urlParams.id);

  const getEventoDetalhe = async (id: number) => {
    await api
      .get(`/eventos/${id}/`)
      .then((response) => {
        setEvento(response.data.data);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  useEffect(() => {
    getEventoDetalhe(eventoID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <Navbar />
      {evento.id == null ? (
        <Section>
          <h2 className="">Evento não encontrado</h2>
        </Section>
      ) : (
        <Section>
          <h1>{evento.nome}</h1>
          <Detalhe>
            <div className="img-container">
              <Image
                src={evento.imagem}
                alt={evento.nome}
                width={500}
                height={500}
                priority={true}
                style={{ boxShadow: "var(--drop-shadow)" }}
              />
            </div>

            <div className="info-container">
              <Compartilhar
                $bgColor="--azul-escuro"
                $color="--branco"
                $tamanho={40}
                $fontSize={16}
                $padding="1rem"
                $top={0}
                $right={0}
                $hover="--drop-shadow-azul-hover"
              />
              <div className="info">
                <div>
                  <h6 className="label">Tipo:</h6>
                  <div className="d-flex gap-2">
                    <Image
                      src="/FaTheaterMasks.svg"
                      alt="Logo"
                      width={30}
                      height={30}
                    />
                    <h6>{evento.tipo}</h6>
                  </div>
                  {window.location.pathname ===
                  `/detalhes-evento/${evento.id}` ? (
                    <h6 className="label">Compartilhe:</h6>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  <h6 className="label">Data:</h6>
                  <div className="d-flex gap-2">
                    <i className="bi bi-calendar-event-fill" />
                    <h6>
                      {evento.data}, às {evento.horario}
                    </h6>
                  </div>
                </div>
                <div>
                  <h6 className="label">Local:</h6>
                  <div className="d-flex gap-2">
                    <i className="bi bi-calendar-event-fill" />
                    <div>
                      <h6>{evento.local}</h6>
                      <h6>
                        {evento.endereco}, {evento.numero} - {evento.bairro}
                      </h6>
                      <h6>
                        {evento.cidade} - {evento.uf}
                      </h6>
                      <h6>{evento.complemento}</h6>
                    </div>
                  </div>
                </div>
                <div>
                  <h6 className="label">Descrição:</h6>
                  <div className="d-flex gap-2">
                    <i className="bi bi-file-earmark-text-fill" />
                    <h6>{evento.descricao}</h6>
                  </div>
                </div>
                <div>
                  <h6 className="label">Qtd. máxima de pessoas:</h6>
                  <div className="d-flex gap-2">
                    <i className="bi bi-people-fill" />
                    <h6>{evento.qtd}</h6>
                  </div>
                </div>
              </div>
              <button className="btnInscricao">Inscreva-se</button>
            </div>
          </Detalhe>
        </Section>
      )}
      <Footer />
    </main>
  );
}
