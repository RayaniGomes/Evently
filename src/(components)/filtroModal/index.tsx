import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Forms } from "./styled";
import InputCheckbox from "../inputCheckbox";
import SetFiltro from "@/help/filtro";
import { useEvento } from "@/stores/eventoStore";
import { formatarData } from "@/help/funcoes";

interface FiltroModalProps {
  showModal: boolean;
  toggleModal: () => void;
}

export default function FiltroModal({
  showModal,
  toggleModal,
}: FiltroModalProps) {
  const { estados, cidades, tipos } = SetFiltro();
  const { filtroData, filtroEstado, filtroCidade, filtroTipo } = useEvento();

  const limparFiltro = () => {
    filtroData(" ");
    filtroEstado("");
    filtroCidade("");
    filtroTipo("");
  };

  return (
    <Modal show={showModal} onHide={toggleModal}>
      <Modal.Header closeButton>
        <Modal.Title>Filtro</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Forms>
          <div className="item-form">
            <label className="border-bottom">Data:</label>
            <input
              type="date"
              onChange={(event) => {
                const dataFormatada = formatarData(event.target.value);
                filtroData(dataFormatada);
              }}
            />
          </div>
          <div className="item-form">
            <label className="border-bottom">Estado:</label>
            <div className="inputs uf">
              {estados.map((uf) => (
                <InputCheckbox
                  key={uf}
                  id={uf}
                  htmlFor={uf}
                  label={uf}
                  color="--azul-escuro"
                  onClick={() => filtroEstado(uf)}
                />
              ))}
            </div>
          </div>
          <div className="item-form">
            <label className="border-bottom">Cidade:</label>
            <div className="inputs">
              {cidades.map((cidade) => (
                <InputCheckbox
                  key={cidade}
                  id={cidade}
                  htmlFor={cidade}
                  label={cidade}
                  color="--azul-escuro"
                  onClick={() => filtroCidade(cidade)}
                />
              ))}
            </div>
          </div>
          <div className="item-form">
            <label className="border-bottom">Tipos:</label>
            <div className="inputs">
              {tipos.map((tipo) => (
                <InputCheckbox
                  key={tipo}
                  id={tipo}
                  htmlFor={tipo}
                  label={tipo}
                  color="--azul-escuro"
                  onClick={() => filtroTipo(tipo)}
                />
              ))}
            </div>
          </div>
        </Forms>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={limparFiltro}>
          Limpar
        </Button>
        <Button variant="primary" onClick={toggleModal}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
