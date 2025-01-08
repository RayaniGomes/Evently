import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin: 5rem 0;

    h2 {
        width: 80%;
        padding: 0 2rem;
        text-align: left;
        color:  var(--azul-escuro);
    }

    .cards {
        width: 80%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
        margin: 0 auto; 
    }
`