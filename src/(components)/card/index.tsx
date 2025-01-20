import Image from "next/image";
import { CardEvento } from "./styled";
import Link from "next/link";
import Compartilhar from "../compartinhar";
import { Evento } from "@/interfaces";

export default function Card({ evento }: { evento: Evento }) {
    return (
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
                        <h6 className="nomeDoEvento">{evento.nome}</h6>
                        <Compartilhar
                            $bgColor="--branco"
                            $color="--azul-escuro"
                            $tamanho={25}
                            $fontSize={12}
                            $padding=".4rem"
                            $top={1}
                            $right={1}
                            $hover="--drop-shadow-branco-hover"
                        />
                    </div>
                    <p>{evento.local}</p>
                    <p>{evento.cidade} / <span>{evento.uf}</span></p>
                    <h6>{evento.data}</h6>
                </div>

                <div className="botoes">
                    <button>Inscreva-se</button>
                    <Link href={`/detalhe-evento/${evento.id}`}>Detalhes</Link>
                </div>
            </div>
        </CardEvento>
    );
}
