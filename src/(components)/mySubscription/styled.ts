import styled from "styled-components";

export const Enrollments = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  .total-enrollments {
    width: 100%;
    display: flex;
    justify-content: right;
  }

  @media (max-width: 1024px) {
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 7rem 1rem;
  }
`;
