"use client";
import { use, useEffect, useState } from "react";
import Image from "next/image";
import { Detalhe, Section } from "./styled";
import Share from "@/(components)/buttons/btnShare";
import { formatDate, handleDelete } from "@/utils/funtions";
import { useSession } from "next-auth/react";
import { useEnrollment } from "@/stores/enrollmentStore";
import ModalUpdateEvent from "@/(components)/modalUlpdateEvent";
import { useEvent } from "@/stores/eventStore";
import BtnEnrollment from "@/(components)/buttons/btnEnrollment";
import { useUser } from "@/stores/userStore";

type Params = Promise<{ id: string }>;

export default function EventDetail(props: { params: Params }) {
  const urlParams = use(props.params);
  const [showModal, setShowModal] = useState(false);
  const { events, getEventId, deleteEvent } = useEvent();
  const { users } = useUser();
  const { enrollments, getEnrollments, deleteEnrollment } = useEnrollment();
  const { data: session } = useSession();

  useEffect(() => {
    if (urlParams.id) {
      getEventId(urlParams.id);
    }
  }, [urlParams.id]);

  useEffect(() => {
    if (session?.user.email) {
      getEnrollments(session.user.email);
    }
  }, [session?.user.email]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const event = events[0] || null;
  const enrollment = enrollments[0] || null;

  const user = users.find((user) => user.email === session?.user.email);
  const isCreator =
    session?.user?.email && event?.creator?.email === session.user.email && !user?.creator === false;

  const isEnrolled = enrollments.some(
    (enrollment) =>
      enrollment.event.id === event._id &&
      enrollment.enrollment.email === session?.user.email
  );

  const isEnrolledEvent = enrollments.filter(
    (enrollment) => enrollment.event?.id === event?._id
  ).length;

  if (!event) {
    return (
      <Section>
        <h2 className="text-center">Carregando...</h2>
      </Section>
    );
  }

  return (
    <Section>
      <h1>{event.name}</h1>
      <Detalhe>
        <div className="img-container">
          <Image
            src={event.image ?? "/sem-image.svg"}
            alt={event.name}
            width={500}
            height={500}
            priority
            style={{ boxShadow: "var(--drop-shadow)" }}
          />
        </div>

        <div className="info-container">
          <Share
            $url={`/eventdetail/${event._id}`}
            $bgColor="--blue-dark"
            $color="--white"
            $tamanho={40}
            $fontSize={16}
            $padding="1rem"
            $top={0}
            $right={0}
            $hover="--drop-shadow-blue-hover"
          />

          <div className="info">
            <div className="info-item">
              <h6 className="label">Categoria:</h6>
              <div className="d-flex gap-2">
                <Image
                  src="/FaTheaterMasks.svg"
                  alt="Logo"
                  width={30}
                  height={30}
                />
                <h6>{event.category}</h6>
              </div>
            </div>

            <div className="info-item">
              <h6 className="label">Date:</h6>
              <div className="d-flex gap-2">
                <i className="bi bi-calendar-event-fill" />
                <h6>
                  {formatDate(event.date)}, às {event.time}
                </h6>
              </div>
            </div>

            <div className="info-item">
              <h6 className="label">Local:</h6>
              <div className="d-flex gap-2">
                <i className="bi bi-calendar-event-fill" />
                <div className="info-item-location">
                  <h6>{event.location}</h6>
                  <h6>
                    {event.address}, {event.number} - {event.neighborhood}
                  </h6>
                  <h6>
                    {event.city} - {event.state}
                  </h6>
                  <h6>{event.complement}</h6>
                </div>
              </div>
            </div>

            <div className="info-item">
              {event.description && (
                <>
                  <h6 className="label">Descrição:</h6>
                  <div className="d-flex gap-2">
                    <i className="bi bi-file-earmark-text-fill" />
                    <h6>{event.description}</h6>
                  </div>
                </>
              )}
            </div>

            <div className="info-item">
              <h6 className="label">Qtd. máxima de pessoas:</h6>
              <div className="d-flex gap-2">
                <i className="bi bi-people-fill" />
                <h6>{event.maxPeople}</h6>
              </div>
            </div>

            <div className="info-item">
              {session && isCreator && (
                <>
                  <h6 className="label">Total de inscritos:</h6>
                  <div className="d-flex gap-2">
                    <i className="bi bi-people-fill" />
                    <h6>{isEnrolledEvent}</h6>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="btn-container">
            {session ? (
              isCreator ? (
                <>
                  <button
                    className="btn-enrollment"
                    onClick={() =>
                      handleDelete(event._id, "este evento", deleteEvent)
                    }
                  >
                    Cancelar evento
                  </button>

                  <button className="btn-enrollment" onClick={toggleModal}>
                    Editar evento
                  </button>

                  <ModalUpdateEvent
                    showModal={showModal}
                    toggleModal={toggleModal}
                    event={event}
                  />
                </>
              ) : isEnrolled ? (
                <button
                  className="btn-enrollment"
                  onClick={() =>
                    handleDelete(enrollment._id as string, "esta inscrição", deleteEnrollment)
                  }
                >
                  Cancelar inscrição
                </button>
              ) : (
                <BtnEnrollment
                  event={event}
                  color="--white"
                  bgColor="--button"
                  hover="--drop-shadow-blue-hover"
                  width={200}
                />
              )
            ) : (
              <BtnEnrollment
                event={event}
                color="--white"
                bgColor="--button"
                hover="--drop-shadow-blue-hover"
                width={200}
              />
            )}
          </div>
        </div>
      </Detalhe>
    </Section>
  );
}
