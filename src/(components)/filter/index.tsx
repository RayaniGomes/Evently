"use client";
import { useEvento } from "@/stores/eventStore";
import InputCheckbox from "../inputCheckbox";
import { Section } from "./styled";
import SetFiltro from "@/help/functionFilter";

export function Filtro() {
  const { estados, cidades, tipos, data } = SetFiltro();
  const { filtrarEventos } = useEvento();

  const limparFiltro = () => {
    filtrarEventos({});
  };

  return (
    <Section>
      <form action={limparFiltro}>
        <div className="header">
          <h5>Filtro</h5>
          <button>Limpar</button>
        </div>

        <div className="item-form">
          <label htmlFor="">
            Data: <hr />
          </label>
          <input
            type="date"
            onChange={(e) => filtrarEventos({ data: e.target.value })}
          />
        </div>
        <div className="item-form">
          <label htmlFor="">
            Estado: <hr />
          </label>
          <div className="inputs uf">
            {estados.map((uf) => (
              <InputCheckbox
                key={uf}
                id={uf}
                htmlFor={uf}
                label={uf}
                color="--branco"
                onChange={() => filtrarEventos({ uf })}
              />
            ))}
          </div>
        </div>
        <div className="item-form">
          <label htmlFor="">
            Cidade: <hr />
          </label>
          <div className="inputs cidade">
            {cidades.map((cidade) => (
              <InputCheckbox
                key={cidade}
                id={cidade}
                htmlFor={cidade}
                label={cidade}
                color="--branco"
                onChange={() => filtrarEventos({ cidade })}
              />
            ))}
          </div>
        </div>
        <div className="item-form tipo">
          <label htmlFor="">
            Tipos: <hr />
          </label>
          <div className="inputs">
            {tipos.map((tipo) => (
              <InputCheckbox
                key={tipo}
                id={tipo}
                htmlFor={tipo}
                label={tipo}
                color="--branco"
                onChange={() => filtrarEventos({ tipo })}
              />
            ))}
          </div>
        </div>
      </form>
    </Section>
  );
}
