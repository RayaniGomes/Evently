"use client";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Buttons, PerfilMain, Section } from "./styled";
import Title from "../title";
import MyEnrollments from "../mySubscription";
import MyEvents from "../myEvents";
import FormUpdateUser from "../forms/formUpdateUser";
import { firstName } from "@/utils/funtions";
import { useUser } from "@/stores/userStore";
import FormNewEvent from "../forms/formNewEvent";
import Link from "next/link";

type User = {
  name: string;
  email: string;
};

export default function ContainerProfile({ name, email }: User) {
  const [isActive, setIsActive] = useState("Dados Pessoais");
  const { users, getUser, isLoading } = useUser();
  const user = users.find((u) => u.email === email);

  const handleIsActive = (button: string) => {
    setIsActive(button);
  };

  useEffect(() => {
    getUser(email);
  }, []);

  return (
    <>
      {!isLoading ? (
        <Container as={Section}>
          <Title title={`Olá, ${firstName(name)}`} border="--blue-dark" />

          <div className="alert">
            <h6>Importante!</h6>
            <p>
              Para a foto do perfil ou do a imagem do evento, o sistema só
              aceita links com domínio{" "}
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com
              </Link>{" "}
              e{" "}
              <Link
                href="https://www.encurtador.com.br"
                target="_blank"
                rel="noopener noreferrer"
              >
                encurtador.com.br
              </Link>
              .
            </p>
          </div>

          <div className="profile">
            <Buttons>
              <button
                className={isActive === "Dados Pessoais" ? "active" : ""}
                onClick={() => handleIsActive("Dados Pessoais")}
              >
                Dados Pessoais
              </button>
              <button
                className={isActive === "Minhas Inscrições" ? "active" : ""}
                onClick={() => handleIsActive("Minhas Inscrições")}
              >
                Minhas Inscrições
              </button>
              {user?.creator === true && (
                <button
                  className={isActive === "Meus Eventos" ? "active" : ""}
                  onClick={() => handleIsActive("Meus Eventos")}
                >
                  Meus Eventos
                </button>
              )}
              {user?.creator === true && (
                <button
                  className={isActive === "Criar Evento" ? "active" : ""}
                  onClick={() => handleIsActive("Criar Evento")}
                >
                  Criar Evento
                </button>
              )}
            </Buttons>
            <PerfilMain>
              {!user ? (
                <h5>Carregando...</h5>
              ) : (
                <>
                  {isActive === "Dados Pessoais" && (
                    <FormUpdateUser user={user} />
                  )}
                  {isActive === "Minhas Inscrições" && <MyEnrollments />}
                  {isActive === "Meus Eventos" && <MyEvents user={user} />}
                  {isActive === "Criar Evento" && <FormNewEvent user={user} />}
                </>
              )}
            </PerfilMain>
          </div>
        </Container>
      ) : (
        <Container as={Section}>
          <h2>Carregando...</h2>
        </Container>
      )}
    </>
  );
}
