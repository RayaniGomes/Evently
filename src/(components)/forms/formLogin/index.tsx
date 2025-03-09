"use client";
import { useState } from "react";
import { Form, GroupInput } from "../styled";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { createDataLogin, loginSchema } from "@/schema/login.schema";
import { toast } from "react-toastify";
export default function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createDataLogin>({ resolver: zodResolver(loginSchema) });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const toggleMostrarSenha = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit: SubmitHandler<createDataLogin> = async (date) => {
    setIsLoading(true);

    const dataLogin = await signIn("credentials", {
      email: date.email,
      password: date.password,
      redirect: false,
    });

    if (dataLogin?.error) {
      if (dataLogin.error === "invalid_credentials") {
        toast.error("Email ou senha incorretos");
      } else if (dataLogin.error === "register_required") {
        toast.error("Usuário não encontrado. Por favor, cadastre-se.");
      } else {
        toast.error("Erro ao fazer login, tente novamente!");
      }
    } else {
      router.push("/userProfile");
    }

    setIsLoading(false);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className={isLoading ? "loading" : "not-loading"}>
        <GroupInput>
          <i className="bi bi-person-fill" />
          <input
            type="email"
            placeholder="Email"
            {...register("email")}
            disabled={isLoading}
          />
        </GroupInput>
        {errors.email && <span>{errors.email.message}</span>}

        <GroupInput>
          <i className="bi bi-lock-fill" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Senha"
            {...register("password")}
            disabled={isLoading}
          />
          <button
            type="button"
            onClick={toggleMostrarSenha}
            disabled={isLoading}
            className={showPassword ? "bi bi-eye-slash-fill" : "bi bi-eye-fill"}
          />
        </GroupInput>
        {errors.password && <span>{errors.password.message}</span>}
      </div>

      <button type="submit" className="btn-form" disabled={isLoading}>
        {isLoading ? "Entrando..." : "Login"}
      </button>
    </Form>
  );
}
