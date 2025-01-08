import styled from "styled-components";

export const BtnCompartilhar = styled.div`
    display: flex;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--branco);
    color: var(--azul-escuro);
    border-radius: 50px;
    border: none;
    font-size: 14px;
    padding: .5rem;
    gap: .5rem;
    position: absolute;
    top: 1rem;
    right: 1rem;

    button {
        color: var(--azul-escuro); 
        border: none;
        background-color: transparent;
    }

    .links {
        display: none;
        flex-direction: column;
        gap: 0.5rem;
        font-size: 14px;
        border-radius: 50%;

        a{
            color: var(--azul-escuro);
        }
    }

    &:hover {
        box-shadow: var(--drop-shadow-branco-hover);
        
        .links {
            display: flex;
            scale: 1;
            
            button:hover, 
            a:hover {
                color: var(--azul-claro);
                box-shadow: var(--drop-shadow-azul-hover);
            }
        }
    }
`