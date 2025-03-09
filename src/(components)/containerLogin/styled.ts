import styled from "styled-components";

export const Section = styled.section`
  width: 80%;
  min-height: 700px;
  display: flex;
  align-items: flex-start;
  margin: 10rem auto 5rem auto;
  background: var(--gradiente-radial);
  border-radius: 10px;
  padding: 3rem;
  gap: 3rem;
  color: var(--white);

  .hr {
    max-width: 1px;
    height: 90vh;
    margin: auto 0;
    border-radius: 1px;
    border: 1px solid var(--white);
  }

  .form,
  .active {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: var(--white);
    gap: 3rem;

    h3,
    i {
      color: var(--white);
    }
  }

  .btn-register,
  .btn-login {
    display: none;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    color: var(--white);
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

    .active {
      width: 100%;
      display: flex;
    }

    .hr {
      display: none;
    }

    .btn-register,
    .btn-login {
      display: flex;
    }
  }
`;
