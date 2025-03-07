import { StyledCard } from "@/interfaces";
import styled from "styled-components";

export const Btn = styled.button<StyledCard>`
  background: var(${(props) => props.$bgColor});
  color: var(${(props) => props.$color});
  border-radius: 10px;
  border: none;
  font-weight: 600;
  font-size: 12px;
  padding: 1rem;
  box-shadow: var(--drop-shadow);

  &:hover {
    box-shadow: var(${(props) => props.$hover});
  }

  @media (max-width: 425px) {
    width: 150px;
    height: 30px;
    font-size: 10px;
  }
`;
