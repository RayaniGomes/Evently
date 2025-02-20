"use client";
import Indice from "@/(components)/indice";
import Sobre from "@/(components)/sobreNos";
import { Container } from "./styled";
import Image from "next/image";

export default function QuemSomos() {
  return (
    <>
      <Sobre />
      <Container>
        <div className="indices">
          <Indice indice={1000} titulo="Eventos Cadastrados" />
          <Indice indice={1000} titulo="Cadastros Realizados" />
          <Indice indice={1000} titulo="Inscrições em Eventos" />
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
