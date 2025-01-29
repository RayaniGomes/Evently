import { Evento } from "@/interfaces";
import { dataEventos } from "@/monks/eventos_data.json";
import { NextRequest, NextResponse } from "next/server";

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

function gerarId(eventos: Evento[]): number {
  const maiorId = eventos.length > 0 ? Math.max(...eventos.map(evento => evento.id)) : 0;
  return maiorId + 1;
}

export async function POST(req: NextRequest) {
  const dataMock: Evento[] = [...dataEventos];
  
  const novoEvento: Evento = await req.json();
  
  novoEvento.id = gerarId(dataMock);
  
  dataMock.push(novoEvento);
  console.log(dataMock);

  return NextResponse.json({
    data: novoEvento,
    message: 'Evento criado com sucesso!'
  }, {
    status: 201,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
