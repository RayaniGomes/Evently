import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  const eventos = await db.evento.findMany();
  return NextResponse.json(eventos, { status: 200 });
}

export async function POST(req: Request) {
  const dataEvento = await req.json().catch(() => null);

  const CriarEvento = await db.evento.create({
    data: { ...dataEvento },
  });

  return NextResponse.json({ message: "Evento criado com sucesso!", evento: CriarEvento }, { status: 201 });
}