import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Forms } from './styled';

interface FiltroModalProps {
    showModal: boolean;
    toggleModal: () => void;
}

export default function FiltroModal({ showModal, toggleModal }: FiltroModalProps) {
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
                        <input type="date" />
                    </div>
                    <div className="item-form">
                        <label htmlFor="">Esatado: <hr /></label>
                        <label htmlFor="">
                            <input type="checkbox" />
                            Estado
                        </label>
                    </div>
                    <div className="item-form">
                        <label htmlFor="">Cidade: <hr /></label>
                        <label htmlFor="">
                            <input type="checkbox" />
                            Estado
                        </label>
                    </div>
                    <div className="item-form">
                        <label htmlFor="">Tipos: <hr /></label>
                        <label htmlFor="">
                            <input type="checkbox" />
                            Estado
                        </label>
                    </div>
                </Forms>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary">Filtrar</Button>
            </Modal.Footer>
        </Modal>
    );
}