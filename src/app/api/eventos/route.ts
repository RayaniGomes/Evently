import { Evento } from "@/interfaces";
import { dataEventos } from "@/monks/eventos_data.json";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    let dataMock: Evento[] = dataEventos;

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
export async function POST() {
    const evento: Evento = {
        id: 6,
        nome: "Evento 6",
        data: "01/01/2022",
        horario: "12:00",
        qtd: 100,
        tipo: "Show",
        descricao: "Descrição do evento 6",
        local: "Local do evento 6",
        endereco: "Endereço do evento 6",
        numero: "123",
        bairro: "Bairro do evento 6",
        cidade: "Cidade do evento 6",
        uf: "UF do evento 6",
        complemento: "Complemento do evento 6",
        imagem: "https://encurtador.com.br/apsS6",
    };

    dataEventos.push(evento);

    return new Response(
        JSON.stringify({
            data: 'Inserido com sucesso',
        }),
        {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
}