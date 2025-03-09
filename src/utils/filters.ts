"use client";
import { useEvent } from "@/stores/eventStore";
import { useEffect } from "react";

/**
* Inicializa e recupera dados de eventos, então normaliza e classifica valores exclusivos
* para vários atributos de eventos, como estado, cidade, categoria e data.
* 
* A função aproveita o gancho `useEvent` para acessar e buscar dados de eventos
* usando o método `getEvents`. Uma vez que os dados são recuperados, ele processa os
* eventos para extrair, normalizar e classificar valores exclusivos para cada atributo. 
* 
* @returns Um objeto contendo matrizes de valores exclusivos, normalizados e classificados para:
* - `states`: Os estados em que os eventos são realizados.
* - `city`: As cidades em que os eventos são realizados.
* - `category`: As categorias dos eventos.
* - `date`: As datas em que os eventos ocorrem.
 */
export default function SetFilter() {
  const { events, getEvents } = useEvent();

  useEffect(() => {
    getEvents();
  }, []);

  const normalizeAndSort = (array: (string | undefined)[]) => {
    const mapNormalized = new Map<string, string>();

    array.forEach((item) => {
      if (item !== undefined) {
        const normalizedKey = item.toLowerCase();
        if (!mapNormalized.has(normalizedKey)) {
          mapNormalized.set(normalizedKey, item);
        }
      }
    });

    return Array.from(mapNormalized.values()).sort((a, b) =>
      a.localeCompare(b, undefined, { sensitivity: "base" })
    );
  };

  const states = normalizeAndSort(events.map((event) => event.state));
  const city = normalizeAndSort(events.map((event) => event.city));
  const category = normalizeAndSort(events.map((event) => event.category));
  const date = normalizeAndSort(events.map((event) => event.date));

  return { states, city, category, date };
}
