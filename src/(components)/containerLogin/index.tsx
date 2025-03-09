"use client";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import AOS from "aos";
import FormLogin from "@/(components)/forms/formLogin";
import { Section } from "./styled";
import FormUser from "../forms/formUser";

export default function ContainerLogin() {
  const [activate, setActivate] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    AOS.init();
    AOS.refresh();
  }, []);

  const toggleAtivarcadastro = () => {
    setActivate(!activate);
  };

  return (
    <Container as={Section}>
      <div
        className={isClient && activate ? "active" : "form"}
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500"
      >
        <h3>Login</h3>
        <FormLogin />
        <button
          type="button"
          className="btn-register"
          onClick={toggleAtivarcadastro}
        >
          Cadastre-se
          <i className="bi bi-arrow-right" />
        </button>
      </div>
      <div className="hr display-none" />
      <div
        className={isClient && activate ? "form" : "active"}
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <h3>Cadastre-se</h3>
        <FormUser />
        <button
          type="button"
          className="btn-login"
          onClick={toggleAtivarcadastro}
        >
          Login
          <i className="bi bi-arrow-right" />
        </button>
      </div>
    </Container>
  );
}
