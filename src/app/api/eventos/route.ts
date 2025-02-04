import { NextRequest, NextResponse } from "next/server";
import { Evento } from "@/interfaces";
import Model_Evento from "@/models/evento";

export async function GET(req: NextRequest) {

  const searchParams = req.nextUrl.searchParams;
  const query: Partial<Record<keyof Evento, string | object>> = {};

  if (searchParams.has("nome")) {
    query.nome = { $regex: new RegExp(searchParams.get("nome")!, "i") };
  }
  if (searchParams.has("data")) {
    query.data = searchParams.get("data")!;
  }
  if (searchParams.has("uf")) {
    query.uf = searchParams.get("uf")!;
  }
  if (searchParams.has("cidade")) {
    query.cidade = searchParams.get("cidade")!;
  }
  if (searchParams.has("tipo")) {
    query.tipo = searchParams.get("tipo")!;
  }

  const eventos = await Model_Evento.find(query).lean();
  
  if (eventos.length === 0) {
    return NextResponse.json({ message: "Nenhum evento encontrado." }, { status: 404 });
  }

  return NextResponse.json({ data: eventos });
}

export async function POST(req: NextRequest) {

  const novoEvento: Evento = await req.json();

  const eventoCriado = await Model_Evento.create(novoEvento);
  return NextResponse.json(
    { data: eventoCriado, message: "Evento criado com sucesso!" },
    { status: 201 }
  );
}
