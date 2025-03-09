import styled from "styled-components";

export const Form = styled.form`
  width: 90%;
  display: flex;
  align-items: center;
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

  .password {
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
    padding: 0.25rem 0.5rem;
    border-radius: 7px;
    margin-top: -0.5rem;
    background-color: rgb(243, 191, 191);
    color: #9e0000;
  }

  .buttons {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;
    gap: 2rem;

    .btn-form {
      width: 200px;
      height: 40px;
      border: none;
      border-radius: 10px;
      font-size: 12px;
      font-weight: 600;
      background-color: var(--white);
      color: var(--blue-dark);

      &:hover {
        box-shadow: var(--drop-shadow-white-hover);
      }
    }

    @media (max-width: 425px) {
      flex-direction: column;
      gap: 1rem;

      .btn-form {
        width: 50%;
        height: 30px;
      }
    }
  }

  .creator {
    width: 100%;
    display: flex;
    align-items: center;

    select {
      color: var(--white);
      background-color: transparent;
      border: none;
      border-bottom: 1px solid var(--white);
      border-radius: 10px;
      padding: 0.25rem;
      margin-left: 0.5rem;

      option {
        color: var(--blue-dark);
      }
    }

    @media (max-width: 1024px) {
      flex-direction: column;
      justify-content: left;
      align-items: flex-start;
    }
  }
`;

export const GroupInput = styled.div`
  width: 100%;
  height: 40px;
  padding: 0.25rem 0.5rem;
  background-color: transparent;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--white);
  border-radius: 10px;
  gap: 0.5rem;
  position: relative;

  i {
    font-size: 20px;
  }

  input {
    width: 100%;
    background-color: transparent;
    border: none;
    font-size: 14px;
    color: var(--white);
    border-radius: 10px;
    padding: 0.25rem 0.5rem;

    &::placeholder {
      color: var(--white);
    }

    &:active {
      background-color: transparent !important;
    }
  }

  input:-internal-autofill-selected {
    background-color: transparent !important;
  }

  input[type="date"] {
    margin-left: 1.75rem;
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
    border: none;
    background-color: transparent;
    color: var(--white);
    font-size: 20px;
  }
`;

export const ImageProfile = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;

  .alert {
    width: 100%;
    opacity: 0.5;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: center;

    .placeholder {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: var(--white);

      i {
        font-size: 50px;
        color: var(--blue-dark);
      }
    }

    img {
      min-width: 100px;
      min-height: 100px;
      border-radius: 50%;
      object-fit: cover;
      background-color: var(--white);
    }
  }

  @media (max-width: 425px) {
    flex-wrap: wrap;

    label {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`;
