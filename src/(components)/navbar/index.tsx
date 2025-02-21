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
import { signOut, useSession } from "next-auth/react";
import api from "@/service/api";
import { toast } from "react-toastify";
import { Usuario } from "@/interfaces";
import { primeiroNome } from "@/help/funcoesUteis";
import { redirect } from "next/navigation";

export default function Navbar() {
  const { filtrarEventos } = useEvento();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [itemAtivo, setItemAtivo] = useState("home");
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const { data: session } = useSession();

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/login" });
    setUsuario(null);
  };

  const getUsuario = async () => {
    await api
      .get(`/usuarios/email?email=${session?.user?.email}`)
      .then((response) => {
        setUsuario(response.data);
      })
      .catch(() => {
        toast.error("Erro ao buscar o usuário, tente novamente!");
      });
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      setItemAtivo(path === "/" ? "home" : path.slice(1));
    }
  }, []);

  useEffect(() => {
    if (session) {
      getUsuario();
    }
  }, [session]);

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
            onChange={(e) => {
              console.log("Pesquisando por:", e.target.value);
              filtrarEventos({ nome: e.target.value });
            }}
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
            {!session ? "Login" : primeiroNome(usuario?.nome ?? "")}
          </Link>

          <Dropdown>
            {!session ? (
              <Dropdown.Toggle id="dropdown-basic">
                <i className="bi bi-person-fill" />
              </Dropdown.Toggle>
            ) : (
              <Dropdown.Toggle id="dropdown-basic">
                <Image
                  src={usuario?.fotoPerfil ?? "/perfil.svg"}
                  width={50}
                  height={50}
                  alt="Imagem de perfil"
                />
              </Dropdown.Toggle>
            )}
            <Dropdown.Menu className="dropdown-menu">
              <Dropdown.Item as={Link} href="/perfil">
                Perfil
              </Dropdown.Item>
              <Dropdown.Item as="button" onClick={() => handleLogout()}>
                Sair
              </Dropdown.Item>
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
              <button type="button" className="btn-sair" onClick={() => handleLogout()}>SAIR</button>
            </div>
            <form className="search-mobile">
              <input type="search" placeholder="Pesquisar" />
              <button type="submit">
                <i className="bi bi-search"></i>
              </button>
            </form>
          </div>
        </NavMobile>

        <ButtonMenuHamburger onClick={toggleMenu} className={isMenuOpen ? "bi bi-x" : "bi bi-list"} />
      </Container>
    </Nav>
  );
}
