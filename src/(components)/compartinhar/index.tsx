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
  $url,
}: StyledCompartilhar) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  http://localhost:3000/detalhe-evento/67a7cab3939198207421cac9
  const handleCopyLink = () => {
    navigator.clipboard
      .writeText("http://localhost:3000" + $url ?? "")
      .then(() => toast.success("Link copiado com sucesso!"))
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
      $url={$url}
    >
      <button
        className="btn bi bi-share-fill"
        type="button"
        onClick={handleToggle}
        aria-label="Abrir opções de compartilhamento"
      />

      <div className={isOpen ? "links" : "close"}>
        <button className="btn" type="button" onClick={handleToggle} aria-label="Fechar opções de compartilhamento">
          <i className="bi bi-share-fill" />
        </button>
        <button type="button" onClick={handleCopyLink} aria-label="Copiar link">
          <i className="bi bi-copy" />
        </button>

        <Link
          href={`https://wa.me/?text=${encodeURIComponent($url)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Compartilhar no WhatsApp"
        >
          <i className="bi bi-whatsapp" />
        </Link>

        <Link
          href={`http://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent($url ?? window.location.href)}`}
          target="_blank"
          aria-label="Compartilhar no Facebook"
        >
          <i className="bi bi-facebook" />
        </Link>
      </div>
    </BtnCompartilhar>
  );
}
