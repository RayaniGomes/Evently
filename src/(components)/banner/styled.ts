import styled from "styled-components";

export const CntainerBanner = styled.section`
    width: 100%;
    display: flex;
    margin-top: 5rem;
    overflow: hidden;
`

export const Slide = styled.div<{ imagem: string }>`
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 10px;
    animation: slide 12s infinite;
    
    .imagem {
        position: relative;
        width: 100vw;
        height: 100%;
        z-index: -1;
        background: url(${(props) => props.imagem}) no-repeat center center;
        background-size: cover;
    }

    .conteudo {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: center;
        width: 500px;
        height: 100%;
        padding-left: 5rem;
        color: var(--branco);
        right: 0;
        background: #10335680;
        backdrop-filter: blur(4px);
        border-radius: 50% 0 50% 50%;

        a {
            background-color: var(--branco);
            color: var(--azul-escuro);
            width: 200px;
            height: 40px;
            border-radius: 10px;
            text-decoration: none;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 12px;
            font-weight: 600;

            &:hover {
                box-shadow: var(--drop-shadow-branco-hover);
            }
        }
    }

    @keyframes slide {
        0% {
            transform: translateX(0);
        }
        40% {
            transform: translateX(-100%);
        }
        60% {
            transform: translateX(-200%);
        }
        80% {
            transform: translateX(-300%);
        }
        100% {
            transform: translateX(0%);
        }
    }

    @media (max-width: 768px) {
        height: 350px;

        .conteudo {
            width: 100%;
            border-radius: 0;
            padding-left: 2rem;
            align-items: right;

            a {
                width: 100px;
                height: 30px;
            }
        }
    }
`