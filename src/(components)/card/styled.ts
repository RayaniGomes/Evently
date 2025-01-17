import styled from "styled-components";

export const CardEvento = styled.div`
    display: flex;
    width: 100%;
    height: 250px;
    background-color: var(--azul-medio);
    box-shadow: var(--drop-shadow);
    border-radius: 10px;
    margin: 1rem;

    img {
        margin: auto 0;
        margin-left: -1rem;
        border-radius: 10px;
        object-fit: cover;
        box-shadow: var(--drop-shadow);
    }
    
    .box {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        color: var(--branco);
        padding: 1rem;
        line-height: 0;
        position: relative;
    }

    .nomeDoEvento {
        width: 90%;
        text-transform: uppercase;
    }

    .botoes {
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

    @media (max-width: 1024px) {
        flex-direction: column;
        margin: 0 auto;
        height: 100%;
        justify-content: space-around;
        
        img {
            width: 90%;
            height: 200px;
            margin: 0 auto;
            margin-top: -5rem;
        }

        .botoes {
            margin-top: 0.5em;
            justify-content: center;
            
            button, a {
                width: 80px;
                height: 30px;
            }
        }

    }
`