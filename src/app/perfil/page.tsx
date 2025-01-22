"use client";
import Navbar from "@/(components)/navbar";
import Titulo from "@/(components)/titulo";
import { Botoes, ContainerPerfil, Section } from "./styled";
import Footer from "@/(components)/footer";
import FormUsuario from "@/(components)/FormUsuario";

export default function Perfil() {
  return (
    <main>
      <Navbar />
      <Section>
        <Titulo titulo="Meu perfil" border="--azul-escuro" />
        <div className="perfil">
          <Botoes>
            <button className="active">Dados Pessoais</button>
            <button>Minhas Inscrições</button>
            <button>Meus Eventos</button>
            <button>Criar Evento</button>
          </Botoes>
          <ContainerPerfil>
            <FormUsuario />
          </ContainerPerfil>
        </div>
      </Section>
      <Footer />
    </main>
  );
}
