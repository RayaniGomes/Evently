import Image from "next/image";
import { CardEvento } from "./styled";
import Link from "next/link";
import Compartilhar from "../compartinhar";
import { Evento } from "@/interfaces";

export default function Card({ evento }: { evento: Evento }) {
    return (
        <div className="">
            <CardEvento>
                <Image
                    src={evento.imagem}
                    alt={evento.nome}
                    width={200}
                    height={218}
                />
                <div className="box">
                    <div>
                        <div className="d-flex justify-content-between">
                            <h6>{evento.nome}</h6>
                            <Compartilhar
                                bg_Color="var(--branco)"
                                color="var(--azul-escuro)"
                                tamanho={25}
                                fontSize={12}
                                padding=".4rem"
                                top={1}
                                right={1}
                            />
                        </div>
                        <p>{evento.local}</p>
                        <p>{evento.cidade} / {evento.uf}</p>
                        <h6>{evento.data}</h6>
                    </div>

                    <div className="botoes">
                        <button>Inscreva-se</button>
                        <Link href={`/detalhes-evento/${evento.id}`}>Detalhes</Link>
                    </div>
                </div>
            </CardEvento>
        </div>
    );
}
