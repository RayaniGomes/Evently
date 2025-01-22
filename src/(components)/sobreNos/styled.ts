import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
  padding: 3rem 5rem;
  background: linear-gradient(180deg, rgba(6, 18, 30, 0.37) 0%, #103356 87%),
    url("/bgSobre.png") no-repeat center center / cover;
  color: var(--branco);
  text-align: center;
  gap: 2rem;

  h5 {
    width: 70%;
  }

  .redes {
    display: flex;
    gap: 2rem;

    a {
      color: var(--branco);
      font-size: 40px;
    }
  }

  @media (max-width: 1024px) {
    padding: 3rem 2rem;

    h5 {
      width: 80%;
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    gap: 1rem;

    h1 {
      font-size: 36px !important;
    }

    h5 {
      width: 90%;
      font-size: 16px !important;
    }

    .redes a {
      font-size: 30px;
    }
  }

  @media (max-width: 425px) {
    padding: 1rem;

    h1 {
      font-size: 24px !important;
    }

    h5 {
      width: 100%;
      font-size: 12px !important;
    }

    .redes a {
      font-size: 25px;
    }
  }
`;
