import { dataEventos } from "@/monks/eventos_data.json";
import { NextApiRequest } from "next";
export async function GET(req: NextApiRequest) {
  const id = req.url?.split("/").pop();
  const evento = dataEventos.filter(
    (evento) => evento.id == parseInt(id as string)
  )[0];

  if (evento == undefined) {
    return new Response(
      JSON.stringify({
        data: "Evento nao encontrado",
      }),
      {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  return new Response(
    JSON.stringify({
      data: evento,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
