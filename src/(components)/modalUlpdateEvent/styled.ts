import styled from "styled-components";

export const Forms = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  .notLoading {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .loading {
    width: 100%;
    opacity: 0.5;
  }

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
    margin: 3rem auto;
    border: none;
    border-radius: 10px;
    font-size: 12px;
    font-weight: 600;
    background: var(--botao);
    color: var(--branco);

    &:hover {
      box-shadow: var(--drop-shadow-branco-hover);
    }
  }

  span {
    width: 100%;
    text-align: left;
    font-weight: bold;
    font-size: 12px;
    padding: .25rem .5rem;
    border-radius: 7px;
    margin-top: -.5rem;
    background-color:rgb(243, 191, 191);
    color: #9E0000;
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
    border-bottom: 1px solid var(--azul-escuro);
    border-radius: 10px;
    gap: 1rem;

    input,
    select {
      color: var(--azul-escuro);
      width: 100%;
      height: 100%;
      padding: 0 .5rem;
      background-color: transparent;
      border: none;
      border-radius: 10px;
    }

    option {
      color: var(--azul-escuro);
    }

  }
  
  ::placeholder {
    color: var(--azul-escuro);
  }
  
  .descricao {
      width: 100%;
      height: 100px;
      background-color: transparent;
      border-bottom: 1px solid var(--azul-escuro);
      border-left: 1px solid var(--azul-escuro);
      border-right: 1px solid var(--azul-escuro);
      border-radius: 0 0 10px 10px;

      
      textarea {
        width: 100%;
        height: 100%;
        padding: .25rem .5rem;
        background-color: transparent;
        border: none;
        border-radius: 10px;
        color: var(--azul-escuro);
      }
    }

  input[type="date"]::-webkit-calendar-picker-indicator {
    filter: invert(1);
    font-size: 20px;

    ::placeholder {
      opacity: 0.5;
    }
  }

  input[type="time"]::-webkit-calendar-picker-indicator {
    filter: invert(1);
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
