"use client";
import { Section } from "./styled";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import AOS from "aos";
import FormLogin from "@/(components)/formularios/formLogin";
import FormUsuario from "@/(components)/formularios/formUsuario";

export default function Login() {
  const [ativarcadastro, setAtivarcadastro] = useState(false);

  const toggleAtivarcadastro = () => {
    setAtivarcadastro(!ativarcadastro);
  };

  useEffect(() => {
    AOS.init();
    return () => AOS.refresh();
  }, [ativarcadastro]);

  return (
    <main>
      <Container as={Section}>
        <div
          className={ativarcadastro ? "form" : "ativado"}
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          <h3>Login</h3>
          <FormLogin />
          <button
            type="button"
            className="btn-cadastre"
            onClick={toggleAtivarcadastro}
          >
            <h6>Cadastre-se</h6>
            <i className="bi bi-arrow-right" />
          </button>
        </div>
        <div className="hr display-none" />
        <div
          className={ativarcadastro ? "ativado" : "form"}
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h3>Cadastre-se</h3>
          <FormUsuario />
          <button
            type="button"
            className="btn-login"
            onClick={toggleAtivarcadastro}
          >
            <h6>Login</h6>
            <i className="bi bi-arrow-right" />
          </button>
        </div>
      </Container>
    </main>
  );
}
