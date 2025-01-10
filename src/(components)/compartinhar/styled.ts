import { BntCompartilhar } from "@/interfaces";
import styled from "styled-components";

export const BtnCompartilhar = styled.div<BntCompartilhar>`
    position: absolute;
    top: ${props => props.top}rem;
    right: ${props => props.right}rem;
    z-index: 1;

    .btn {
    display: flex;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.bg_Color};
    color: ${props => props.color};
    border-radius: 50px;
    border: none;
    font-size: ${props => props.fontSize}px;
    width: ${props => props.tamanho}px;
    height: ${props => props.tamanho}px;
    
    }

    .links {
        width: ${props => props.tamanho}px;
        background-color: ${props => props.bg_Color};
        position: absolute;
        top: 0;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: ${props => props.padding};
        gap: 0.5rem;
        font-size: ${props => props.fontSize}px;
        border-radius: 50px;
        box-shadow: var(--drop-shadow-azul-hover);

        .btn {
            width: 0;
            height: 0;
            padding: ${props => props.padding};
        }

        button {
            background-color: transparent;
            color: ${props => props.color};
            border: none;
        }

        a{
            color: ${props => props.color}; 

            &:hover {
                opacity: 0.8;
                transform: scale(1.2);
            }
        }

        button:hover {
            background-color: transparent;
            opacity: 0.7;
            transform: scale(1.1);
        }
    }

    .close {
        display: none;
    }
`