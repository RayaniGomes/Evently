import { useEvento } from "@/stores/eventoStore";
import InputCheckbox from "../inputCheckbox";
import { Section } from "./styled";
import SetFiltro from "@/help/filtro";

export function Filtro() {
    const { estados, cidades, tipos } = SetFiltro();
    const { filtroData, filtroEstado, filtroCidade, filtroTipo } = useEvento();

    return (
        <Section>
            <h5>Filtro</h5>

            <form action="">
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
            </form>

        </Section >
    );
}