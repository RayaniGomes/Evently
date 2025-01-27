import styled from "styled-components";

export const FormEvento = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 3rem;

  .input-duplo {
    width: 100%;
    display: flex;
    gap: 1rem;
  }

  .endereco {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    margin-top: 3rem;

    h5 {
      width: 100%;
      text-align: left;
      margin: 0;
    }
  }

  .btn-form {
    width: 200px;
    height: 40px;
    margin: 5rem auto;
    border: none;
    border-radius: 10px;
    font-size: 12px;
    font-weight: 600;
    background-color: var(--branco);
    color: var(--azul-escuro);

    &:hover {
      box-shadow: var(--drop-shadow-branco-hover);
    }
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
    .input-duplo {
      flex-direction: column;
    }
  }
`;

export const GrupoInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 14px;

  .input {
    width: 100%;
    height: 40px;
    background-color: transparent;
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--branco);
    border-radius: 10px;
    gap: 1rem;

    input,
    textarea {
      color: var(--branco);
      width: 100%;
      height: 100%;
      padding: 0.25rem;
      background-color: transparent;
      border: none;
    }

    ::placeholder {
      color: var(--branco);
    }
  }

  input[type="date"]::-webkit-calendar-picker-indicator {
    filter: invert(1);
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
