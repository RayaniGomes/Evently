import { useForm } from "react-hook-form";
import { Form, GrupoInput } from "./styled";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const createFormUsuario = z
  .object({
    nome: z.string().min(1, "O nome é obrigatório"),
    data: z
    .string()
    .date()
    .min(8, "A data de nascimento é obrigatória")
    .refine((data) => data <= new Date(), {
      message: "Data inválida, insira uma data anterior a hoje",
    }),
    email: z.string().email("E-mail inválido"),
    senha: z.string().min(1, "A senha é obrigatória"),
    confirmarSenha: z.string().min(1, "A confirmação de senha é obrigatória"),
  })
  .refine(({ senha, confirmarSenha }) => senha === confirmarSenha, {
    message: "A senha não corresponde",
    path: ["confirmarSenha"],
  });

type createDataUsuario = z.infer<typeof createFormUsuario>;

export default function FormUsuario() {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createDataUsuario>({
    resolver: zodResolver(createFormUsuario),
  });

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
      </div>

      <button type="submit" className="btnForm">
        Atualizar
      </button>
    </Form>
  );
}
