"use client";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "@/service/api";
import Image from "next/image";
import { Usuario } from "@/interfaces";
import { Form, GrupoInput, ImagemPerfil } from "../styled";
interface Props {
  usuario: Usuario | null;
  getUsuario: () => void;
}

export default function FormUpdateUsuario({ usuario, getUsuario }: Props) {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [nome, setNome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [criador, setCriador] = useState(false);
  const [fotoPerfil, setFotoPerfil] = useState<string | null>(null);

  useEffect(() => {
    if (usuario) {
      setNome(usuario.nome);
      setDataNascimento(usuario.dataNascimento);
      setEmail(usuario.email);
      setSenha(usuario.senha);
      setCriador(usuario.criador);
      setFotoPerfil(usuario.fotoPerfil || null);
    }
  }, [usuario]);

  const toggleMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = {
      nome: nome,
      dataNascimento: dataNascimento,
      email: email,
      senha: senha,
      criador: criador,
      fotoPerfil: fotoPerfil,
    };

    api
      .patch(`/usuarios/${usuario?._id}`, formData)
      .then(() => {
        toast.success("Dados atualizados com sucesso!");
        getUsuario();
      })
      .catch(() => {
        toast.error("Erro ao atualizar o usuário, tente novamente!");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Form onSubmit={onSubmit}>
      <div className={isLoading ? "loading" : "notLoading"}>
        <ImagemPerfil>
          <label htmlFor="fotoPerfil">
            {fotoPerfil ? (
              <Image
                src={fotoPerfil || "/PersonFill.svg"}
                alt={
                  usuario
                    ? "Foto de perfil de" + usuario.nome
                    : "Imagem de perfil"
                }
                width={100}
                height={100}
                priority
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
            accept="image/*"
            defaultValue={usuario?.fotoPerfil}
            onChange={(e) => {
              setFotoPerfil(e.target.value);
            }}
          />
        </ImagemPerfil>

        <GrupoInput>
          <i className="bi bi-person-fill" />
          <input
            type="text"
            placeholder="Nome Completo"
            defaultValue={usuario?.nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </GrupoInput>

        <GrupoInput>
          <input
            type="date"
            defaultValue={usuario?.dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
          />
        </GrupoInput>

        <GrupoInput>
          <i className="bi bi-envelope-fill" />
          <input
            type="email"
            placeholder="Email"
            defaultValue={usuario?.email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </GrupoInput>
      </div>

      <div className="senha">
        <h5>Alterar Senha</h5>
        <div className={isLoading ? "loading" : "notLoading"}>
          <GrupoInput>
            <i className="bi bi-lock-fill" />
            <input
              type={mostrarSenha ? "text" : "password"}
              placeholder="Senha"
              defaultValue={usuario?.senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <button type="button" onClick={toggleMostrarSenha}>
              {mostrarSenha ? (
                <i className="bi bi-eye-slash-fill" />
              ) : (
                <i className="bi bi-eye-fill" />
              )}
            </button>
          </GrupoInput>

          <div className="criador">
            <label htmlFor="criador">
              Deseja ser um criador de eventos?
              <select
                value={criador ? "true" : "false"}
                onChange={(e) => setCriador(e.target.value === "true")}
              >
                <option value="true">Sim</option>
                <option value="false">Não</option>
              </select>
            </label>
          </div>
        </div>
      </div>

      <button type="submit" className="btn-form" disabled={isLoading}>
        {isLoading ? "Atualizando..." : "Atualizar"}
      </button>
    </Form>
  );
}
