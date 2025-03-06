"use client";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Botoes, PerfilMain, Section } from "./styled";
import Titulo from "../titulo";
import MinhasInscrições from "../minhasInscrições";
import MeusEventos from "../meusEventos";
import FormCriarEvento from "../formularios/formCriarEvento";
import FormUpdateUsuario from "../formularios/formUpdateUsuario";
import { primeiroNome } from "@/help/funcoesUteis";
import { useUsuario } from "@/stores/usuarioStore";

type User = {
  name: string;
  email: string;
};

export default function ContainerPerfil({ name, email }: User) {
  const [isAtivar, setIsAtivar] = useState("Dados Pessoais");
  const { usuarios, getUsuario, isLoading } = useUsuario();
  const usuario = usuarios.find((u) => u.email === email);

  const handleIsAtivar = (botao: string) => {
    setIsAtivar(botao);
  };

  useEffect(() => {
    getUsuario(email);
  }, []);

  return (
    <>
    {!isLoading ? (
      <Container as={Section}>
        <Titulo titulo={`Olá, ${primeiroNome(name)}`} border="--azul-escuro" />
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
          <PerfilMain>
            {!usuario ? (
              <h5>Carregando...</h5>
            ) : (
              <>
                {isAtivar === "Dados Pessoais" && (
                  <FormUpdateUsuario usuario={usuario} />
                )}
                {isAtivar === "Minhas Inscrições" && <MinhasInscrições />}
                {isAtivar === "Meus Eventos" && (
                  <MeusEventos usuario={usuario} />
                )}
                {isAtivar === "Criar Evento" && (
                  <FormCriarEvento usuario={usuario} />
                )}
              </>
            )}
          </PerfilMain>
        </div>
      </Container>
    ):
    (
      <Container as={Section}>
        <h2>Carregando...</h2>
      </Container>
    )
    }
    </>
  );
}
