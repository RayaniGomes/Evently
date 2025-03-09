import { StyledShare } from "@/interfaces";
import styled from "styled-components";

export const BtnCompartilhar = styled.div<StyledShare>`
  position: absolute;
  top: ${(props) => props.$top}rem;
  right: ${(props) => props.$right}rem;
  z-index: 1;

  .btn {
    display: flex;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(${(props) => props.$bgColor});
    color: var(${(props) => props.$color});
    border-radius: 50px;
    border: none;
    font-size: ${(props) => props.$fontSize}px;
    width: ${(props) => props.$tamanho}px;
    height: ${(props) => props.$tamanho}px;

    &:hover {
      box-shadow: var(${(props) => props.$hover});
    }
  }

  .links {
    width: ${(props) => props.$tamanho}px;
    background-color: var(${(props) => props.$bgColor});
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: ${(props) => props.$padding};
    gap: 0.5rem;
    font-size: ${(props) => props.$fontSize}px;
    border-radius: 50px;
    box-shadow: var(${(props) => props.$hover});

    .btn {
      width: 0;
      height: 0;
      padding: ${(props) => props.$padding};
    }

    button {
      background-color: var(${(props) => props.$bgColor});
      color: var(${(props) => props.$color});
      border: none;
    }

    a {
      color: var(${(props) => props.$color});

      &:hover {
        opacity: 0.8;
        transform: scale(1.2);
      }
    }

    button:hover {
      background-color: var(${(props) => props.$bgColor});
      opacity: 0.7;
      transform: scale(1.1);
    }
  }

  .close {
    display: none;
  }
`;
