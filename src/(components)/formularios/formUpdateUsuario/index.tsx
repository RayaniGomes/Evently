"use client";
import { useForm } from "react-hook-form";
import { Form, GrupoInput, ImagemPerfil } from "./styled";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { createDataUsuario, usuarioSchema } from "@/schema/usuario.schema";
import { toast } from "react-toastify";
import api from "@/service/api";
import { useSearchParams } from "next/navigation";
import { formatarData } from "@/help/funcoes";
import Image from "next/image";
import { SesseionProps } from "@/interfaces";

export default function FormUpdateUsuario({user}: SesseionProps) {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<createDataUsuario>({ resolver: zodResolver(usuarioSchema) });
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFotoPerfil, setIsFotoPerfil] = useState<string | null>(null);
  const toggleMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };
  const onSubmit = async () => {
    setIsLoading(true);
  };

  useEffect(() => {
    setValue("nome", user?.nome);
    setValue("email", user?.email);
    setValue("dataNascimento", user?.dataNascimento);
    setValue("senha", user?.senha);
    setValue("criador", user?.criador?.toString());
    setValue("fotoPerfil", user?.fotoPerfil);
  }, [user]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <ImagemPerfil>
        <label htmlFor="fotoPerfil">
          {isFotoPerfil ? (
            <Image
              src={isFotoPerfil || "/placeholder.svg"}
              alt="Profile"
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
              <option value="true">Sim</option>
              <option value="false">Não</option>
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
