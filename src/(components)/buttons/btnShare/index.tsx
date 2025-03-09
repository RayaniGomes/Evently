"use client";
import Link from "next/link";
import { BtnCompartilhar } from "./styled";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { StyledShare } from "@/interfaces";

export default function Share({
  $bgColor,
  $color,
  $tamanho,
  $fontSize,
  $padding,
  $top,
  $right,
  $hover,
  $url,
}: StyledShare) {
  const [isOpen, setIsOpen] = useState(false);
  const [baseUrl, setBaseUrl] = useState("http://localhost:3000");

  const handleToggle = () => setIsOpen(!isOpen);
  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(`${baseUrl}${$url || ""}`)
      .then(() => toast.success("Link copiado com sucesso!"))
      .catch((err) => {
        toast.error("Erro ao copiar o link!");
        console.error(err);
      });
  };

  useEffect(() => {
    setBaseUrl(window.location.origin);
  }, []);

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
        <button
          className="btn"
          type="button"
          onClick={handleToggle}
          aria-label="Fechar opções de compartilhamento"
        >
          <i className="bi bi-share-fill" />
        </button>
        <button type="button" onClick={handleCopyLink} aria-label="Copiar link">
          <i className="bi bi-copy" />
        </button>

        <Link
          href={`https://wa.me/?text=${encodeURIComponent(
            `${baseUrl}${$url || ""}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share no WhatsApp"
        >
          <i className="bi bi-whatsapp" />
        </Link>

        <Link
          href={`http://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            `${baseUrl}${$url || ""}`
          )}`}
          target="_blank"
          aria-label="Share no Facebook"
        >
          <i className="bi bi-facebook" />
        </Link>
      </div>
    </BtnCompartilhar>
  );
}
