"use client";
import { useState } from "react";
import { Form, GrupoInput } from "../formUsuario/styled";
import { createDataUsuario, usuarioSchema } from "@/schema/usuario.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
export default function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createDataUsuario>({ resolver: zodResolver(usuarioSchema) });
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const toggleMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  const onSubmit = async (data: createDataUsuario) => {
    const res = await signIn("credentials", {
      email: data.email,
      password: data.senha,
      redirect: false,
    });

    if (res?.error) {
      toast.error(res.error);
    } else {
      toast.success("Login efetuado com sucesso!");
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <GrupoInput>
        <i className="bi bi-person-fill" />
        <input
          type="email"
          placeholder="Email"
          {...register("email")}
        />
      </GrupoInput>
      {errors.email && <span>{errors.email.message}</span>}

      <GrupoInput>
        <i className="bi bi-lock-fill" />
        <input
          type={mostrarSenha ? "text" : "password"}
          placeholder="Senha"
          {...register("senha")}
        />
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
        <button
          className="bi bi-google"
          onClick={() => signIn("google", { callbackUrl: "/" })}
        />
      </div>
    </Form>
  );
}
