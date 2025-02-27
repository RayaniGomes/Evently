"use client";
import { useForm } from "react-hook-form";
import { Form, GrupoInput, ImagemPerfil } from "../styled";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { createDataUsuario, usuarioSchema } from "@/schema/usuario.schema";
import { toast } from "react-toastify";
import api from "@/service/api";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

export default function FormUsuario() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<createDataUsuario>({ resolver: zodResolver(usuarioSchema) });
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFotoPerfil, setIsFotoPerfil] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const toggleMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsFotoPerfil(e.target.value);
  };

  const onSubmit = async (data: createDataUsuario) => {
    setIsLoading(true);

    const dadosFormatados = {
      ...data,
      fotoPerfil: isFotoPerfil,
    };

    await api
      .post("/usuarios", dadosFormatados)
      .then((response) => {
        if (response.status === 201) {
          toast.success("Usuário criado com sucesso! Agora você pode logar.");
        } else {
          toast.error("Erro ao criar o usuário, tente novamente!");
        }
      })
      .catch(() => {
        toast.error("Erro ao criar o usuário, tente novamente!");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    const nome = searchParams.get("nome");
    if (nome) {
      setValue("nome", nome);
    }
  }, [searchParams, setValue]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className={isLoading ? "loading" : "notLoading"}>
        <ImagemPerfil>
          <label htmlFor="fotoPerfil">
            {isFotoPerfil ? (
              <Image
                src={isFotoPerfil || "/sem-imagem.svg"}
                alt="Imagem de Perfil"
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
            type="text"
            id="fotoPerfil"
            placeholder="Link da sua foto de perfil"
            onChange={handleImageUpload}
          />
        </ImagemPerfil>

        <GrupoInput>
          <i className="bi bi-person-fill" />
          <input
            type="text"
            placeholder="Nome Completo"
            {...register("nome")}
          />
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

        <GrupoInput>
          <i className="bi bi-lock-fill" />
          <input
            type={mostrarSenha ? "text" : "password"}
            placeholder="Senha"
            {...register("senha")}
          />
          <button
            type="button"
            onClick={toggleMostrarSenha}
            disabled={isLoading}
            className={mostrarSenha ? "bi bi-eye-slash-fill" : "bi bi-eye-fill"}
          />
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
        {isLoading ? "Enviando..." : "Enviar"}
      </button>
    </Form>
  );
}
