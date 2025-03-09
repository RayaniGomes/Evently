import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 7rem 2rem;
  gap: 2rem;

  .profile {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .alert {
    width: 100%;
    opacity: 0.8;
    border: 1px solid var(--blue-dark);
  }

  @media (max-width: 768px) {
    padding: 7rem 1rem;
    gap: 2rem;
  }
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;

  button {
    width: 150px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: 2px solid var(--blue-dark);
    border-radius: 10px 10px 0 0;
    font-size: 16px;
    font-weight: 600;
    color: var(--blue-dark);

    &:hover {
      transform: scale(1);
      background-color: var(--blue-dark);
      color: var(--white);
      opacity: 1;
    }
  }

  .active {
    background-color: var(--blue-dark);
    color: var(--white);
    border-radius: 10px 10px 0 0;
  }

  @media (max-width: 768px) {
    width: 100%;

    button {
      width: 100%;
      font-size: 12px;
      flex-wrap: wrap;
      line-height: 0.75rem;
    }
  }
`;

export const PerfilMain = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: var(--gradiente-radial);
  color: var(--white);
  border-radius: 0 10px 10px 10px;
  padding: 3rem 0rem;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    border-radius: 0 0 10px 10px;
    padding: 2rem 1rem;
  }
`;
