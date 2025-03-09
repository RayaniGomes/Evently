import styled from "styled-components";

export const Forms = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .not-loading {
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

  .address {
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
    background: var(--button);
    color: var(--white);

    &:hover {
      box-shadow: var(--drop-shadow-white-hover);
    }
  }

  span {
    width: 100%;
    text-align: left;
    font-weight: bold;
    font-size: 12px;
    padding: 0.25rem 0.5rem;
    border-radius: 7px;
    margin-top: -0.5rem;
    background-color: rgb(243, 191, 191);
    color: #9e0000;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
    .input-duplo {
      flex-direction: column;
    }
  }
`;

export const GrupInput = styled.div`
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
    border-bottom: 1px solid var(--blue-dark);
    border-radius: 10px;
    gap: 1rem;

    input,
    select {
      color: var(--blue-dark);
      width: 100%;
      height: 100%;
      padding: 0 0.5rem;
      background-color: transparent;
      border: none;
      border-radius: 10px;
    }

    option {
      color: var(--blue-dark);
    }
  }

  ::placeholder {
    color: var(--blue-dark);
  }

  .description {
    width: 100%;
    height: 100px;
    background-color: transparent;
    border-bottom: 1px solid var(--blue-dark);
    border-left: 1px solid var(--blue-dark);
    border-right: 1px solid var(--blue-dark);
    border-radius: 0 0 10px 10px;

    textarea {
      width: 100%;
      height: 100%;
      padding: 0.25rem 0.5rem;
      background-color: transparent;
      border: none;
      border-radius: 10px;
      color: var(--blue-dark);
    }
  }

  input[type="date"]::-webkit-calendar-picker-indicator {
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
