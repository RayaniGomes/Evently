"use client";
import Indice from "@/(components)/indice";
import Sobre from "@/(components)/sobreNos";
import { Container } from "./styled";
import Image from "next/image";

export default function QuemSomos() {
  return (
    <main>
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
            <Image
              src="/interjato.png"
              alt="Interjato"
              width={230}
              height={60}
              loading="lazy"
            />
            <Image
              src="/zaori.png"
              alt="Interjato"
              width={230}
              height={60}
              loading="lazy"
            />
            <Image
              src="/mesotech.png"
              alt="Interjato"
              width={230}
              height={60}
              loading="lazy"
            />
            <Image
              src="/evos.png"
              alt="Interjato"
              width={230}
              height={60}
              loading="lazy"
            />
            <Image
              src="/affare.png"
              alt="Interjato"
              width={230}
              height={60}
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </main>
  );
}
