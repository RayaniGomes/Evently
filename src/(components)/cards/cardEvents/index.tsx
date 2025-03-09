import Image from "next/image";
import { Container } from "../styled";
import Link from "next/link";
import Share from "../../buttons/btnShare";
import { CardProps } from "@/interfaces";
import { formatDate, handleDelete } from "@/utils/funtions";
import BtnEnrollment from "@/(components)/buttons/btnEnrollment";
import { useSession } from "next-auth/react";
import ModalUpdateEvent from "@/(components)/modalUlpdateEvent";
import { useEvent } from "@/stores/eventStore";
import { useEffect, useState } from "react";
import { useEnrollment } from "@/stores/enrollmentStore";
import { useUser } from "@/stores/userStore";

export default function CardEvents({
  event,
  bgColor,
  color,
  hover,
  getUser,
}: CardProps) {
  const { data: session } = useSession();
  const { deleteEvent } = useEvent();
  const { users } = useUser();
  const { enrollments, getEnrollments, deleteEnrollment } = useEnrollment();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (session?.user.email) {
      getEnrollments(session.user.email);
    }
  }, [session?.user.email]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const enrollment = enrollments[0] || null;
  const user = users.find((user) => user.email === session?.user.email);
  const isCreator =
    session?.user?.email && event?.creator?.email === session.user.email && !user?.creator === false;

  const isEnrolled = enrollments.some(
    (enrollment) =>
      enrollment.event.id === event._id &&
      enrollment.enrollment.email === session?.user.email
  );

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
          {session ? (
            isCreator ? (
              <>
                <button
                  onClick={() =>
                    handleDelete(event._id, "este evento", deleteEvent)
                  }
                >
                  Cancelar
                </button>
                <button onClick={toggleModal}>Editar</button>
                <ModalUpdateEvent
                  showModal={showModal}
                  toggleModal={toggleModal}
                  event={event}
                  getUser={getUser}
                />
                <Link href={`/eventDetail/${event._id}`}>Detalhes</Link>
              </>
            ) : (
              <>
                {isEnrolled ? (
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
                    color="--blue-dark"
                    bgColor="--white"
                    hover="--drop-shadow-white-hover"
                  />
                )}
                <Link href={`/eventDetail/${event._id}`}>Detalhes</Link>
              </>
            )
          ) : (
            <>
              <BtnEnrollment
                event={event}
                color="--blue-dark"
                bgColor="--white"
                hover="--drop-shadow-white-hover"
              />
              <Link href={`/eventDetail/${event._id}`}>Detalhes</Link>
            </>
          )}
        </div>
      </div>
    </Container>
  );
}
