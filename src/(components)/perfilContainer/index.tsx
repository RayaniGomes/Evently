"use client";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Botoes, ContainerPerfil, Section } from "./styled";
import Titulo from "../titulo";
import MinhasInscrições from "../minhasInscrições";
import MeusEventos from "../meusEventos";
import FormCriarEvento from "../formularios/formCriarEvento";
import FormUpdateUsuario from "../formularios/formUpdateUsuario";
import { Usuario } from "@/interfaces";
import api from "@/service/api";
import { toast } from "react-toastify";

type User = {
  name: string;
  email: string;
};

export default function PerfilContainer(session: User) {
  const [isAtivar, setIsAtivar] = useState("Dados Pessoais");
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  const getUsuario = async () => {
    await api
      .get(`/usuarios/email?email=${session.email}`)
      .then((response) => {
        setUsuario(response.data);
        
      })
      .catch(() => {
        toast.error("Erro ao buscar o usuário, tente novamente!");
      });
  };
  const handleIsAtivar = (botao: string) => {
    setIsAtivar(botao);
  };

  useEffect(() => {
    getUsuario();
  }, []);

  return (
    <main>
      <Container as={Section}>
        <Titulo titulo={`Olá, ${session.name}`} border="--azul-escuro" />
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
            {usuario?.criador === true && (
              <button
                className={isAtivar === "Meus Eventos" ? "active" : ""}
                onClick={() => handleIsAtivar("Meus Eventos")}
              >
                Meus Eventos
              </button>
            )}
            {usuario?.criador === true && (
              <button
                className={isAtivar === "Criar Evento" ? "active" : ""}
                onClick={() => handleIsAtivar("Criar Evento")}
              >
                Criar Evento
              </button>
            )}
          </Botoes>
          <ContainerPerfil>
            {isAtivar === "Dados Pessoais" && (
              <FormUpdateUsuario usuario={usuario} getUsuario={getUsuario} />
            )}
            {isAtivar === "Minhas Inscrições" && <MinhasInscrições />}
            {isAtivar === "Meus Eventos" && <MeusEventos  />}
            {isAtivar === "Criar Evento" && <FormCriarEvento usuario={usuario} />}
          </ContainerPerfil>
        </div>
      </Container>
    </main>
  );
}
