"use client";
import Link from "next/link";
import { BtnCompartilhar } from "./styled";
import { toast } from "react-toastify";
import { useState } from "react";
import { StyledCompartilhar } from "@/interfaces";

export default function Compartilhar({
  $bgColor,
  $color,
  $tamanho,
  $fontSize,
  $padding,
  $top,
  $right,
  $hover,
}: StyledCompartilhar) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleCopyLink = () => {
    const url = "http://localhost:3000/detalhes-evento/1";
    navigator.clipboard
      .writeText(url)
      .then(() => {
        toast.success("Link copiado com sucesso!");
      })
      .catch((err) => {
        toast.error("Erro ao copiar o link!");
        console.error(err);
      });
  };

  return (
    <BtnCompartilhar
      $bgColor={$bgColor}
      $color={$color}
      $tamanho={$tamanho}
      $fontSize={$fontSize}
      $padding={$padding}
      $top={$top}
      $right={$right}
      $hover={$hover}
    >
      <button
        className="btn bi bi-share-fill"
        type="button"
        onClick={handleToggle}
      />

      <div className={isOpen ? "links" : "close"}>
        <button className="btn" type="button" onClick={handleToggle}>
          <i className="bi bi-share-fill" />
        </button>
        <button type="button" onClick={handleCopyLink}>
          <i className="bi bi-copy" />
        </button>

        <Link
          href="https://wa.me/?text=https://localhost:3000/detalhes-evento/1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-whatsapp" />
        </Link>

        <Link
          href="http://www.facebook.com/sharer/sharer.php?u=http://localhost:3000/api"
          target="_blank"
        >
          <i className="bi bi-facebook" />
        </Link>
      </div>
    </BtnCompartilhar>
  );
}
