import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  min-height: 700px;
  display: flex;
  margin: 5rem auto;
  margin-top: 10rem;
  background: var(--gradiente-radial);
  border-radius: 10px;
  gap: 3rem;

  .hr {
    max-width: 1px;
    height: auto;
    margin: 3rem 0;
    border-radius: 1px;
    border: 1px solid var(--branco);
  }

  .form-login,
  .form-cadastre {
    width: 50%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 3rem;
    color: var(--branco);
    gap: 3rem;

    h3,
    i {
      color: var(--branco);
    }
  }
`;
