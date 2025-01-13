import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 5rem auto;

    h2 {
        width: 100%;
        padding: 0 2rem;
        text-align: left;
        color:  var(--azul-escuro);
    }

    .cards {
        width: 100%;
        display: grid;
        justify-content: center;
        flex-wrap: wrap;
        grid-template-columns: repeat(auto-fit, minmax(550px, 1fr));
        margin: 2rem auto;
        padding: 0 2rem 0rem 4rem;
        gap: 2em;
    }

    @media (max-width: 1024px) {
        margin: 2rem auto;
        gap: 2rem;

        .cards {
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 5rem 1rem;
            padding: 1rem 1rem 0rem 1rem;
        }
    }

    @media (max-width: 768px) {
        .cards {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }
    }

`