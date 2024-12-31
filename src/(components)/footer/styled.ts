import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: var(--azul-medio);
    padding: 1rem 1rem 0.5rem 1rem;
    gap: 2rem;
    color: var(--branco);

    P {
        font-size: 12px;
        margin-bottom: 0;
    }

    a {
        color: var(--branco);
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: .5rem;
        font-size: 12px;

        i {
            font-size: 28px;
        }
    }

    .info {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .contato {    
        width: 50%;
        display: flex;
        justify-content: space-around;
    }

    .social {
        display: flex;
        gap: 1rem;
    }

    @media (max-width: 768px) {
        .info {
            flex-wrap: wrap;
            flex-direction: column;
            gap: 1rem;
        }

        img {
            width: 100px;
        }

        a, p {
            font-size: 10px;

            i { 
                font-size: 24px;
            }
        }

        .contato {
            width: 100%;
            justify-content: center;
            gap: 1rem;
            flex-wrap: wrap;
        }
    }
`;