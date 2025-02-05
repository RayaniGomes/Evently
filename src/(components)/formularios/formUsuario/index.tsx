"use client";
import { useForm } from "react-hook-form";
import { Form, GrupoInput } from "./styled";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { createDataUsuario, usuarioSchema } from "@/schema/usuario.schema";
import InputCheckbox from "@/(components)/inputCheckbox";
import { useUsuario } from "@/stores/usuarioStore";
import { Usuario } from "@/interfaces";
import { Role } from "@prisma/client";
export default function FormUsuario() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<createDataUsuario>({ resolver: zodResolver(usuarioSchema) });
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [isPagePerfil, setIsPagePerfil] = useState(false);
  const [isPageLogin, setIsPageLogin] = useState(false);
  const { criarUsuario } = useUsuario();
  const toggleMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  const onSubmit = async (data: createDataUsuario) => {
    const novoUsuario: Usuario = {
      nome: data.nome,
      dataNascimento: data.data,
      email: data.email,
      senha: data.senha,
      role: data.criador ? Role.CRIADOR : Role.COMUM,
      eventos: [],
    };
    criarUsuario(novoUsuario);
  };

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
                label="Sim"
                color="--branco"
                onChange={() => setValue("criador", Role.CRIADOR)}
                register={register}
              />
              <InputCheckbox
                id="criadorNao"
                label="Não"
                color="--branco"
                onChange={() => setValue("criador", Role.COMUM)}
                register={register}
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
