import { useState } from "react";
import { Grupo } from "./styled";

interface InpuitGrupoProps {
    type: string;
    placeholder?: string;
    icon?: string;
}

export default function InputGrupo({ type, placeholder, icon }: InpuitGrupoProps) {
    const [mostrarSenha, setMostrarSenha] = useState(false);

    const toggleMostrarSenha = () => {
        setMostrarSenha(!mostrarSenha);
    };

    return (
        <Grupo>
            <i className={icon} />
            <input
                type={type === "password" ? (mostrarSenha ? "text" : "password") : type}
                placeholder={placeholder}
            />
            {type === "password" && (
                <button 
                    type="button" 
                    onClick={toggleMostrarSenha} 
                >
                    {mostrarSenha ? <i className="bi bi-eye-fill" /> : <i className="bi bi-eye-slash-fill" />}
                </button>
            )}
        </Grupo>
    );
}