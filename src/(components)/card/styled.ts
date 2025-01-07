import styled from "styled-components";

export const CardEvento = styled.div`
    display: flex;
    background-color: var(--azul-medio);
    border-radius: 10px;
    width: 537px;
    height: 250px;
    box-shadow: var(--drop-shadow);
    margin: 1rem;

    & img {
        margin: auto 0;
        margin-left: -1rem;
        border-radius: 10px;
        object-fit: cover;
        box-shadow: var(--drop-shadow);
    }
    
    & .box {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        color: var(--branco);
        padding: 1rem;
        line-height: 0;
    }

    & .botoes {
        display: flex;
        justify-content: end;
        align-items: center;
        gap: 1rem;

        button, a {
            background-color: var(--branco);
            color: var(--azul-escuro);
            border-radius: 10px;
            border: none;
            font-weight: 600;
            font-size: 12px;
            box-shadow: var(--drop-shadow);
            width: 100px;
            height: 40px;

            &:hover {
                transform: scale(1.1);
                box-shadow: var(--drop-shadow-branco-hover);
            }
        }

        a {
            text-decoration: none;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    & .compartilhar {
        width: 25px;
        height: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--branco);
        color: var(--azul-escuro);
        border-radius: 50%;
        border: none;
        font-size: 12px;

        &:hover {
            box-shadow: var(--drop-shadow-branco-hover);
            transform: scale(1.1);
        }
    }
`