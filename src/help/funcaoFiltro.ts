import { useEvento } from "@/stores/eventoStore";
import { useEffect } from "react";

/**
 * Função que retorna um objeto com arrays de strings contendo
 * todos os estados, cidades e tipos de eventos cadastrados
 * em ordem alfabetica e sem duplicados.
 *
 * @returns um objeto com as seguintes propriedades:
 * - estados: array de strings com os nomes dos estados,
 *   sem duplicados e em ordem alfab tica.
 * - cidades: array de strings com os nomes das cidades,
 *   sem duplicados e em ordem alfab tica.
 * - tipos: array de strings com os nomes dos tipos de eventos,
 *   sem duplicados e em ordem alfab tica.
 */

export default function SetFiltro() {
  const { eventos, getEventos } = useEvento();

  useEffect(() => {
    getEventos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const normalizarEOrdenar = (array: string[]) => {
    const mapaNormalizado = new Map();

    array.forEach((item) => {
      const chaveNormalizada = item.toLowerCase();
      if (!mapaNormalizado.has(chaveNormalizada)) {
        mapaNormalizado.set(chaveNormalizada, item);
      }
    });

    return Array.from(mapaNormalizado.values()).sort((a, b) =>
      a.localeCompare(b, undefined, { sensitivity: "base" })
    );
  };

  const estados = normalizarEOrdenar(eventos.map((evento) => evento.uf));

  const cidades = normalizarEOrdenar(eventos.map((evento) => evento.cidade));

  const tipos = normalizarEOrdenar(eventos.map((evento) => evento.tipo));

  return { estados, cidades, tipos };
}
