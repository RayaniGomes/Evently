import { useState } from "react";
import { Form, GrupoInput } from "../formUsuario/styled";
import Link from "next/link";

export default function FormLogin() {
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const toggleMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  return (
    <Form>
      <GrupoInput>
        <i className="bi bi-person-fill" />
        <input type="text" placeholder="Email" />
      </GrupoInput>
      <GrupoInput>
        <i className="bi bi-lock-fill" />
        <input type={mostrarSenha ? "text" : "password"} placeholder="Senha" />
        <button type="button" onClick={toggleMostrarSenha}>
          {mostrarSenha ? (
            <i className="bi bi-eye-slash-fill" />
          ) : (
            <i className="bi bi-eye-fill" />
          )}
        </button>
      </GrupoInput>

      <button type="submit" className="btn-form">
        Login
      </button>

      <div className="google">
        <h6>Login com o Google</h6>
        <Link href="#" className="bi bi-google" />
      </div>
    </Form>
  );
}
