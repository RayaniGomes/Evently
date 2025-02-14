"use client";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { Botoes, ContainerPerfil, Section } from "./styled";
import Titulo from "../titulo";
import FormUsuario from "../formularios/formUsuario";
import MinhasInscrições from "../minhasInscrições";
import MeusEventos from "../meusEventos";
import FormCriarEvento from "../formularios/formCriarEvento";
import { SesseionProps } from "@/interfaces";
import FormUpdateUsuario from "../formularios/formUpdateUsuario";

export default function PerfilContainer(session: SesseionProps) {
  const { criador } = session;
  const [isAtivar, setIsAtivar] = useState("Dados Pessoais");

  const handleIsAtivar = (botao: string) => {
    setIsAtivar(botao);
  };

  return (
    <main>
      <Container as={Section}>
        <Titulo titulo={`Olá, ${session?.user?.nome}`} border="--azul-escuro" />
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
            {criador && (
              <button
                className={isAtivar === "Meus Eventos" ? "active" : ""}
                onClick={() => handleIsAtivar("Meus Eventos")}
              >
                Meus Eventos
              </button>
            )}
            {criador && (
              <button
                className={isAtivar === "Criar Evento" ? "active" : ""}
                onClick={() => handleIsAtivar("Criar Evento")}
              >
                Criar Evento
              </button>
            )}
          </Botoes>
          <ContainerPerfil>
            {isAtivar === "Dados Pessoais" && <FormUpdateUsuario { ...session } />}
            {isAtivar === "Minhas Inscrições" && <MinhasInscrições />}
            {criador && isAtivar === "Meus Eventos" && <MeusEventos />}
            {criador && isAtivar === "Criar Evento" && <FormCriarEvento />}
          </ContainerPerfil>
        </div>
      </Container>
    </main>
  );
}
