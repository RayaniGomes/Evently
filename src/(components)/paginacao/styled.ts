import styled from "styled-components";

export const ContainerPaginacao = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
    gap: .5rem;

    button {
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        border: none;
        color: var(--azul-escuro);
        border-radius: 50%;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;

        &:hover {
            background-color: var(--azul-escuro);
            color: white;
        }

        &:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        &.active {
            background-color: var(--azul-escuro);
            color: white;
            font-weight: bold;
        }
    }
`