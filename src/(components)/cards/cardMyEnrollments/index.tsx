import Image from "next/image";
import { Container } from "../styled";
import Link from "next/link";
import Share from "../../buttons/btnShare";
import { CardEnrollmentProps } from "@/interfaces";
import { formatDate, handleDelete } from "@/utils/funtions";
import { useEnrollment } from "@/stores/enrollmentStore";
import { useEffect } from "react";

export default function CardMyEnrollments({
  enrollment,
  bgColor,
  color,
  hover,
}: CardEnrollmentProps) {
  const { deleteEnrollment, getEnrollmentId } = useEnrollment();

  useEffect(() => {
    getEnrollmentId(enrollment._id || "");
  })

  return (
    <Container $bgColor={bgColor} $color={color} $hover={hover}>
      <Image
        src={enrollment.event.image ?? "/sem-image.svg"}
        alt={enrollment.event.name}
        width={200}
        height={175}
      />
      <div className="box">
        <div>
          <div className="d-flex justify-content-between">
            <h6 className="name-event">{enrollment.event.name}</h6>
            <Share
              $url={`/eventDetail/${enrollment.event.id || ""}`}
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
          <p>{enrollment.event.location}</p>
          <p>
            {enrollment.event.city} / {enrollment.event.state}
          </p>
          <h6>{formatDate(enrollment.event.date)}</h6>
        </div>

        <div className="btn-card ">
          <button
            onClick={() =>
              handleDelete(
                enrollment._id || "",
                "esta inscrição",
                deleteEnrollment,
              )
            }
          >
            Cancelar inscrição
          </button>
          <Link href={`/eventDetail/${enrollment.event.id || ""}`}>
            Detalhes
          </Link>
        </div>
      </div>
    </Container>
  );
}
