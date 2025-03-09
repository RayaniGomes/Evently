"use client";
import { BtnEnrollmentProps, Enrollment } from "@/interfaces";
import { useEnrollment } from "@/stores/enrollmentStore";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";
import { Btn } from "./styled";

export default function BtnEnrollment({
  event,
  color,
  bgColor,
  hover,
  width,
}: BtnEnrollmentProps) {
  const { postEnrollment, getEnrollments, isLoading } = useEnrollment();
  const { data: session } = useSession();

  const handleEnrollment = async () => {
    if (!session) {
      toast.warning("Por favor, faça login para realizar sua inscrição!");
      redirect("/login");
    }

    const dados: Enrollment = {
      event: {
        id: event._id,
        name: event.name,
        date: event.date,
        time: event.time,
        maxPeople: event.maxPeople,
        category: event.category,
        description: event.description,
        location: event.location,
        address: event.address,
        number: event.number,
        neighborhood: event.neighborhood,
        city: event.city,
        state: event.state,
        complement: event.complement,
        image: event.image,
        creator: event.creator,
      },
      enrollment: {
        _id: session.user.id ?? "",
        name: session.user.name ?? "",
        email: session.user.email ?? "",
      },        
    };

    postEnrollment(dados);
    getEnrollments(session.user.email ?? "");
  };

  return (
    <Btn
      $color={color}
      $bgColor={bgColor}
      $hover={hover}
      $width={width}
      onClick={handleEnrollment}
    >
      {isLoading ? "Carregando..." : "Inscrever-se"}
    </Btn>
  );
}
