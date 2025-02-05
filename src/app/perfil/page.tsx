"use client";
import Titulo from "@/(components)/titulo";
import { Botoes, ContainerPerfil, Section } from "./styled";
import FormUsuario from "@/(components)/formularios/formUsuario";
import { useState } from "react";
import MinhasInscrições from "@/(components)/minhasInscrições";
import MeusEventos from "@/(components)/meusEventos";
import FormCriarEvento from "@/(components)/formularios/formCriarEvento";
import { Container } from "react-bootstrap";

export default function Perfil() {
  const [isAtivar, setIsAtivar] = useState("Dados Pessoais");

  const handleIsAtivar = (botao: string) => {
    setIsAtivar(botao);
  };

  return (
    <main>
      <Container as={Section}>
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
              {isAtivar === "Meus Eventos" && <MeusEventos />}
              {isAtivar === "Criar Evento" && <FormCriarEvento />}
            </ContainerPerfil>
          </div>
      </Container>
    </main>
  );
}
