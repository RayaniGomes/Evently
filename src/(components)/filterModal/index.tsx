import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Forms } from "./styled";
import InputCheckbox from "../inputCheckbox";
import SetFilter from "@/utils/filters";
import { useEvent } from "@/stores/eventStore";
import { FilterModalProps } from "@/interfaces";

export default function FilterModal({
  showModal,
  toggleModal,
}: FilterModalProps) {
  const { states = [], city = [], category = [] } = SetFilter() || {};
  const { filterEvents } = useEvent();

  const cleanFilter = () => {
    filterEvents({});
  };

  return (
    <Modal show={showModal} onHide={toggleModal}>
      <Modal.Header closeButton>
        <Modal.Title>Filtro</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Forms>
          <div className="item-form">
            <label>Data:</label>
            <input
              type="date"
              onChange={(e) => filterEvents({ date: e.target.value })}
            />
          </div>
          <div className="item-form">
            <label>Estado:</label>
            <div className="inputs state">
              {states.map((state) => (
                <InputCheckbox
                  key={state}
                  id={state}
                  htmlFor={state}
                  label={state}
                  color="--blue-dark"
                  onChange={() => filterEvents({ state })}
                />
              ))}
            </div>
          </div>
          <div className="item-form">
            <label>Cidade:</label>
            <div className="inputs">
              {city.map((city) => (
                <InputCheckbox
                  key={city}
                  id={city}
                  htmlFor={city}
                  label={city}
                  color="--blue-dark"
                  onChange={() => filterEvents({ city })}
                />
              ))}
            </div>
          </div>
          <div className="item-form">
            <label>Categoria:</label>
            <div className="inputs">
              {category.map((category) => (
                <InputCheckbox
                  key={category}
                  id={category}
                  htmlFor={category}
                  label={category}
                  color="--blue-dark"
                  onChange={() => filterEvents({ category })}
                />
              ))}
            </div>
          </div>
        </Forms>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={cleanFilter}>
          Limpar
        </Button>
        <Button variant="primary" onClick={toggleModal}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
