import { StyledCard } from "@/interfaces";
import styled from "styled-components";

export const ContainerCard = styled.div<StyledCard>`
  display: flex;
  width: 100%;
  height: 200px;
  background-color: var(${(props) => props.$bgColor});
  box-shadow: var(--drop);
  border-radius: 10px;
  margin-left: 1rem;

  img {
    min-width: 200px;
    height: 175px;
    margin: auto 0;
    margin-left: -1rem;
    border-radius: 10px;
    object-fit: cover;
    box-shadow: var(--drop-shadow);
  }

  .box {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: var(${(props) => props.$color});
    padding: 1rem;
    line-height: 0;
    position: relative;
    text-transform: lowercase;

    p {
      text-transform: capitalize;
    }

    span {
      text-transform: uppercase;
    }
  }

  .nome-evento {
    width: 90%;
    text-transform: uppercase;
  }

  .botoes {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 1rem;

    button,
    a {
      background-color: var(${(props) => props.$color});
      color: var(${(props) => props.$bgColor});
      border-radius: 10px;
      border: none;
      font-weight: 600;
      font-size: 12px;
      box-shadow: var(--drop-shadow);
      padding: 1rem;

      &:hover {
        transform: scale(1.1);
        box-shadow: var(${(props) => props.$hover});
      }
    }

    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    margin: 0 auto;
    height: 100%;
    justify-content: space-around;

    img {
      width: 90%;
      height: 200px;
      margin: 0 auto;
      margin-top: -5rem;
    }

    .botoes {
      margin-top: 0.5em;
      justify-content: center;
    }
  }
`;
