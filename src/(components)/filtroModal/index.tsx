import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Forms } from './styled';
import InputCheckbox from '../inputCheckbox';
import SetFiltro from '@/help/filtro';
import { useEvento } from '@/stores/eventoStore';

interface FiltroModalProps {
    showModal: boolean;
    toggleModal: () => void;
}

export default function FiltroModal({ showModal, toggleModal }: FiltroModalProps) {
    const { estados, cidades, tipos } = SetFiltro();
    const { filtroData, filtroEstado, filtroCidade, filtroTipo } = useEvento();

    return (
        <Modal
            show={showModal}
            onHide={toggleModal}
        >
            <Modal.Header closeButton>
                <Modal.Title>Filtro</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Forms>
                    <div className="item-form">
                        <label htmlFor="">Data: <hr /></label>
                        <input type="date" onChange={(event) => filtroData(event.target.value)} />
                    </div>
                    <div className="item-form">
                        <label htmlFor="">Esatado: <hr /></label>
                        <div className="inputs">
                            {estados.map((uf) => (
                                <InputCheckbox key={uf} id={uf} htmlFor={uf} label={uf} onClick={() => filtroEstado(uf)} />
                            ))}
                        </div>
                    </div>
                    <div className="item-form">
                        <label htmlFor="">Cidade: <hr /></label>
                        <div className="inputs">
                            {cidades.map((cidade) => (
                                <InputCheckbox key={cidade} id={cidade} htmlFor={cidade} label={cidade} onClick={() => filtroCidade(cidade)} />
                            ))}
                        </div>
                    </div>
                    <div className="item-form">
                        <label htmlFor="">Tipos: <hr /></label>
                        <div className="inputs">
                            {tipos.map((tipo) => (
                                <InputCheckbox key={tipo} id={tipo} htmlFor={tipo} label={tipo} onClick={() => filtroTipo(tipo)} />
                            ))}
                        </div>
                    </div>
                </Forms>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary">Filtrar</Button>
            </Modal.Footer>
        </Modal>
    );
}