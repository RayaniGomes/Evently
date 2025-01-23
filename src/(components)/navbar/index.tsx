"use client";
import Image from "next/image";
import Link from "next/link";
import {
  ButtonMenuHamburger,
  Form,
  Login,
  Menu,
  Nav,
  NavMobile,
} from "./styled";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
import { useEvento } from "@/stores/eventoStore";
import { Container } from "react-bootstrap";

export default function Navbar() {
  const { filtroNome } = useEvento();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Nav>
      <Container className="container">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Logo"
            loading="lazy"
            width={150}
            height={50}
          />
        </Link>

        <Form>
          <input
            type="search"
            placeholder="Pesquise pelo nome do seu evento"
            onChange={(e) => filtroNome(e.target.value)}
          />
          <button type="submit">
            <i className="bi bi-search"></i>
          </button>
        </Form>

        <Menu>
          <Link
            href="/"
            className={window.location.pathname === "/" ? "active" : ""}
          >
            HOME
          </Link>
          <Link
            href="/quem-somos"
            className={
              window.location.pathname === "/quem-somos" ? "active" : ""
            }
          >
            QUEM SOMOS
          </Link>
          <Link
            href="/eventos"
            className={window.location.pathname === "/eventos" ? "active" : ""}
          >
            EVENTOS
          </Link>
        </Menu>

        <Login>
          <Link
            href="/login"
            className={window.location.pathname === "/login" ? "active" : ""}
          >
            LOGIN
          </Link>

          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
              <i className="bi bi-person-fill" />
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu">
              <Dropdown.Item href="/perfil">Perfil</Dropdown.Item>
              <Dropdown.Item href="">Sair</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Login>

        <NavMobile className={isMenuOpen ? "menu-mobile" : ""}>
          <div className="menu">
            <div>
              <Link
                href="/"
                className={window.location.pathname === "/" ? "active" : ""}
              >
                HOME
              </Link>
            </div>
            <div>
              <Link href="/quem-somos" className="active">
                QUEM SOMOS
              </Link>
            </div>
            <div>
              {window.location.pathname === "/eventos" ? (
                <Link href="/eventos" className="active">
                  EVENTOS
                </Link>
              ) : (
                <Link href="/eventos">EVENTOS</Link>
              )}
            </div>
            <div>
              {window.location.pathname === "/login" ? (
                <Link href="/login" className="active">
                  LOGIN
                </Link>
              ) : (
                <Link href="/login">LOGIN</Link>
              )}
            </div>
            <form className="search-mobile">
              <input type="search" placeholder="Pesquisar" />
              <button type="submit">
                <i className="bi bi-search"></i>
              </button>
            </form>
          </div>
        </NavMobile>

        <ButtonMenuHamburger
          className={isMenuOpen ? "bi bi-x" : "bi bi-list"}
          onClick={toggleMenu}
        />
      </Container>
    </Nav>
  );
}
