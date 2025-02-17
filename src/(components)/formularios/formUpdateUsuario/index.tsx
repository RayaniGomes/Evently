"use client";
import { useForm } from "react-hook-form";
import { Form, GrupoInput, ImagemPerfil } from "./styled";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { createDataUsuario, usuarioSchema } from "@/schema/usuario.schema";
import { toast } from "react-toastify";
import api from "@/service/api";
import Image from "next/image";
import { Usuario } from "@/interfaces";
import { get } from "http";
import { useUsuario } from "@/stores/usuarioStore";

interface Props {
  usuario: Usuario | null;
}

export default function FormUpdateUsuario({ usuario }: Props) {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<createDataUsuario>({ resolver: zodResolver(usuarioSchema) });
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { getUsuario } = useUsuario();

  useEffect(() => {
    if (usuario) {
      setValue("nome", usuario.nome);
      setValue("dataNascimento", usuario.dataNascimento);
      setValue("email", usuario.email);
      setValue("senha", usuario.senha);
      setValue("fotoPerfil", usuario.fotoPerfil);
    }
  }, [usuario, setValue]);
  const toggleMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };
  const onSubmit = (data: createDataUsuario) => {
    setIsLoading(true);

    const updateUsuario = {
      nome: data.nome,
      dataNascimento: data.dataNascimento,
      email: data.email,
      senha: data.senha,
      fotoPerfil: data.fotoPerfil,
    };

    api
      .patch(`/usuarios/${usuario?._id}`, updateUsuario)
      .then((response) => {
        toast.success("Dados atualizado com sucesso!");
        api.get(`/usuarios/${usuario?._id}`);
        console.log(response.data);
      })
      .catch(() => {
        toast.error("Erro ao atualizar o usuario, tente novamente!");
        setIsLoading(false);
      });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <ImagemPerfil>
        <label htmlFor="fotoPerfil">
          {usuario?.fotoPerfil !== null ? (
            <Image
              src={usuario?.fotoPerfil || "/placeholder.svg"}
              alt={
                usuario
                  ? "Foto de perfil de" + usuario.nome
                  : "Imagem de perfil"
              }
              width={100}
              height={100}
            />
          ) : (
            <div className="placeholder">
              <i className="bi bi-person-fill" />
            </div>
          )}
        </label>
        <input
          type="file"
          id="fotoPerfil"
          accept="image/*"
          {...register("fotoPerfil")}
        />
      </ImagemPerfil>

      <GrupoInput>
        <i className="bi bi-person-fill" />
        <input type="text" placeholder="Nome Completo" {...register("nome")} />
      </GrupoInput>
      {errors.nome && <span>{errors.nome.message}</span>}

      <GrupoInput>
        <input type="date" {...register("dataNascimento")} />
      </GrupoInput>
      {errors.dataNascimento && <span>{errors.dataNascimento.message}</span>}

      <GrupoInput>
        <i className="bi bi-envelope-fill" />
        <input type="email" placeholder="Email" {...register("email")} />
      </GrupoInput>
      {errors.email && <span>{errors.email.message}</span>}

      <div className="senha">
        <h5>Alterar Senha</h5>

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

        <div className="criador">
          <label htmlFor="criador">
            Deseja ser um criador de eventos?
            <select {...register("criador")}>
              <option value={usuario?.criador ? "true" : "false"}>
                {usuario?.criador === true ? "Sim" : "Não"}
              </option>
              <option value={usuario?.criador! ? "true" : "false"}>
                {usuario?.criador === true ? "Não" : "Sim"}
              </option>
            </select>
          </label>
        </div>
      </div>

      <button type="submit" className="btn-form" disabled={isLoading}>
        {isLoading ? "Atualizando..." : "Atualizar"}
      </button>
    </Form>
  );
}
