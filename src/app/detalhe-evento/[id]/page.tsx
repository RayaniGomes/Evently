"use client";
import { use, useEffect, useState } from "react";
import Image from "next/image";
import { Detalhe, Section } from "./styled";
import Compartilhar from "@/(components)/compartinhar";
import { formatarData } from "@/help/funcoesUteis";
import { useSession } from "next-auth/react";
import { useInscritos } from "@/stores/inscricoesStore";
import ModalUpdateEvento from "@/(components)/modalUlpdateEvento";
import { useEvento } from "@/stores/eventoStore";

type Params = Promise<{ id: string }>;

export default function DetalheEvento(props: { params: Params }) {
  const urlParams = use(props.params);
  const [showModal, setShowModal] = useState(false);
  const { eventos, getEventoId, deleteEvento } = useEvento();
  const { inscricoes } = useInscritos();
  const { data: session } = useSession();

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const validacaoInscricoes = inscricoes.filter(
    (inscricao) => inscricao.inscritos.email === session?.user.email
  );

  useEffect(() => {
    getEventoId(urlParams.id);
  }, [urlParams.id]);

  const evento = eventos.length > 0 ? eventos[0] : null;

  if (!evento) {
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
              $url={`/detalhe-evento/${evento._id}`}
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
              {evento.descricao !== "" && (
                <div>
                  <h6 className="label">Descrição:</h6>
                  <div className="d-flex gap-2">
                    <i className="bi bi-file-earmark-text-fill" />
                    <h6>{evento.descricao}</h6>
                  </div>
                </div>
              )}
              <div>
                <h6 className="label">Qtd. máxima de pessoas:</h6>
                <div className="d-flex gap-2">
                  <i className="bi bi-people-fill" />
                  <h6>{evento.maxPessoas}</h6>
                </div>
              </div>
              {evento.criador?._id === session?.user.id && (
                <div>
                  <h6 className="label">Total de inscritos:</h6>
                  <div className="d-flex gap-2">
                    <i className="bi bi-people-fill" />
                    <h6>
                      {
                        inscricoes.filter(
                          (inscricao) => inscricao.evento.id._id === evento._id
                        ).length
                      }
                    </h6>
                  </div>
                </div>
              )}
            </div>

            {evento.criador?.email === session?.user.email ? (
              <div className="btnContainer">
                <button
                  className="btnInscricao"
                  onClick={() => {
                    if (
                      confirm("Tem certeza que deseja cancelar este evento?")
                    ) {
                      deleteEvento(evento._id);
                    }
                  }}
                >
                  Cancelar evento
                </button>
                <button className="btnInscricao" onClick={toggleModal}>
                  Editar evento
                </button>
                <ModalUpdateEvento
                  showModal={showModal}
                  toggleModal={toggleModal}
                  evento={evento}
                />
              </div>
            ) : validacaoInscricoes ? (
              <div className="btnContainer">
                <button className="btnInscricao">Inscreva-se</button>
              </div>
            ) : (
              <div className="btnContainer">
                <button className="btnInscricao">Cancelar inscrição</button>
              </div>
            )}
          </div>
        </Detalhe>
      </Section>
    </>
  );
}
