import { Evento } from "@/interfaces";
import { dataEventos } from "@/monks/eventos_data.json";
import { eventoSchema } from "@/schema/evento.schema";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  let dataMock: Evento[] = dataEventos;

  const nome = req.nextUrl.searchParams.get("nome");
  if (nome) {
    dataMock = dataMock.filter((evento) => {
      return evento.nome.toLowerCase().includes(nome.toLowerCase());
    });
  }

  const data = req.nextUrl.searchParams.get("data");
  if (data) {
    dataMock = dataMock.filter((evento) => {
      const newData = evento.data.replaceAll("/", "-");
      console.log(data, newData);
      return data === newData;
    });
  }

  const uf = req.nextUrl.searchParams.get("uf");
  if (uf) {
    dataMock = dataMock.filter((evento) => {
      return evento.uf.toLowerCase() === uf.toLowerCase();
    });
  }

  const cidade = req.nextUrl.searchParams.get("cidade");
  if (cidade) {
    dataMock = dataMock.filter((evento) => {
      return evento.cidade.toLowerCase() === cidade.toLowerCase();
    });
  }

  const tipo = req.nextUrl.searchParams.get("tipo");
  if (tipo) {
    dataMock = dataMock.filter((evento) => {
      return evento.tipo.toLowerCase() === tipo.toLowerCase();
    });
  }

  return new Response(
    JSON.stringify({
      data: dataMock,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
export async function POST(req: NextRequest) {
  const body = await req.json();
  const novoEvento: Evento = {
    id: dataEventos.length + 1, // Gera um ID único
    ...body,
  };
  dataEventos.push(novoEvento);

  if (!novoEvento) {
    return new Response(
      JSON.stringify({
        data: "Erro ao criar o evento",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } else {
    return new Response(
      JSON.stringify({
        data: "Inserido com sucesso",
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
