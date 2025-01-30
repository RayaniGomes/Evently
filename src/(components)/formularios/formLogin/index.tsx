import { useState } from "react";
import { Form, GrupoInput } from "../formUsuario/styled";
import Link from "next/link";
import { createDataUsuario, usuarioSchema } from "@/schema/usuario.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function FormLogin() {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<createDataUsuario>({ resolver: zodResolver(usuarioSchema) });

  const toggleMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  const onSubmit = (data: createDataUsuario) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <GrupoInput>
        <i className="bi bi-person-fill" />
        <input type="text" placeholder="Email" {...register("email")} />
      </GrupoInput>
      {errors.email && <span>{errors.email.message}</span>}

      <GrupoInput>
        <i className="bi bi-lock-fill" />
        <input type={mostrarSenha ? "text" : "password"} placeholder="Senha" {...register("senha")} />
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
