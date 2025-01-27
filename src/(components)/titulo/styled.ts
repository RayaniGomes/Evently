import styled from "styled-components";

interface border {
  color: string;
}

export const ContainerTitulo = styled.div<border>`
  display: flex;
  align-items: center;
  justify-content: center;

  hr {
    width: 50% !important;
    border: 3px solid var(${(props) => props.color}) !important;
    border-radius: 10px !important;
    margin: 0 auto !important;
    opacity: 1 !important;

    @media (max-width: 768px) {
      border: 2px solid var(${(props) => props.color}) !important;
    }
  }
`;
