import styled from "styled-components";

export const Section = styled.section`
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 7rem 2rem;
  gap: 5rem;
  position: relative;

  h1 {
    text-align: center;
    color: var(--blue-dark);
  }

  @media (max-width: 768px) {
    padding: 7rem 1rem 3rem 1rem;
    gap: 2rem;
  }
`;

export const Detalhe = styled.div`
  width: 90%;
  display: flex;
  gap: 5rem;

  .img-container {
    width: 50%;

    img {
      border-radius: 10px;
      object-fit: cover;
    }
  }

  .info-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;

    .info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      color: var(--blue-dark);

      .label {
        color: var(--blue-dark);
        opacity: 0.5;
      }
    }
  }

  .btn-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    .btn-enrollment {
      width: 200px;
      height: 40px;
      background: var(--button);
      color: var(--white);
      border-radius: 10px;
      border: none;
      font-weight: 600;
      font-size: 12px;
      box-shadow: var(--drop-shadow);
      margin-top: 3rem;

      &:hover {
        box-shadow: var(--drop-shadow-white-hover);
      }
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;

    .img-container {
      width: 100%;

      img {
        width: 100%;
        height: auto;
      }
    }
  }

  @media (max-width: 425px) {
    .info-container {
      .btn-enrollment {
        width: 100px;
        height: 30px;
        font-size: 10px;
      }
    }
  }
`;
