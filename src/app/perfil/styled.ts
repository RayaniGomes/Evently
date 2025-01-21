import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 7rem 2rem;
    gap: 5rem;

    .perfil {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const Botoes = styled.div`
    width: 80%;
    display: flex;

    button {
        width: 150px;
        height: 40px;
        background-color: transparent;
        border: 2px solid var(--azul-escuro);
        border-radius: 10px 10px 0 0;
        font-size: 16px;
        font-weight: 600;

        &:hover {
            transform: scale(1);
            background-color: var(--azul-escuro);
            color: var(--branco);
        }
    }

    .active {
        background-color: var(--azul-escuro);
        color: var(--branco);
        border-radius: 10px 10px 0 0;
    }
`

export const ContainerPerfil = styled.form`
    width: 80%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: var(--gradiente-radial);
    color: var(--branco);
    border-radius: 0 10px 10px 10px;
    padding: 5rem 0;
    gap: 1rem;

    .senha {
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
        margin-top: 3rem;

        h5 {
            width: 80%;
            text-align: left;
            margin: 0;
        }
    }


    .btnForm {
        width: 200px;
        height: 40px;
        border: none;
        border-radius: 10px;
        font-size: 12px;
        font-weight: 600;
        background-color: var(--branco);
        color: var(--azul-escuro);
        margin-top: 5rem;

        &:hover {
            box-shadow: var(--drop-shadow-branco-hover);
        }
    }
`