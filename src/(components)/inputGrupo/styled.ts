import styled from "styled-components";

export const Grupo = styled.div`
  width: 80%;
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

    &::placeholder {
      color: var(--branco);
    }
  }

  input[type="date"] {
    margin-left: 1.25rem;
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
