import { FilterModalProps } from "@/interfaces";
import { Modal } from "react-bootstrap";
import { useEffect } from "react";
import {
  createDataEvent,
  eventSchema,
  valid_state,
} from "@/schema/event.schema";
import { Forms, GrupInput } from "./styled";
import { useEvent } from "@/stores/eventStore";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function ModalUpdateEvent({
  showModal,
  toggleModal,
  event,
}: FilterModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<createDataEvent>({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      name: "",
      date: "",
      time: "",
      maxPeople: 0,
      category: "",
      image: "",
      description: "",
      location: "",
      address: "",
      number: "",
      neighborhood: "",
      city: "",
      state: "",
      complement: "",
    },
  });

  const { getEvents, getEventId, patchEvent, isLoading } = useEvent();

  useEffect(() => {
    if (event) {
      reset({
        name: event.name,
        date: event.date,
        time: event.time,
        maxPeople: event.maxPeople,
        category: event.category,
        image: event.image || "/sem-image.svg",
        description: event.description,
        location: event.location,
        address: event.address,
        number: event.number.toString() || "s/n",
        neighborhood: event.neighborhood,
        city: event.city,
        state: event.state,
        complement: event.complement || "",
      });
    }
  }, [event, reset]);

  const onSubmit = async (formData: createDataEvent) => {
    await patchEvent(event?._id as string, formData);
    toggleModal();

    if (
      window.location.pathname === "/userProfile" ||
      window.location.pathname === `/eventDetail/${event?._id}`
    ) {
      getEventId(event?._id as string);
    } else {
      getEvents();
    }
  };

  return (
    <Modal size="lg" show={showModal} onHide={toggleModal}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Evento</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Forms onSubmit={handleSubmit(onSubmit)}>
          <div className={isLoading ? "loading" : "not-loading"}>
            <GrupInput>
              <label htmlFor="nomeEvent">Nome do evento</label>
              <div className="input">
                <input id="nomeEvent" type="text" {...register("name")} />
                {errors.name && <span>{errors.name.message}</span>}
              </div>
            </GrupInput>

            <div className="input-duplo">
              <div className="w-100 d-flex flex-column gap-3">
                <GrupInput>
                  <label htmlFor="dataEvent">Data do evento</label>
                  <div className="input">
                    <input id="dataEvent" type="date" {...register("date")} />
                  </div>
                </GrupInput>
                {errors.date && <span>{errors.date.message}</span>}
              </div>

              <div className="w-100 d-flex flex-column gap-3">
                <GrupInput>
                  <label htmlFor="time">Hora do evento</label>
                  <div className="input">
                    <input id="time" type="time" {...register("time")} />
                  </div>
                </GrupInput>
                {errors.time && <span>{errors.time.message}</span>}
              </div>

              <div className="w-100 d-flex flex-column gap-3">
                <GrupInput>
                  <label htmlFor="maxPeople">Qtd. máxima de pessoas</label>
                  <div className="input">
                    <input
                      type="number"
                      id="maxPeople"
                      placeholder="2000"
                      {...register("maxPeople", { valueAsNumber: true })}
                      min="1"
                    />
                  </div>
                </GrupInput>
                {errors.maxPeople && <span>{errors.maxPeople.message}</span>}
              </div>
            </div>

            <div className="input-duplo">
              <div className="w-100 d-flex flex-column gap-3">
                <GrupInput>
                  <label htmlFor="tipoEvent">Categoria do evento</label>
                  <div className="input">
                    <input
                      id="tipoEvent"
                      type="text"
                      {...register("category")}
                    />
                    {errors.category && <span>{errors.category.message}</span>}
                  </div>
                </GrupInput>
              </div>

              <div className="w-100 d-flex flex-column gap-3">
                <GrupInput>
                  <label htmlFor="linkImagem">Link da imagem do evento</label>
                  <div className="input">
                    <input id="linkImagem" type="text" {...register("image")} />
                  </div>
                </GrupInput>
                {errors.image && <span>{errors.image.message}</span>}
              </div>
            </div>

            <GrupInput>
              <label htmlFor="description">Descrição</label>
              <div className="description">
                <textarea id="description" {...register("description")} />
              </div>
            </GrupInput>
            {errors.description && <span>{errors.description.message}</span>}
          </div>

          <div className="address">
            <h5>Endereço do local do evento</h5>
            <div className={isLoading ? "loading" : "not-loading"}>
              <GrupInput>
                <label htmlFor="location">Local do evento</label>
                <div className="input">
                  <input id="location" type="text" {...register("location")} />
                </div>
              </GrupInput>
              {errors.location && <span>{errors.location.message}</span>}

              <div className="input-duplo">
                <div className="w-100 d-flex flex-column gap-3">
                  <GrupInput>
                    <label htmlFor="address">Endereço</label>
                    <div className="input">
                      <input
                        id="address"
                        type="text"
                        {...register("address")}
                      />
                    </div>
                  </GrupInput>
                  {errors.address && <span>{errors.address.message}</span>}
                </div>

                <div className="w-100 d-flex flex-column gap-3">
                  <GrupInput>
                    <label htmlFor="number">Número</label>
                    <div className="input">
                      <input id="number" type="text" {...register("number")} />
                    </div>
                  </GrupInput>
                  {errors.number && <span>{errors.number.message}</span>}
                </div>
              </div>

              <div className="input-duplo">
                <div className="w-100 d-flex flex-column gap-3">
                  <GrupInput>
                    <label htmlFor="neighborhood">Bairro</label>
                    <div className="input">
                      <input
                        id="neighborhood"
                        type="text"
                        {...register("neighborhood")}
                      />
                    </div>
                  </GrupInput>
                  {errors.neighborhood && (
                    <span>{errors.neighborhood.message}</span>
                  )}
                </div>

                <div className="w-100 d-flex flex-column gap-3">
                  <GrupInput>
                    <label htmlFor="city">Cidade</label>
                    <div className="input">
                      <input id="city" type="text" {...register("city")} />
                    </div>
                  </GrupInput>
                  {errors.city && <span>{errors.city.message}</span>}
                </div>
              </div>

              <div className="input-duplo">
                <div className="w-100 d-flex flex-column gap-3">
                  <GrupInput>
                    <label htmlFor="state">Estado</label>
                    <div className="input">
                      <select id="state" {...register("state")}>
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
                  </GrupInput>
                  {errors.state && <span>{errors.state.message}</span>}
                </div>

                <div className="w-100 d-flex flex-column gap-3">
                  <GrupInput>
                    <label htmlFor="complement">Complemento</label>
                    <div className="input">
                      <input
                        id="complement"
                        type="text"
                        {...register("complement")}
                      />
                    </div>
                  </GrupInput>
                  {errors.complement && (
                    <span>{errors.complement.message}</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <button type="submit" className="btn-form" disabled={isLoading}>
            {isLoading ? "Enviando..." : "Enviar"}
          </button>
        </Forms>
      </Modal.Body>
    </Modal>
  );
}
