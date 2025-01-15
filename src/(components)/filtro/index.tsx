import { Section } from "./styled";

export function Filtro() {
    return (
        <Section>
            <h5>Filtro</h5>

            <form action="">
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
            </form>

        </Section>
    );
}