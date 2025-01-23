import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  height: 5rem;
  background-color: var(--azul-medio);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 768px) {

    .container {
      display: grid;
      grid-template-columns: 14fr auto 1fr;
      padding: 0 1rem;
    }

    img {
      width: 100px;
      height: 35px;
    }
  }
`;

export const Form = styled.form`
  max-width: 400px;
  width: 80%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--branco);
  border-radius: 0.625rem;
  padding: 0.25rem 0.5rem;

  input {
    width: 100%;
    border: none;
    color: var(--azul-escuro);
    background-color: transparent;
  }

  button {
    border: none;
    background-color: transparent;
  }

  @media (max-width: 1024px) {
    width: 30%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  a {
    font-size: 14px;
    font-weight: 400;
    color: var(--branco);
    text-decoration: none;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 100%;
      height: 2px;
      background-color: var(--branco);
      border-radius: 4px;
      scale: 0 1;
      transform-origin: center;
      transition: scale 0.35s;
    }

    &:hover::before,
    &.active::before {
      scale: 1;
    }
  }

  @media (max-width: 1024px) {
    gap: 1rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Login = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  a {
    font-size: 14px;
    font-weight: 400;
    color: var(--branco);
    text-decoration: none;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 100%;
      height: 2px;
      background-color: var(--branco);
      border-radius: 4px;
      scale: 0 1;
      transform-origin: center;
      transition: scale 0.35s;
    }

    &:hover::before,
    &.active::before {
      scale: 1;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }

  .btn-primary {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%;
    background-color: var(--branco);
    font-size: 35px !important;
    color: var(--azul-medio);

    &:hover {
      background-color: var(--branco);
      color: var(--azul-medio);
      box-shadow: var(--drop-shadow-branco-hover);
      transform: scale(1.1);
    }
  }

  .dropdown-toggle:after {
    display: none;
  }

  .dropdown-menu {
    background-color: var(--branco);
    border: none;

    & a {
      font-size: 14px;
      font-weight: 500;
      color: var(--azul-escuro);
      background-color: transparent;
    }
  }

  @media (max-width: 768px) {
    .btn-primary {
      width: 35px;
      height: 35px;
      font-size: 25px !important;
    }

    .dropdown-menu a {
      display: flex;
    }
  }
`;

export const NavMobile = styled.div`
  display: none;

  a {
    font-size: 14px;
    font-weight: 400;
    color: var(--branco);
    text-decoration: none;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 100%;
      height: 2px;
      background-color: var(--branco);
      border-radius: 4px;
      scale: 0 1;
      transform-origin: center;
      transition: scale 0.35s;
    }

    &:hover::before,
    &.active::before {
      scale: 1;
    }
  }

  .menu {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .search-mobile {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: auto;
    background-color: var(--branco);
    border-radius: 0.3125rem;
    padding: 0.25rem 0.5rem;

    input {
      width: 100%;
      border: none;
      color: var(--azul-escuro);
      background-color: transparent;
    }

    button {
      border: none;
      background-color: transparent;
    }
  }

  @media (max-width: 768px) {
    display: none;

    &.menu-mobile {
      display: flex;
      flex-direction: column;
      position: absolute;
      width: 50vw;
      height: 100vh;
      top: 5rem;
      right: 0;
      padding: 0 2rem;
      gap: 2rem;
      background-color: var(--azul-medio);

      @media (max-width: 425px) {
        width: 70vw;
      }
    }
  }
`;

export const ButtonMenuHamburger = styled.button`
  display: flex;
  width: 30px;
  height: 30px;
  color: var(--azul-medio);
  background-color: var(--branco);
  border: none;
  font-size: 30px;
  display: none;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  margin-left: 1rem;

  &:hover {
    box-shadow: var(--drop-shadow-branco-hover);
  }

  @media (max-width: 768px) {
    display: flex;
  }

  @media (max-width: 425px) {
    margin-left: 0.5rem;
  }
`;
