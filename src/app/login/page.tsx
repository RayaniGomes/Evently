"use client";
import Footer from "@/(components)/footer";
import Navbar from "@/(components)/navbar";
import { Section } from "./styled";
import { Container } from "react-bootstrap";
import FormLogin from "@/(components)/formularios/formLogin";
import FormUsuario from "@/(components)/formularios/formUsuario";
import { useState } from "react";

export default function Login() {
  const [ativarcadastro, setAtivarcadastro] = useState(false);

  const toggleAtivarcadastro = () => {
    setAtivarcadastro(!ativarcadastro);
  };

  return (
    <main>
      <Navbar />
      <Container as={Section}>
        <div className={!ativarcadastro ? "form-login" : "ativar form-login"}>
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
        <div className={ativarcadastro ? "form-cadastre" : "ativar form-cadastre"}>
          <h3>Cadastre-se</h3>
          <FormUsuario />
          <button
            type="button"
            className="btn-login"
            onClick={toggleAtivarcadastro}
          >
            <i className="bi bi-arrow-left" />
            <h6>Login</h6>
          </button>
        </div>
      </Container>
      <Footer />
    </main>
  );
}
