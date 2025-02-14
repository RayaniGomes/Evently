"use client";
import { useState } from "react";
import { Form, GrupoInput } from "../formUsuario/styled";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { createDataLogin, loginSchema } from "@/schema/login.schema";
import { toast } from "react-toastify";
export default function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createDataLogin>({ resolver: zodResolver(loginSchema) });

  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const callbackUrl = searchParams.get("from") || "/perfil";

  const toggleMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  const onSubmit: SubmitHandler<createDataLogin> = async (data) => {
    setIsLoading(true);

    const dataLogin = await signIn("credentials", {
      email: data.email,
      password: data.senha,
      redirect: false,
    });

    if (dataLogin?.error) {
      if (dataLogin.error !== "register_required") {
        toast.error("Usuário não encontrado. Por favor, cadastre-se.");
      } else {
        toast.error("Erro ao logar, tente novamente.");
      }
    } else {
      router.push(callbackUrl);
    }

    setIsLoading(false);
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {error === "CredentialsSignin" && (
          <span className="error">Email ou senha incorretos</span>
        )}
        <GrupoInput>
          <i className="bi bi-person-fill" />
          <input
            type="email"
            placeholder="Email"
            {...register("email")}
            disabled={isLoading}
          />
        </GrupoInput>
        {errors.email && <span>{errors.email.message}</span>}

        <GrupoInput>
          <i className="bi bi-lock-fill" />
          <input
            type={mostrarSenha ? "text" : "password"}
            placeholder="Senha"
            {...register("senha")}
            disabled={isLoading}
          />
          <button
            type="button"
            onClick={toggleMostrarSenha}
            disabled={isLoading}
          >
            {mostrarSenha ? (
              <i className="bi bi-eye-slash-fill" />
            ) : (
              <i className="bi bi-eye-fill" />
            )}
          </button>
        </GrupoInput>
        {errors.senha && <span>{errors.senha.message}</span>}

        <button type="submit" className="btn-form" disabled={isLoading}>
          {isLoading ? "Entrando..." : "Login"}
        </button>

        <div className="google">
          <h6>Login com o Google</h6>
          <button
            type="button"
            className="bi bi-google"
            onClick={() => signIn("google", { callbackUrl })}
            disabled={isLoading}
          />
        </div>
      </Form>
    </>
  );
}
