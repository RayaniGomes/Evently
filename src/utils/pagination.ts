"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";

/**
 * Paginação de uma lista de eventos com base na página atual e no caminho.
 * Determina o número de itens por página com base no nome do caminho.
 *
 * @template T - O tipo de eventos a serem paginados.
 * @param {Object} params - Parâmetros para paginação.
 * @param {T[]} params.events - A lista de eventos a serem paginados.
 * @returns {Object} Dados e funções de paginação.
 * @returns {T[]} return.paginatedEvents - Os eventos da página atual.
 * @returns {number} return.totalPages - O número total de páginas.
 * @returns {number} return.currentPage - O número da página atual.
 * @returns {function} return.handlePageClick - Função para definir a página atual.
 * @returns {number} return.itemsPorPage - Número de itens por página.
 * @returns {number} return.startIndex - O índice inicial para eventos de fatiamento.
 * @returns {number} return.endIndex -O índice final para eventos de fatiamento.
 */
export function SetPagination<T>({ events }: { events: T[] }) {
  const isEvents = Array.isArray(events) ? events : [];

  const [currentPage, setCurrentPage] = useState(1);
  const pathname = usePathname();
  const itemsPorPage = pathname === "/eventsPage" ? 10 : 5;

  const startIndex = (currentPage - 1) * itemsPorPage;
  const endIndex = startIndex + itemsPorPage;
  const paginatedEvents = isEvents.slice(startIndex, endIndex);
  const totalPages =
    isEvents.length > 0 ? Math.ceil(isEvents.length / itemsPorPage) : 0;

  const handlePageClick = (page: number) => setCurrentPage(page);

  return {
    paginatedEvents,
    totalPages,
    currentPage,
    handlePageClick,
    itemsPorPage,
    startIndex,
    endIndex,
  };
}
