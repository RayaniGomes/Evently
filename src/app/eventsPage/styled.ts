import styled from "styled-components";

export const Search = styled.div`
  width: 100%;
  display: none;
  align-items: center;
  padding: 2rem 1rem;
  gap: 1rem;

  .form {
    width: 100%;
    display: flex;
    align-items: center;
    border-radius: 10px;
    padding: 0.5rem;
    box-shadow: var(--drop-shadow);

    input {
      width: 100%;
      border: none;
      background-color: transparent;
      font-size: 12px;
    }

    button {
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .filter {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border: none;
    border-radius: 10px;
    background: var(--gradiente-radial);
    color: var(--white);
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Section = styled.section`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 5rem 0;
  margin: 0 auto;
  gap: 1rem;

  .container-cards {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .cards {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 1rem 2rem;
    justify-content: center;
  }

  @media (max-width: 1024px) {
    padding: 5rem 2rem;

    .cards {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 7rem 2rem;
      margin-top: 5rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
    margin: 0 auto;

    .cards {
      justify-content: center;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 7rem 1rem;
    }
  }
`;
