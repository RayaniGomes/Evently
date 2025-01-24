import { useEvento } from "@/stores/eventoStore";
import InputCheckbox from "../inputCheckbox";
import { Section } from "./styled";
import SetFiltro from "@/help/funcaoFiltro";
import { formatarData } from "@/help/funcoes";

export function Filtro() {
  const { estados, cidades, tipos } = SetFiltro();
  const { filtroData, filtroEstado, filtroCidade, filtroTipo } = useEvento();

  const limparFiltro = () => {
    filtroData(" ");
    filtroEstado("");
    filtroCidade("");
    filtroTipo("");
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
            onChange={(event) => {
              const dataFormatada = formatarData(event.target.value);
              filtroData(dataFormatada);
            }}
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
                onClick={() => filtroEstado(uf)}
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
                onClick={() => filtroCidade(cidade)}
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
                onClick={() => filtroTipo(tipo)}
              />
            ))}
          </div>
        </div>
      </form>
    </Section>
  );
}
