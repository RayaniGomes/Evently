import styled from "styled-components";

export const Section = styled.section`
  width: 80%;
  min-height: 700px;
  display: flex;
  margin: 10rem auto 5rem auto;
  background: var(--gradiente-radial);
  border-radius: 10px;
  padding: 3rem;
  gap: 3rem;
  color: var(--branco);

  .hr {
    max-width: 1px;
    height: auto;
    margin: 3rem 0;
    border-radius: 1px;
    border: 1px solid var(--branco);
  }

  .form,
  .ativado {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: var(--branco);
    gap: 3rem;

    h3,
    i {
      color: var(--branco);
    }
  }

  .btn-cadastre,
  .btn-login {
    display: none;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    color: var(--branco);
    font-weight: 500 !important;
    font-size: 16px !important;
    gap: 0.5rem;
    i {
      height: auto;
      font-size: 18px;
    }

    &:hover {
      opacity: 0.87;
    }
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 2rem;
    gap: 2rem;

    .form {
      display: none;
    }

    .ativado {
      width: 100%;
      display: flex;
    }

    .hr {
      display: none;
    }

    .btn-cadastre,
    .btn-login {
      display: flex;
    }
  }
`;
