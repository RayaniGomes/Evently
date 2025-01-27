import { useForm } from "react-hook-form";
import { Form, GrupoInput } from "./styled";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { createDataUsuario, usuarioSchema } from "@/schema/usuario.schema";
import InputCheckbox from "@/(components)/inputCheckbox";

export default function FormUsuario() {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createDataUsuario>({ resolver: zodResolver(usuarioSchema) });

  const toggleMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  const onSubmit = (data: createDataUsuario) => {
    console.log(data);
  };

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
        className={
          window.location.pathname === "/perfil"
            ? "senha"
            : "w-100 d-flex flex-column gap-3"
        }
      >
        {window.location.pathname === "/perfil" && <h5>Alterar Senha</h5>}

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
        <GrupoInput>
          <i className="bi bi-lock-fill" />
          <input
            type={mostrarSenha ? "text" : "password"}
            placeholder="Confirmar Senha"
            {...register("confirmarSenha")}
          />
          <button type="button" onClick={toggleMostrarSenha}>
            {mostrarSenha ? (
              <i className="bi bi-eye-slash-fill" />
            ) : (
              <i className="bi bi-eye-fill" />
            )}
          </button>
        </GrupoInput>
        {errors.confirmarSenha && <span>{errors.confirmarSenha.message}</span>}

        {window.location.pathname === "/login" && (
          <div>
            <label htmlFor="">Deseja ser um criador de eventos?</label>
            <div className="d-flex gap-3 mt-1">
              <InputCheckbox
                id="criador"
                htmlFor="criador"
                label="Sim"
                color="--branco"
                onClick={() => {}}
              />
              <InputCheckbox
                id="comum"
                htmlFor="comum"
                label="Não"
                color="--branco"
                onClick={() => {}}
              />
            </div>
          </div>
        )}
      </div>

      {window.location.pathname === "/perfil" ? (
        <button type="submit" className="btn-form">
          Atualizar
        </button>
      ): (
        <button type="submit" className="btn-form">
          Enviar
        </button>
      )
    }
    </Form>
  );
}
