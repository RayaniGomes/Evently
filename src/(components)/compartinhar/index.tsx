import Link from "next/link";
import { BtnCompartilhar } from "./styled";
import { toast } from "react-toastify";

export default function Compartilhar() {
    const handleCopyLink = () => {
        const url = "http://localhost:3000/detalhes-evento/1";
        navigator.clipboard
            .writeText(url)
            .then(() => {
                toast.success("Link copiado com sucesso!");
            })
            .catch((err) => {
                toast.error("Erro ao copiar o link!");
                console.error(err);
            });
    };

    return (
        <BtnCompartilhar>
            <button type="button">
                <i className="bi bi-share-fill" />
            </button>

            <div className="links">
                <button type="button" onClick={handleCopyLink}>
                    <i className="bi bi-copy" /> 
                </button>

                <Link
                    href="https://wa.me/?text=https://localhost:3000/detalhes-evento/1"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="bi bi-whatsapp" />
                </Link>

                <Link
                    href="http://www.facebook.com/sharer/sharer.php?u=http://localhost:3000/api"
                    target="_blank"
                >
                    <i className="bi bi-facebook" />
                </Link>
            </div>
        </BtnCompartilhar>
    );
}
