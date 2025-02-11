"use client";
import { useForm } from "react-hook-form";
import { Form, GrupoInput } from "./styled";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { createDataUsuario, usuarioSchema } from "@/schema/usuario.schema";
import InputCheckbox from "@/(components)/inputCheckbox";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import api from "@/service/api";
export default function FormUsuario() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<createDataUsuario>({ resolver: zodResolver(usuarioSchema) });
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [isPagePerfil, setIsPagePerfil] = useState(false);
  const [isPageLogin, setIsPageLogin] = useState(false);
  const router = useRouter()
  const toggleMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  const onSubmit = async (data: createDataUsuario) => {
    await api.post("/usuarios", data)
      .then(() => {
        toast.success("Usuarios criado com sucesso!");
        signIn("credentials", {
          email: data.email,
          password: data.senha,
          redirect: false,
        });
        router.push("/perfil");
      })
      .catch(() => {
        toast.error("Erro ao criar o usuario, tente novamente!");
        router.push("/login");
      });    
  }

  useEffect(() => {
    setIsPagePerfil(window.location.pathname === "/perfil");
    setIsPageLogin(window.location.pathname === "/login");
  }, []);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <GrupoInput>
        <i className="bi bi-person-fill" />
        <input type="text" placeholder="Nome Completo" {...register("nome")} />
      </GrupoInput>
      {errors.nome && <span>{errors.nome.message}</span>}
      <GrupoInput>
        <input type="date" {...register("data")} />
      </GrupoInput>
      {errors.data && <span>{errors.data.message}</span>}
      <GrupoInput>
        <i className="bi bi-envelope-fill" />
        <input type="email" placeholder="Email" {...register("email")} />
      </GrupoInput>
      {errors.email && <span>{errors.email.message}</span>}

      <div
        className={isPagePerfil ? "senha" : "w-100 d-flex flex-column gap-3"}
      >
        {isPagePerfil && <h5>Alterar Senha</h5>}

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

        {isPageLogin && (
          <div>
            <label htmlFor="criador">Deseja ser um criador de eventos?</label>
            <div className="d-flex gap-3 mt-1">
              <InputCheckbox
                id="criadorSim"
                label="Sim, quero ser um criador de eventos"
                color="--branco"
                {...register("true")}
              />
            </div>
          </div>
        )}
        {errors.criador && <span>{errors.criador.message}</span>}
      </div>

      {isPagePerfil ? (
        <button type="submit" className="btn-form">
          Atualizar
        </button>
      ) : (
        <button type="submit" className="btn-form">
          Enviar
        </button>
      )}
    </Form>
  );
}
