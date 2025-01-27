import styled from "styled-components";

export const Form = styled.form`
  width: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  .senha {
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

  .btn-form {
    width: 200px;
    height: 40px;
    border: none;
    border-radius: 10px;
    font-size: 12px;
    font-weight: 600;
    background-color: var(--branco);
    color: var(--azul-escuro);
    margin-top: 5rem;

    &:hover {
      box-shadow: var(--drop-shadow-branco-hover);
    }
  }
`;

export const GrupoInput = styled.div`
  width: 100%;
  height: 40px;
  padding: 0.25rem 0.5rem;
  background-color: transparent;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--branco);
  border-radius: 10px;
  gap: 1rem;
  position: relative;

  i {
    font-size: 20px;
  }

  input {
    width: 100%;
    background-color: transparent;
    border: none;
    font-size: 14px;
    color: var(--branco);
    border-radius: 10px;
    padding: .25rem .5rem;

    &::placeholder {
      color: var(--branco);
    }

    &:active {
      background-color: transparent !important;
    }
  }

  input:-internal-autofill-selected {
    background-color: transparent !important;
  }

  input[type="date"] {
    margin-left: 2.25rem;
  }

  input[type="date"]::-webkit-calendar-picker-indicator {
    filter: invert(1);
    font-size: 25px;
    position: absolute;
    left: 5px;
  }

  input[type="password"] {
    width: 100%;
    display: flex;
    align-items: center;
  }

  button {
    width: 20px;
    height: 20px;
    border: none;
    background-color: transparent;
    color: var(--branco);
    font-size: 20px;

    &:hover {
      opacity: 0.7;
    }
  }
`;
