import { FiltroModalProps } from "@/interfaces";
import { Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import { UFS_VALIDAS } from "@/schema/evento.schema";
import { Forms, GrupoInput } from "./styled";
import { useEvento } from "@/stores/eventoStore";

export default function ModalUpdateEvento({
  showModal,
  toggleModal,
  evento,
}: FiltroModalProps) {
  const { patchEvento, isLoading } = useEvento();
  const [nome, setNome] = useState("");
  const [data, setData] = useState("");
  const [horario, setHorario] = useState("");
  const [maxPessoas, setMaxPessoas] = useState<number>();
  const [tipo, setTipo] = useState("");
  const [imagem, setImagem] = useState("");
  const [descricao, setDescricao] = useState("");
  const [local, setLocal] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");
  const [complemento, setComplemento] = useState("");

  useEffect(() => {
    if (evento) {
      setNome(evento.nome);
      setData(evento.data);
      setHorario(evento.horario);
      setMaxPessoas(evento.maxPessoas);
      setTipo(evento.tipo);
      setImagem(evento.imagem || "/sem-imagem.svg");
      setDescricao(evento.descricao);
      setLocal(evento.local);
      setEndereco(evento.endereco);
      setNumero(evento.numero.toString() || "");
      setBairro(evento.bairro);
      setCidade(evento.cidade);
      setUf(evento.uf);
      setComplemento(evento.complemento || "");
    }
  }, [evento]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      nome: nome,
      data: data,
      horario: horario,
      maxPessoas: maxPessoas ? Number(maxPessoas) : 0,
      tipo: tipo,
      imagem: imagem,
      descricao: descricao,
      local: local,
      endereco: endereco,
      numero: numero ? Number(numero) : null,
      bairro: bairro,
      cidade: cidade,
      uf: uf,
      complemento: complemento,
      criador: evento?.criador,
    };

    patchEvento(evento?._id as string, formData)
      .then(() => {
        toggleModal();
      });
  };
  return (
    <Modal size="lg" show={showModal} onHide={toggleModal}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Evento</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Forms onSubmit={onSubmit}>
          <div className={isLoading ? "loading" : "notLoading"}>
            <GrupoInput>
              <label htmlFor="nomeEvento">Nome do evento</label>
              <div className="input">
                <input
                  id="nomeEvento"
                  type="text"
                  placeholder="Nome do Evento"
                  defaultValue={evento?.nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </div>
            </GrupoInput>

            <div className="input-duplo">
              <GrupoInput>
                <label htmlFor="dataEvento">Data do evento</label>
                <div className="input">
                  <input
                    id="dataEvento"
                    type="date"
                    defaultValue={evento?.data}
                    onChange={(e) => setData(e.target.value)}
                  />
                </div>
              </GrupoInput>

              <GrupoInput>
                <label htmlFor="horario">Hora do evento</label>
                <div className="input">
                  <input
                    id="horario"
                    type="time"
                    defaultValue={evento?.horario}
                    onChange={(e) => setHorario(e.target.value)}
                  />
                </div>
              </GrupoInput>

              <GrupoInput>
                <label htmlFor="maxPessoas">Qtd. maxima de pessoas</label>
                <div className="input">
                  <input
                    type="number"
                    id="maxPessoas"
                    placeholder="2000"
                    defaultValue={evento?.maxPessoas}
                    onChange={(e) =>
                      setMaxPessoas(
                        e.target.value ? Number(e.target.value) : undefined
                      )
                    }
                    min="1"
                  />
                </div>
              </GrupoInput>
            </div>

            <div className="input-duplo">
              <GrupoInput>
                <label htmlFor="tipoEvento">tipo de evento</label>
                <div className="input">
                  <input
                    id="tipoEvento"
                    type="text"
                    placeholder="Show"
                    defaultValue={evento?.tipo}
                    onChange={(e) => setTipo(e.target.value)}
                  />
                </div>
              </GrupoInput>

              <GrupoInput>
                <label htmlFor="linkImagem">Link da imagem do evento</label>
                <div className="input">
                  <input
                    id="linkImagem"
                    type="text"
                    placeholder="https://exemplo.com"
                    defaultValue={evento?.imagem}
                    onChange={(e) => setImagem(e.target.value)}
                  />
                </div>
              </GrupoInput>
            </div>

            <GrupoInput>
              <label htmlFor="descricao">Descrição</label>
              <div className="descricao">
                <textarea
                  id="descricao"
                  placeholder="Descrição do Evento"
                  defaultValue={evento?.descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                />
              </div>
            </GrupoInput>
          </div>
          <div className="endereco">
            <h5>Endereço do local do evento</h5>
            <div className={isLoading ? "loading" : "notLoading"}>
              <GrupoInput>
                <label htmlFor="local">Local do evento</label>
                <div className="input">
                  <input
                    id="local"
                    type="text"
                    placeholder="Local do Evento"
                    defaultValue={evento?.local}
                    onChange={(e) => setLocal(e.target.value)}
                  />
                </div>
              </GrupoInput>

              <div className="input-duplo">
                <GrupoInput>
                  <label htmlFor="endereco">Endereço</label>
                  <div className="input">
                    <input
                      id="endereco"
                      type="text"
                      placeholder="R. do Evento"
                      defaultValue={evento?.endereco}
                      onChange={(e) => setEndereco(e.target.value)}
                    />
                  </div>
                </GrupoInput>

                <GrupoInput>
                  <label htmlFor="numero">Número</label>
                  <div className="input">
                    <input
                      type="text"
                      placeholder="123"
                      defaultValue={evento?.numero}
                      onChange={(e) =>
                        setNumero(
                          evento?.numero ? evento.numero.toString() : ""
                        )
                      }
                    />
                  </div>
                </GrupoInput>
              </div>

              <div className="input-duplo">
                <GrupoInput>
                  <label htmlFor="bairro">Bairro</label>
                  <div className="input">
                    <input
                      id="bairro"
                      type="text"
                      placeholder="Bairro do Evento"
                      defaultValue={evento?.bairro}
                      onChange={(e) => setBairro(e.target.value)}
                    />
                  </div>
                </GrupoInput>

                <GrupoInput>
                  <label htmlFor="cidade">Cidade</label>
                  <div className="input">
                    <input
                      id="cidade"
                      type="text"
                      placeholder="Cidade do Evento"
                      defaultValue={evento?.cidade}
                      onChange={(e) => setCidade(e.target.value)}
                    />
                  </div>
                </GrupoInput>
              </div>

              <div className="input-duplo">
                <GrupoInput>
                  <label htmlFor="uf">Estado</label>
                  <div className="input">
                    <select
                      id="uf"
                      defaultValue={evento?.uf}
                      onChange={(e) => setUf(e.target.value)}
                    >
                      <option value="" disabled>
                        Selecionar
                      </option>
                      {UFS_VALIDAS.map((uf) => (
                        <option key={uf} value={uf}>
                          {uf}
                        </option>
                      ))}
                    </select>
                  </div>
                </GrupoInput>

                <GrupoInput>
                  <label htmlFor="complemento">Complemento</label>
                  <div className="input">
                    <input
                      id="complemento"
                      type="text"
                      placeholder="Proximo..."
                      defaultValue={evento?.complemento}
                      onChange={(e) => setComplemento(e.target.value)}
                    />
                  </div>
                </GrupoInput>
              </div>
            </div>
          </div>

          <button type="submit" className="btn-form" disabled={isLoading}>
            {isLoading ? "Enviando..." : "Enviar"}
          </button>
        </Forms>
      </Modal.Body>
    </Modal>
  );
}
