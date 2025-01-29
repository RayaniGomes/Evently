import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  margin: 5rem auto;
  margin-top: 10rem;
  background: var(--gradiente-radial);
  border-radius: 10px;
  gap: 3rem;
  color: var(--branco);

  .hr {
    max-width: 1px;
    height: auto;
    margin: 3rem 0;
    border-radius: 1px;
    border: 1px solid var(--branco);
  }

  .form-login,
  .form-cadastre {
    width: 50%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 3rem;
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
    gap: 0.5rem;

    h6 {
      margin: 0;
    }

    i {
      height: auto;
      font-size: 18px;
    }

    &:hover {
      opacity: 0.87;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    
    .form-login{
      display: flex;
      width: 100%;
    }

    .form-cadastre {
      display: none;
    }

    .hr {
      display: none;
    }

    .ativar .form-login {
      display: none; 
    }
    
    .ativar .form-cadastre {
      display: flex;
    }

    .btn-cadastre,
    .btn-login {
      display: flex;
    }
  }
`;
