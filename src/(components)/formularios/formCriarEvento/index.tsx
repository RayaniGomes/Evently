import { FormEvento, GrupoInput } from "./styled";

export default function FormCriarEvento() {
  return (
    <FormEvento>
      <GrupoInput>
        <label htmlFor="">Nome do evento</label>
        <div className="input">
          <input type="text" placeholder="Nome do Evento" />
        </div>
      </GrupoInput>
      <div className="input-duplo">
        <GrupoInput>
          <label htmlFor="">Data do evento</label>
          <div className="input">
            <input type="date" />
          </div>
        </GrupoInput>
        <GrupoInput>
          <label htmlFor="">Qtd. maxima de pessoas</label>
          <div className="input">
            <input type="number" placeholder="2000" />
          </div>
        </GrupoInput>
      </div>
      <GrupoInput>
        <label htmlFor="">tipo de evento</label>
        <div className="input">
          <input type="text" placeholder="Show" />
        </div>
      </GrupoInput>
      <GrupoInput>
        <label htmlFor="">Descrição</label>
        <div className="input">
          <textarea placeholder="Descrição do Evento" />
        </div>
      </GrupoInput>

      <div className="endereco">
        <h5>Endereço do local do evento</h5>
        <GrupoInput>
          <label htmlFor="">Local do evento</label>
          <div className="input">
            <input type="text" placeholder="Local do Evento" />
          </div>
        </GrupoInput>
        <div className="input-duplo">
          <GrupoInput>
            <label htmlFor="">Endereço</label>
            <div className="input">
              <input type="text" placeholder="R. do Evento" />
            </div>
          </GrupoInput>
          <GrupoInput>
            <label htmlFor="">Número</label>
            <div className="input">
              <input type="text" placeholder="123" />
            </div>
          </GrupoInput>
        </div>
        <div className="input-duplo">
          <GrupoInput>
            <label htmlFor="">Bairro</label>
            <div className="input">
              <input type="text" placeholder="Bairro do Evento" />
            </div>
          </GrupoInput>
          <GrupoInput>
            <label htmlFor="">Cidade</label>
            <div className="input">
              <input type="text" placeholder="Cidade do Evento" />
            </div>
          </GrupoInput>
        </div>
        <div className="input-duplo">
          <GrupoInput>
            <label htmlFor="">Estado</label>
            <div className="input">
              <input type="text" placeholder="Estado do Evento" />
            </div>
          </GrupoInput>
          <GrupoInput>
            <label htmlFor="">Complemento</label>
            <div className="input">
              <input type="text" placeholder="Proximo..." />
            </div>
          </GrupoInput>
        </div>
      </div>

      <button type="submit" className="btn-form">
        Atualizar
      </button>
    </FormEvento>
  );
}
