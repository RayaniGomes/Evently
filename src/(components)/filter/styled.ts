import styled from "styled-components";

export const Section = styled.section`
  width: 216px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--gradiente-radial);
  color: var(--white);
  padding: 1rem;
  border-radius: 10px;

  .header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h5 {
      margin: 0;
    }

    button {
      border: none;
      background-color: var(--white);
      color: var(--blue-dark);
      font-size: 14px;
      font-weight: 500;
      padding: 0.25rem 0.5rem;
      border-radius: 10px;

      &:hover {
        box-shadow: var(--drop-shadow-white-hover);
      }
    }
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .item-form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    label {
      font-size: 14px;
      font-weight: 500;

      hr {
        width: 100%;
        border: 1px solid var(--white);
        opacity: 1;
        margin: 0;
        border-radius: 1px;
      }
    }

    input[type="date"] {
      width: 100%;
      height: 30px;
      border: none;
      border-radius: 7px;
      padding: 0.5rem;
      font-size: 12px;
    }
  }

  .inputs {
    max-height: 100%;
    overflow: auto;
    text-transform: capitalize;

    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-track {
      background: var(--white);
      border-radius: 7px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: gray;
      border-radius: 7px;
    }
  }

  .state {
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
