"use client";
import Indice from "@/(components)/indice";
import Sobre from "@/(components)/sobreNos";
import { Container } from "./styled";
import Image from "next/image";
import { useEvento } from "@/stores/eventoStore";
import { useInscritos } from "@/stores/inscricoesStore";
import { useUsuario } from "@/stores/usuarioStore";
import { useEffect } from "react";

export default function QuemSomos() {
  const { eventos, getEventos } = useEvento();
  const { inscricoes, getListaInscricoes } = useInscritos();
  const { usuarios, getUsuariosLista } = useUsuario();

  useEffect(() => {
    getEventos();
    getListaInscricoes();
    getUsuariosLista();
  }, []);

  return (
    <>
      <Sobre />
      <Container>
        <div className="indices">
          <Indice indice={eventos.length} titulo="Eventos Cadastrados" />
          <Indice indice={usuarios.length} titulo="Cadastros Realizados" />
          <Indice indice={inscricoes.length} titulo="Inscrições em Eventos" />
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
