"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Evento } from "@/interfaces";

/**
 * Componente de paginação para os cards. Ele renderiza apenas uma
 * quantidade determinada de itens por pagina e fornece as funções
 * necessarias para navegar entre as páginas.
**/

export function FuncaoPaginacao<T>({ eventos }: { eventos: T[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const pathname = usePathname();
  const itemsPerPage = pathname === "/eventos" ? 10 : 5;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedEventos = eventos.slice(startIndex, endIndex);
  const totalPages = Math.ceil(eventos.length / itemsPerPage);

  const handlePageClick = (page: number) => setCurrentPage(page);

  return {
    paginatedEventos,
    totalPages,
    currentPage,
    handlePageClick,
    itemsPerPage,
    startIndex,
    endIndex
  };
}

