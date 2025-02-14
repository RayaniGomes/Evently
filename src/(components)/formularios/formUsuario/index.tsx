"use client";
import { useForm } from "react-hook-form";
import { Form, GrupoInput, ImagemPerfil } from "./styled";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { createDataUsuario, usuarioSchema } from "@/schema/usuario.schema";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import api from "@/service/api";
import { useRouter, useSearchParams } from "next/navigation";
import { formatarData } from "@/help/funcoes";
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
  const [isPagePerfil, setIsPagePerfil] = useState(false);
  const [isFotoPerfil, setIsFotoPerfil] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const toggleMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setIsFotoPerfil(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data: createDataUsuario) => {
    setIsLoading(true);

    const dadosFormatados = {
      ...data,
      fotoPerfil: isFotoPerfil,
      dataNascimento: formatarData(data.dataNascimento),
    };

    api
      .get(`/usuarios?email=${dadosFormatados.email}`)
      .then((response) => {
        if (response.data.length > 0) {
          toast.error("Já existe um usuário com esse e-mail!");
          setIsLoading(false);
          return;
        }

        return api.post("/usuarios", dadosFormatados);
      })
      
      .then(async (response) => {
        if (!response || response.status !== 201) return;

        toast.success("Usuário criado com sucesso!");

        const dataUsuario = await signIn("credentials", {
          email: dadosFormatados.email,
          password: dadosFormatados.senha,
          redirect: false,
        });

        if (dataUsuario?.ok) {
          router.push("/perfil");
        } else {
          toast.error("Erro ao autenticar o usuário, tente novamente!");
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

    setIsPagePerfil(window.location.pathname === "/perfil");
  }, [searchParams, setValue]);

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
        <input
          type="date"
          {...register("dataNascimento")}
        />
      </GrupoInput>
      {errors.dataNascimento && <span>{errors.dataNascimento.message}</span>}

      <GrupoInput>
        <i className="bi bi-envelope-fill" />
        <input
          type="email"
          placeholder="Email"
          {...register("email")}
        />
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
          <button
            type="button"
            onClick={toggleMostrarSenha}
          >
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

      {isPagePerfil ? (
        <button type="submit" className="btn-form" disabled={isLoading}>
          {isLoading ? "Atualizando..." : "Atualizar"}
        </button>
      ) : (
        <button type="submit" className="btn-form" disabled={isLoading}>
          {isLoading ? "Enviando..." : "Enviar"}
        </button>
      )}
    </Form>
  );
}
