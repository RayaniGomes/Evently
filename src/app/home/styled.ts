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
    color: var(--azul-escuro);
  }

  .cards {
    width: 100%;
    display: grid;
    justify-content: center;
    flex-wrap: wrap;
    grid-template-columns: repeat(auto-fit, minmax(550px, 1fr));
    margin: 2rem auto;
    padding: 0 3rem 0rem 2rem;
    gap: 2em;
  }

  @media (max-width: 1024px) {
    margin: 2rem auto;
    gap: 2rem;

    .cards {
      padding: 0 2rem;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 7rem 2rem;
      margin-top: 5rem;
    }
  }

  @media (max-width: 768px) {
    .cards {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 7rem 1rem;
    }
  }
`;
