import styled from "styled-components";

interface StyledPaginacao {
  $color: string;
  $colorHover: string;
}

export const ContainerPaginacao = styled.div<StyledPaginacao>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  gap: 0.5rem;

  button {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    color: var(${(props) => props.$color});
    border-radius: 50%;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;

    &:hover {
      background-color: var(${(props) => props.$color});
      color: var(${(props) => props.$colorHover});
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &.active {
      background-color: var(${(props) => props.$color});
      color: var(${(props) => props.$colorHover});
      font-weight: bold;
    }
  }
`;
