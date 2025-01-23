"use client";
import Navbar from "@/(components)/navbar";
import Titulo from "@/(components)/titulo";
import { Botoes, ContainerPerfil, Section } from "./styled";
import Footer from "@/(components)/footer";
import FormUsuario from "@/(components)/FormUsuario";
import { useState } from "react";
import MinhasInscrições from "@/(components)/minhasInscrições";

export default function Perfil() {
  const [isAtivar, setIsAtivar] = useState("Dados Pessoais");

  const handleIsAtivar = (botao: string) => {
    setIsAtivar(botao);
  };

  return (
    <main>
      <Navbar />
      <Section>
        <Titulo titulo="Meu perfil" border="--azul-escuro" />
        <div className="perfil">
          <Botoes>
            <button
              className={isAtivar === "Dados Pessoais" ? "active" : ""}
              onClick={() => handleIsAtivar("Dados Pessoais")}
            >
              Dados Pessoais
            </button>
            <button
              className={isAtivar === "Minhas Inscrições" ? "active" : ""}
              onClick={() => handleIsAtivar("Minhas Inscrições")}
            >
              Minhas Inscrições
            </button>
            <button
              className={isAtivar === "Meus Eventos" ? "active" : ""}
              onClick={() => handleIsAtivar("Meus Eventos")}
            >
              Meus Eventos
            </button>
            <button
              className={isAtivar === "Criar Evento" ? "active" : ""}
              onClick={() => handleIsAtivar("Criar Evento")}
            >
              Criar Evento
            </button>
          </Botoes>
          <ContainerPerfil>
            {isAtivar === "Dados Pessoais" && <FormUsuario />}
            {isAtivar === "Minhas Inscrições" && <MinhasInscrições />}
            {isAtivar === "Meus Eventos" && <h2>Meus Eventos</h2>}
            {isAtivar === "Criar Evento" && <h2>Criar Evento</h2>}
          </ContainerPerfil>
        </div>
      </Section>
      <Footer />
    </main>
  );
}
