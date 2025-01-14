import styled from "styled-components";

export const ContainerIndice = styled.div`
    height: 200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
    background: var(--gradiente-radial);
    color: var(--branco);
    text-align: center;
    border-radius: 20px;
    box-shadow: var(--drop-shadow);

    @media (max-width: 768px) {
        height: 150px;

        h2 {
            font-size: 28px !important;
        }

        h5 {
            font-size: 16px !important;
        }
    }
`