import { PropsForm, User } from "@/interfaces";
import {
  createDataEvent,
  eventSchema,
  valid_state,
} from "@/schema/event.schema";
import { useEvent } from "@/stores/eventStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormEvent, GrupoInput } from "./styled";

export default function FormNewEvent({ user }: PropsForm) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<createDataEvent>({ resolver: zodResolver(eventSchema) });
  const { postEvent, isLoading } = useEvent();

  const onSubmit = async (date: createDataEvent) => {
    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    const dataEvent = {
      ...date,
      creator: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    };

    postEvent(dataEvent, reset);
  };

  return (
    <FormEvent onSubmit={handleSubmit(onSubmit)}>
      <div className={isLoading ? "loading" : "not-loading"}>
        <GrupoInput>
          <label htmlFor="nomeEvent">Name do evento</label>
          <div className="input">
            <input
              id="nomeEvent"
              type="text"
              placeholder="Name do Evento"
              {...register("name")}
            />
          </div>
        </GrupoInput>
        {errors.name && <span>{errors.name.message}</span>}

        <div className="input-duplo">
          <div className="w-100 d-flex flex-column gap-3">
            <GrupoInput>
              <label htmlFor="dataEvent">Data do evento</label>
              <div className="input">
                <input id="dataEvent" type="date" {...register("date")} />
              </div>
            </GrupoInput>
            {errors.date && <span>{errors.date.message}</span>}
          </div>

          <div className="w-100 d-flex flex-column gap-3">
            <GrupoInput>
              <label htmlFor="time">Hora do evento</label>
              <div className="input">
                <input id="time" type="time" {...register("time")} />
              </div>
            </GrupoInput>
            {errors.time && <span>{errors.time.message}</span>}
          </div>

          <div className="w-100 d-flex flex-column gap-3">
            <GrupoInput>
              <label htmlFor="maxPeople">Qtd. maxima de pessoas</label>
              <div className="input">
                <input
                  type="number"
                  id="maxPeople"
                  placeholder="2000"
                  {...register("maxPeople", { valueAsNumber: true })}
                  min="1"
                />
              </div>
            </GrupoInput>
            {errors.maxPeople && <span>{errors.maxPeople.message}</span>}
          </div>
        </div>

        <div className="input-duplo">
          <div className="w-100 d-flex flex-column gap-3">
            <GrupoInput>
              <label htmlFor="tipoEvent">Categoria do evento</label>
              <div className="input">
                <input
                  id="tipoEvent"
                  type="text"
                  placeholder="Show"
                  {...register("category")}
                />
              </div>
            </GrupoInput>
            {errors.category && <span>{errors.category.message}</span>}
          </div>

          <div className="w-100 d-flex flex-column gap-3">
            <GrupoInput>
              <label htmlFor="linkImagem">Link da imagem do evento</label>
              <div className="input">
                <input
                  id="linkImagem"
                  type="text"
                  placeholder="https://exemplo.com"
                  {...register("image")}
                />
              </div>
            </GrupoInput>
            {errors.image && <span>{errors.image.message}</span>}
          </div>
        </div>

        <GrupoInput>
          <label htmlFor="description">Descrição</label>
          <div className="description">
            <textarea
              id="description"
              placeholder="Descrição do Evento"
              {...register("description")}
            />
          </div>
        </GrupoInput>
        {errors.description && <span>{errors.description.message}</span>}
      </div>
      <div className="address">
        <h5>Endereço do location do evento</h5>
        <div className={isLoading ? "loading" : "not-loading"}>
          <GrupoInput>
            <label htmlFor="location">Location do evento</label>
            <div className="input">
              <input
                id="location"
                type="text"
                placeholder="Location do Event"
                {...register("location")}
              />
            </div>
          </GrupoInput>
          {errors.location && <span>{errors.location.message}</span>}

          <div className="input-duplo">
            <div className="w-100 d-flex flex-column gap-3">
              <GrupoInput>
                <label htmlFor="address">Endereço</label>
                <div className="input">
                  <input
                    id="address"
                    type="text"
                    placeholder="R. do Event"
                    {...register("address")}
                  />
                </div>
              </GrupoInput>
              {errors.address && <span>{errors.address.message}</span>}
            </div>

            <div className="w-100 d-flex flex-column gap-3">
              <GrupoInput>
                <label htmlFor="number">Número</label>
                <div className="input">
                  <input
                    type="text"
                    placeholder="123"
                    {...register("number")}
                  />
                </div>
              </GrupoInput>
              {errors.number && <span>{errors.number.message}</span>}
            </div>
          </div>

          <div className="input-duplo">
            <div className="w-100 d-flex flex-column gap-3">
              <GrupoInput>
                <label htmlFor="neighborhood">Bairro</label>
                <div className="input">
                  <input
                    id="neighborhood"
                    type="text"
                    placeholder="Bairro do Evento"
                    {...register("neighborhood")}
                  />
                </div>
              </GrupoInput>
              {errors.neighborhood && (
                <span>{errors.neighborhood.message}</span>
              )}
            </div>

            <div className="w-100 d-flex flex-column gap-3">
              <GrupoInput>
                <label htmlFor="city">Cidade</label>
                <div className="input">
                  <input
                    id="city"
                    type="text"
                    placeholder="Cidade do Evento"
                    {...register("city")}
                  />
                </div>
              </GrupoInput>
              {errors.city && <span>{errors.city.message}</span>}
            </div>
          </div>

          <div className="input-duplo">
            <div className="w-100 d-flex flex-column gap-3">
              <GrupoInput>
                <label htmlFor="state">Estado</label>
                <div className="input">
                  <select id="state" defaultValue="" {...register("state")}>
                    <option value="" disabled>
                      Selecionar
                    </option>
                    {valid_state.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
              </GrupoInput>
              {errors.state && <span>{errors.state.message}</span>}
            </div>

            <div className="w-100 d-flex flex-column gap-3">
              <GrupoInput>
                <label htmlFor="complement">Complemento</label>
                <div className="input">
                  <input
                    id="complement"
                    type="text"
                    placeholder="Proximo..."
                    {...register("complement")}
                  />
                </div>
              </GrupoInput>
              {errors.complement && <span>{errors.complement.message}</span>}
            </div>
          </div>
        </div>
      </div>

      <button type="submit" className="btn-form" disabled={isLoading}>
        {isLoading ? "Enviando..." : "Enviar"}
      </button>
    </FormEvent>
  );
}
