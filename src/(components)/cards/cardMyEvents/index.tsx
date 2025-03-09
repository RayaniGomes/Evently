import Image from "next/image";
import { Container } from "../styled";
import Link from "next/link";
import Share from "../../buttons/btnShare";
import { CardProps } from "@/interfaces";
import { useEvent } from "@/stores/eventStore";
import { formatDate, handleDelete } from "@/utils/funtions";
import { useState } from "react";
import ModalUpdateEvent from "@/(components)/modalUlpdateEvent";

export default function CardMyEvents({
  event,
  bgColor,
  color,
  hover,
  getUser,
}: CardProps) {
  const { deleteEvent } = useEvent();
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Container $bgColor={bgColor} $color={color} $hover={hover}>
      <Image
        src={event.image ?? "/sem-image.svg"}
        alt={event.name}
        width={200}
        height={175}
      />
      <div className="box">
        <div>
          <div className="d-flex justify-content-between">
            <h6 className="name-event">{event.name}</h6>
            <Share
              $url={`/eventdetail/${event._id}`}
              $bgColor={color}
              $color={bgColor}
              $tamanho={25}
              $fontSize={12}
              $padding=".4rem"
              $top={1}
              $right={1}
              $hover={hover}
            />
          </div>
          <p>{event.location}</p>
          <p>
            {event.city} / {event.state}
          </p>
          <h6>{formatDate(event.date)}</h6>
        </div>

        <div className="btn-card">
          <button
            onClick={() => handleDelete(event._id, "este evento", deleteEvent)}
          >
            Cancelar evento
          </button>
          <button onClick={toggleModal}>Editar evento</button>
          <ModalUpdateEvent
            showModal={showModal}
            toggleModal={toggleModal}
            event={event}
            getUser={getUser}
          />
          <Link href={`/eventDetail/${event._id}`}>Detalhes</Link>
        </div>
      </div>
    </Container>
  );
}
