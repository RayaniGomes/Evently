import {
  createDataEvento,
  eventoSchema,
  UFS_VALIDAS,
} from "@/schema/evento.schema";
import { FormEvento, GrupoInput } from "./styled";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Props } from "../formUpdateUsuario";
import { useState } from "react";
import api from "@/service/api";
import { toast } from "react-toastify";

export default function FormCriarEvento({ usuario }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<createDataEvento>({ resolver: zodResolver(eventoSchema) });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: createDataEvento) => {
    setIsLoading(true);

    if (!usuario) {
      throw new Error("Usuário não encontrado");
    }

    const dadosEvento = {
      ...data,
      criador: usuario._id,
    };

    await api
      .post("/eventos", dadosEvento)
      .then((response) => {
        if (response.status === 201) {
          toast.success("Evento criado com sucesso!");
          reset();
        } else {
          toast.error("Erro ao criar o evento, tente novamente!");
        }
      })
      .catch(() => {
        toast.error("Erro ao criar o evento, tente novamente!");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <FormEvento onSubmit={handleSubmit(onSubmit)}>
      <GrupoInput>
        <label htmlFor="nomeEvento">Nome do evento</label>
        <div className="input">
          <input
            id="nomeEvento"
            type="text"
            placeholder="Nome do Evento"
            {...register("nome")}
          />
        </div>
      </GrupoInput>
      {errors.nome && <span>{errors.nome.message}</span>}

      <div className="input-duplo">
        <div className="w-100 d-flex flex-column gap-3">
          <GrupoInput>
            <label htmlFor="dataEvento">Data do evento</label>
            <div className="input">
              <input id="dataEvento" type="date" {...register("data")} />
            </div>
          </GrupoInput>
          {errors.data && <span>{errors.data.message}</span>}
        </div>

        <div className="w-100 d-flex flex-column gap-3">
          <GrupoInput>
            <label htmlFor="horario">Hora do evento</label>
            <div className="input">
              <input id="horario" type="time" {...register("horario")} />
            </div>
          </GrupoInput>
          {errors.horario && <span>{errors.horario.message}</span>}
        </div>

        <div className="w-100 d-flex flex-column gap-3">
          <GrupoInput>
            <label htmlFor="maxPessoas">Qtd. maxima de pessoas</label>
            <div className="input">
              <input
                type="number"
                id="maxPessoas"
                placeholder="2000"
                {...register("maxPessoas")}
              />
            </div>
          </GrupoInput>
          {errors.maxPessoas && <span>{errors.maxPessoas.message}</span>}
        </div>
      </div>

      <div className="input-duplo">
        <div className="w-100 d-flex flex-column gap-3">
          <GrupoInput>
            <label htmlFor="tipoEvento">tipo de evento</label>
            <div className="input">
              <input
                id="tipoEvento"
                type="text"
                placeholder="Show"
                {...register("tipo")}
              />
            </div>
          </GrupoInput>
          {errors.tipo && <span>{errors.tipo.message}</span>}
        </div>

        <div className="w-100 d-flex flex-column gap-3">
          <GrupoInput>
            <label htmlFor="linkImagem">Link da imagem do evento</label>
            <div className="input">
              <input
                id="linkImagem"
                type="text"
                placeholder="https://exemplo.com"
                {...register("imagem")}
              />
            </div>
          </GrupoInput>
          {errors.imagem && <span>{errors.imagem.message}</span>}
        </div>
      </div>

      <GrupoInput>
        <label htmlFor="descricao">Descrição</label>
        <div className="descricao">
          <textarea
            id="descricao"
            placeholder="Descrição do Evento"
            {...register("descricao")}
          />
        </div>
      </GrupoInput>
      {errors.descricao && <span>{errors.descricao.message}</span>}

      <div className="endereco">
        <h5>Endereço do local do evento</h5>

        <GrupoInput>
          <label htmlFor="local">Local do evento</label>
          <div className="input">
            <input
              id="local"
              type="text"
              placeholder="Local do Evento"
              {...register("local")}
            />
          </div>
        </GrupoInput>
        {errors.local && <span>{errors.local.message}</span>}

        <div className="input-duplo">
          <div className="w-100 d-flex flex-column gap-3">
            <GrupoInput>
              <label htmlFor="endereco">Endereço</label>
              <div className="input">
                <input
                  id="endereco"
                  type="text"
                  placeholder="R. do Evento"
                  {...register("endereco")}
                />
              </div>
            </GrupoInput>
            {errors.endereco && <span>{errors.endereco.message}</span>}
          </div>

          <div className="w-100 d-flex flex-column gap-3">
            <GrupoInput>
              <label htmlFor="numero">Número</label>
              <div className="input">
                <input type="text" placeholder="123" {...register("numero")} />
              </div>
            </GrupoInput>
            {errors.numero && <span>{errors.numero.message}</span>}
          </div>
        </div>

        <div className="input-duplo">
          <div className="w-100 d-flex flex-column gap-3">
            <GrupoInput>
              <label htmlFor="bairro">Bairro</label>
              <div className="input">
                <input
                  id="bairro"
                  type="text"
                  placeholder="Bairro do Evento"
                  {...register("bairro")}
                />
              </div>
            </GrupoInput>
            {errors.bairro && <span>{errors.bairro.message}</span>}
          </div>

          <div className="w-100 d-flex flex-column gap-3">
            <GrupoInput>
              <label htmlFor="cidade">Cidade</label>
              <div className="input">
                <input
                  id="cidade"
                  type="text"
                  placeholder="Cidade do Evento"
                  {...register("cidade")}
                />
              </div>
            </GrupoInput>
            {errors.cidade && <span>{errors.cidade.message}</span>}
          </div>
        </div>

        <div className="input-duplo">
          <div className="w-100 d-flex flex-column gap-3">
            <GrupoInput>
              <label htmlFor="uf">Estado</label>
              <div className="input">
                <select id="uf" defaultValue="" {...register("uf")}>
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
            {errors.uf && <span>{errors.uf.message}</span>}
          </div>

          <div className="w-100 d-flex flex-column gap-3">
            <GrupoInput>
              <label htmlFor="complemento">Complemento</label>
              <div className="input">
                <input
                  id="complemento"
                  type="text"
                  placeholder="Proximo..."
                  {...register("complemento")}
                />
              </div>
            </GrupoInput>
            {errors.complemento && <span>{errors.complemento.message}</span>}
          </div>
        </div>
      </div>

      <button type="submit" className="btn-form" disabled={isLoading}>
        {isLoading ? "Enviando..." : "Enviar"}
      </button>
    </FormEvento>
  );
}
