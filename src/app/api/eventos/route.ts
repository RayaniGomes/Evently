import eventoModel from "@/models/eventoModel";
import { NextRequest, NextResponse } from "next/server";
export const getEventos = async (req: NextRequest, res: NextResponse) => {
  let eventos; // Define eventos in a broader scope
  try {
    eventos = await eventoModel.find();
    return NextResponse.json({ eventos }, { status: 200 });
  } catch (err) {
    console.error(err); // Log the error
    return NextResponse.json({ eventos }, { status: 200 });
  }
};

// export async function GET() {
//   const { db } = await connectToDatabase();
//   const eventosCollection = db.collection('evento');
//   const data = await eventosCollection.find().toArray();
//   return NextResponse.json({ data }, { status: 200 });
// }

// export async function POST(req: Request) {
//   const dataEvento = await req.json().catch(() => null);

//   if (!dataEvento) {
//     return NextResponse.json({ message: "Dados do evento inválidos ou ausentes" }, { status: 400 });
//   }

//   const { db } = await connectToDatabase();
//   const CriarEvento = await db.collection('evento').insertOne({ ...dataEvento });

//   return NextResponse.json({ message: "Evento criado com sucesso!", evento: CriarEvento }, { status: 201 });
// }
