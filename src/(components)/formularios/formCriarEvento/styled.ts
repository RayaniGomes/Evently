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
    border-bottom: 1px solid var(--branco);
    border-radius: 10px;
    gap: 1rem;

    input,
    select {
      color:rgba(244, 244, 244, 0.7);
      width: 100%;
      height: 100%;
      padding: .25rem .5rem;
      background-color: transparent;
      border: none;
      border-radius: 10px;
    }

    option {
      color: var(--azul-escuro);
    }

  }
  
  ::placeholder {
    color: var(--branco);
    opacity: 0.7;
  }
  
  .descricao {
      width: 100%;
      height: 100px;
      background-color: transparent;
      border-bottom: 1px solid var(--branco);
      border-left: 1px solid var(--branco);
      border-right: 1px solid var(--branco);
      border-radius: 0 0 10px 10px;

      
      textarea {
        width: 100%;
        height: 100%;
        padding: .25rem .5rem;
        background-color: transparent;
        border: none;
        border-radius: 10px;
        color:rgba(244, 244, 244, 0.7);
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
