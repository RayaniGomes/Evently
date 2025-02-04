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
import { useEffect, useState } from "react";
import { useEvento } from "@/stores/eventoStore";
import { Container } from "react-bootstrap";

export default function Navbar() {
  const { filtroNome } = useEvento();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [itemAtivo, setItemAtivo] = useState("home");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/") {
      setItemAtivo("home");
    } else {
      setItemAtivo(path.slice(1));
    }
  }, []);

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
            className={itemAtivo === "home" ? "active" : ""}
            onClick={() => setItemAtivo("home")}
          >
            HOME
          </Link>
          <Link
            href="/quem-somos"
            className={itemAtivo === "quem-somos" ? "active" : ""}
            onClick={() => setItemAtivo("quem-somos")}
          >
            QUEM SOMOS
          </Link>
          <Link
            href="/eventos"
            className={itemAtivo === "eventos" ? "active" : ""}
            onClick={() => setItemAtivo("eventos")}
          >
            EVENTOS
          </Link>
        </Menu>

        <Login>
          <Link
            href="/login"
            className={itemAtivo === "login" ? "active" : ""}
            onClick={() => setItemAtivo("login")}
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
                className={itemAtivo === "home" ? "active" : ""}
                onClick={() => setItemAtivo("home")}
              >
                HOME
              </Link>
            </div>
            <div>
              <Link
                href="/quem-somos"
                className={itemAtivo === "quem-somos" ? "active" : ""}
                onClick={() => setItemAtivo("quem-somos")}
              >
                QUEM SOMOS
              </Link>
            </div>
            <div>
              <Link
                href="/eventos"
                className={itemAtivo === "eventos" ? "active" : ""}
                onClick={() => setItemAtivo("eventos")}
              >
                EVENTOS
              </Link>
            </div>
            <div>
              <Link
                href="/login"
                className={itemAtivo === "login" ? "active" : ""}
                onClick={() => setItemAtivo("login")}
              >
                LOGIN
              </Link>
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
