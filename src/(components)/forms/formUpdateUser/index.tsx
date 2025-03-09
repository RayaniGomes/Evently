"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { PropsForm } from "@/interfaces";
import { Form, GroupInput, ImageProfile } from "../styled";
import { useUser } from "@/stores/userStore";
import { signOut } from "next-auth/react";
import { createDataUser, userSchema } from "@/schema/user.schema";
import { handleDelete } from "@/utils/funtions";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

export default function FormUpdateUser({ user }: PropsForm) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<createDataUser>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: user?.name || "",
      dateOfBirth: user?.dateOfBirth || "",
      email: user?.email || "",
      password: user?.password || "",
      creator: user?.creator ? "true" : "false",
      profilePhoto: user?.profilePhoto || "",
    },
  });

  const { patchUser, deleteUser, isLoading } = useUser();
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (user) {
      reset({
        name: user.name,
        dateOfBirth: user.dateOfBirth,
        email: user.email,
        password: user.password,
        creator: user.creator ? "true" : "false",
        profilePhoto: user.profilePhoto,
      });
    }
  }, [user, reset]);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (formData: createDataUser) => {
    await patchUser(user!._id as string, formData);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className={isLoading ? "loading" : "not-loading"}>
        <ImageProfile>
          <label htmlFor="profilePhoto">
            {user?.profilePhoto ? (
              <Image
                src={user?.profilePhoto || "/sem-image.svg"}
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

          <div className="mt-3">
            <GroupInput>
              <i className="bi bi-link-45deg"></i>
              <input
                type="text"
                id="profilePhoto"
                className="bi bi-link-45deg"
                placeholder="Link da sua foto de perfil"
                {...register("profilePhoto")}
              />
            </GroupInput>
          </div>
        </ImageProfile>

        <GroupInput>
          <i className="bi bi-person-fill" />
          <input
            type="text"
            placeholder="Name Completo"
            {...register("name")}
          />
        </GroupInput>
        {errors.name && <span>{errors.name.message}</span>}

        <GroupInput>
          <input type="date" {...register("dateOfBirth")} />
        </GroupInput>
        {errors.dateOfBirth && <span>{errors.dateOfBirth.message}</span>}

        <GroupInput>
          <i className="bi bi-envelope-fill" />
          <input type="email" placeholder="Email" {...register("email")} />
        </GroupInput>
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div className="password">
        <h5>Alterar Senha</h5>
        <div className={isLoading ? "loading" : "not-loading"}>
          <GroupInput>
            <i className="bi bi-lock-fill" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Senha"
              {...register("password")}
            />
            <button type="button" onClick={toggleShowPassword}>
              {showPassword ? (
                <i className="bi bi-eye-slash-fill" />
              ) : (
                <i className="bi bi-eye-fill" />
              )}
            </button>
          </GroupInput>
          {errors.password && <p>{errors.password.message}</p>}

          <div className="creator">
            <label htmlFor="creator">
              Deseja ser um criador de eventos?
              <select {...register("creator")}>
                <option value="true">Sim</option>
                <option value="false">Não</option>
              </select>
            </label>
          </div>
        </div>
      </div>

      <div className="d-flex gap-5">
        <button type="submit" className="btn-form" disabled={isLoading}>
          {isLoading ? "Atualizando..." : "Atualizar"}
        </button>
        <button
          className="btn-form"
          onClick={() =>
            handleDelete(user?._id || "", "esta conta", deleteUser, signOut)
          }
        >
          {isLoading ? "Excluindo conta..." : "Excluir Conta"}
        </button>
      </div>
    </Form>
  );
}
