"use client";
import { useForm } from "react-hook-form";
import { Form, GroupInput, ImageProfile } from "../styled";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { createDataUser, userSchema } from "@/schema/user.schema";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { useUser } from "@/stores/userStore";
import Link from "next/link";

export default function FormUser() {
  const {
    register,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<createDataUser>({ resolver: zodResolver(userSchema) });
  const { postUser, isLoading } = useUser();
  const [showPassword, setShowPassword] = useState(false);
  const [isPhotoProfile, setIsPhotoProfile] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsPhotoProfile(e.target.value);
  };

  const onSubmit = async (data: createDataUser) => {
    const dataFormatted = {
      ...data,
      profilePhoto: isPhotoProfile,
    };

    postUser(dataFormatted, reset);
  };

  useEffect(() => {
    const name = searchParams.get("name");
    if (name) {
      setValue("name", name);
    }
  }, [searchParams, setValue]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className={isLoading ? "loading" : "not-loading"}>
        <ImageProfile>
          <label htmlFor="profilePhoto">
            {isPhotoProfile ? (
              <Image
                src={isPhotoProfile || "/PersonFill.svg"}
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
          <div>
            <GroupInput>
              <i className="bi bi-link-45deg"></i>
              <input
                type="text"
                id="profilePhoto"
                className="bi bi-link-45deg"
                placeholder="Link da sua foto de perfil"
                onChange={handleImageUpload}
              />
            </GroupInput>
            <div className="alert">
              <p>
                Para a foto do perfil, o sistema só aceita links com domínio{" "}
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com
                </Link>{" "}
                e{" "}
                <Link
                  href="https://www.encurtador.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  encurtador.com.br
                </Link>
                .
              </p>
            </div>
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

        <GroupInput>
          <i className="bi bi-lock-fill" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Senha"
            {...register("password")}
          />
          <button
            type="button"
            onClick={toggleShowPassword}
            disabled={isLoading}
            className={showPassword ? "bi bi-eye-slash-fill" : "bi bi-eye-fill"}
          />
        </GroupInput>
        {errors.password && <span>{errors.password.message}</span>}

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

      <button type="submit" className="btn-form" disabled={isLoading}>
        {isLoading ? "Enviando..." : "Enviar"}
      </button>
    </Form>
  );
}
