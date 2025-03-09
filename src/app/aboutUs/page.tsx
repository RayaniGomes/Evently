"use client";
import Indice from "@/(components)/indice";
import BannerAboutUs from "@/(components)/bannerAboutUs";
import { Container } from "./styled";
import Image from "next/image";
import { useEvent } from "@/stores/eventStore";
import { useEnrollment } from "@/stores/enrollmentStore";
import { useUser } from "@/stores/userStore";
import { useEffect } from "react";

export default function AboutUs() {
  const { events, getEvents } = useEvent();
  const { enrollments, getListEnrollments } = useEnrollment();
  const { users, getUsersList } = useUser();

  useEffect(() => {
    getEvents();
    getListEnrollments();
    getUsersList();
  }, []);

  return (
    <>
      <BannerAboutUs />
      <Container>
        <div className="indices">
          <Indice indice={events.length || 0} title="Eventos Cadastrados" />
          <Indice indice={users.length || 0} title="Usuarios Cadastros" />
          <Indice
            indice={enrollments.length || 0}
            title="Inscrições em Eventos"
          />
        </div>

        <div className="colaboradores">
          <h2>Colaboradores</h2>
          <div className="logos">
            <Image src="/zaori.png" alt="Zaori" width={230} height={60} />
            <Image src="/mesotech.png" alt="Mesotech" width={230} height={60} />
            <Image src="/evos.png" alt="Evos" width={230} height={60} />
            <Image src="/affare.png" alt="Affare" width={230} height={60} />
          </div>
        </div>
      </Container>
    </>
  );
}
