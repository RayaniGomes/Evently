"use client";
import { use, useEffect, useState } from "react";
import Image from "next/image";
import { Detalhe, Section } from "./styled";
import { Evento } from "@/interfaces";
import api from "@/service/api";
import Compartilhar from "@/(components)/compartinhar";
import { useEvento } from "@/stores/eventoStore";
import { formatarData } from "@/help/funcoesUteis";
import ModalUpdateEvento from "@/(components)/modalUlpdateEvento";

type Params = Promise<{ id: string }>;

export default function DetalheEventoCriador(props: { params: Params }) {
  const urlParams = use(props.params);
  const { deleteEvento } = useEvento();
  const [evento, setEvento] = useState<Evento>({} as Evento);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const getEventoDetalhe = async () => {
    await api.get(`/eventos/${urlParams.id}/`).then((response) => {
      setEvento(response.data);
    });
  };

  useEffect(() => {
    getEventoDetalhe();
  }, [urlParams.id]);

  if (!evento._id) {
    return (
      <Section>
        <h2 className="">Carregando...</h2>
      </Section>
    );
  }

  return (
    <>
      <Section>
        <h1>{evento.nome}</h1>
        <Detalhe>
          <div className="img-container">
            <Image
              src={evento.imagem ?? "/sem-imagem.svg"}
              alt={evento.nome}
              width={500}
              height={500}
              priority
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
              $url={`/detalhe-evento-criador/${evento._id}`} 
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
              </div>
              <div>
                <h6 className="label">Data:</h6>
                <div className="d-flex gap-2">
                  <i className="bi bi-calendar-event-fill" />
                  <h6>
                    {formatarData(evento.data)}, às {evento.horario}
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
                  <h6>{evento.maxPessoas}</h6>
                </div>
              </div>
              <div>
                <h6 className="label">Total de inscritos:</h6>
                <div className="d-flex gap-2">
                  <i className="bi bi-people-fill" />
                  <h6>{evento.inscritos?.length || 0}</h6>
                </div>
              </div>
            </div>
            <div className="btnContainer">
              <button
                className="btnInscricao"
                onClick={() => {
                  if (confirm("Tem certeza que deseja cancelar este evento?")) {
                    deleteEvento(evento._id);
                  }
                }}
              >
                Cancelar evento
              </button>
              <button className="btnInscricao" onClick={toggleModal} >Editar evento</button>
              <ModalUpdateEvento showModal={showModal} toggleModal={toggleModal} evento={evento} getUsuario={getEventoDetalhe}/>
            </div>
          </div>
        </Detalhe>
      </Section>
    </>
  );
}
