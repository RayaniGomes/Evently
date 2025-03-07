import styled from "styled-components";

export const Forms = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .item-form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    label {
      font-size: 14px;
      font-weight: 500;
    }

    input[type="date"] {
      width: 100%;
      height: 30px;
      border: none;
      border-bottom: 1px solid rgb(212, 212, 212);
      border-radius: 10px;
      padding: 0.5rem;
      font-size: 12px;
    }

    input [type="checkbox"] {
      width: 20px;
      height: 20px;
    }
  }

  .inputs {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    max-height: 120px;
    text-transform: capitalize;
    overflow: auto;

    &::-webkit-scrollbar {
      height: 5px;
    }

    &::-webkit-scrollbar-track {
      background: rgb(212, 212, 212);
      border-radius: 7px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: gray;
      border-radius: 7px;
    }
  }

  .uf {
    text-transform: uppercase;
  }
`;
