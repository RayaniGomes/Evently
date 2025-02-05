import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

interface Filters {
  name?: string;
  data?: string;
  uf?: string;
  cidade?: string;
  tipo_evento?: string;
}

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const filters: Filters = {};

  if (searchParams.has("nome")) {
    filters.name = searchParams.get("nome")!;
  }
  if (searchParams.has("data")) {
    filters.data = searchParams.get("data")!;
  }
  if (searchParams.has("uf")) {
    filters.uf = searchParams.get("uf")!;
  }
  if (searchParams.has("cidade")) {
    filters.cidade = searchParams.get("cidade")!;
  }
  if (searchParams.has("tipo")) {
    filters.tipo_evento = searchParams.get("tipo")!;
  }

  const eventos = await db.event.findMany({ where: filters });

  if (eventos.length === 0) {
    return NextResponse.json({ message: "Nenhum evento encontrado." }, { status: 404 });
  }

  return NextResponse.json({ data: eventos });
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null); 

  if (!body) {
    return NextResponse.json({ error: "Corpo da requisição inválido." }, { status: 400 });
  }

  const eventoCriado = await db.event.create({ data: body });

  return NextResponse.json(
    { data: eventoCriado, message: "Evento criado com sucesso!" },
    { status: 201 }
  );
}
