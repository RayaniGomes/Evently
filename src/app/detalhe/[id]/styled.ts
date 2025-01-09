import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10rem;
    gap: 5rem;

    h1 {
        color: var(--azul-escuro);
    }
`

export const Detalhe = styled.div`
    width: 80%;
    display: flex;;
    gap: 5rem;

    img {
        border-radius: 10px;
        object-fit: cover;
    }

    .FaTheaterMasks {
        background-image: url(../../../public/FaTheaterMasks.svg) no-repeat center center;
    }
`