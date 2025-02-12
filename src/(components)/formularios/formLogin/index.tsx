"use client";
import { useState } from "react";
import { Form, GrupoInput } from "../formUsuario/styled";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { createDataLogin, loginSchema } from "@/schema/login.schema";
export default function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createDataLogin>({ resolver: zodResolver(loginSchema) });

  const [mostrarSenha, setMostrarSenha] = useState(false);
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  const toggleMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  const onSubmit: SubmitHandler<createDataLogin> = async (data) => {
    console.log(data);

    const dataLogin = {
      email: data.email,
      password: data.senha,
    };

    await signIn("credentials", {
      ...dataLogin,
      callbackUrl: "/perfil",
    });
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {error === "CredentialsSignin" && (
          <span className="error">Email ou senha incorretos</span>
        )}
        <GrupoInput>
          <i className="bi bi-person-fill" />
          <input type="email" placeholder="Email" {...register("email")} />
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
        {errors.senha && <span>{errors.senha.message}</span>}

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
    </>
  );
}
