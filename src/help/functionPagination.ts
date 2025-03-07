"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";

/**
 * Componente de paginação para os cards. Ele renderiza apenas uma
 * quantidade determinada de itens por pagina e fornece as funções
 * necessarias para navegar entre as páginas.
**/

export function FuncaoPaginacao<T>({ eventos }: { eventos: T[] }) {
  const verificarEventos = Array.isArray(eventos) ? eventos : [];
  
  const [currentPage, setCurrentPage] = useState(1);
  const pathname = usePathname();
  const itemsPorPage = pathname === "/eventos" ? 10 : 5;

  const startIndex = (currentPage - 1) * itemsPorPage;
  const endIndex = startIndex + itemsPorPage;
  const paginatedEventos = verificarEventos.slice(startIndex, endIndex);
  const totalPages = verificarEventos.length > 0 ? Math.ceil(verificarEventos.length / itemsPorPage) : 0;

  const handlePageClick = (page: number) => setCurrentPage(page);

  return {
    paginatedEventos,
    totalPages,
    currentPage,
    handlePageClick,
    itemsPorPage,
    startIndex,
    endIndex
  };
}



