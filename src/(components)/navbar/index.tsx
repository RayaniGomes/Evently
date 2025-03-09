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
import { useEvent } from "@/stores/eventStore";
import { Container } from "react-bootstrap";
import { signOut, useSession } from "next-auth/react";
import { firstName } from "@/utils/funtions";
import { useUser } from "@/stores/userStore";
import { redirect } from "next/navigation";

export default function Navbar() {
  const { filterEvents } = useEvent();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [itemAtivo, setItemAtivo] = useState("home");
  const { data: session } = useSession();
  const { users, getUser } = useUser();
  const user = users.find((u) => u.email === session?.user?.email);

  const handleLogout = () => {
    signOut();
    getUser("");

    if (window.location.pathname === "/profile") {
      redirect("/login");
    }
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
      getUser(session.user.email as string);
    }
  }, [session]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
  
    filterEvents({ name: searchValue });
    if (searchValue !== "") {
      redirect(`/eventsPage?search=${searchValue}`);
    } else {
      redirect(`/eventsPage`);
    }
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
            onChange={(e) => {
              handleSearch(e);
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
            href="/aboutUs"
            className={itemAtivo === "aboutUs" ? "active" : ""}
            onClick={() => setItemAtivo("aboutUs")}
          >
            QUEM SOMOS
          </Link>
          <Link
            href="/eventsPage"
            className={itemAtivo === "eventsPage" ? "active" : ""}
            onClick={() => setItemAtivo("eventsPage")}
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
            {!session ? "LOGIN" : firstName(user?.name ?? "")}
          </Link>

          <Dropdown>
            {!session ? (
              <Dropdown.Toggle id="dropdown-basic">
                <i className="bi bi-person-fill" />
              </Dropdown.Toggle>
            ) : (
              <Dropdown.Toggle id="dropdown-basic">
                <Image
                  src={user?.profilePhoto || "/PersonFill.svg"}
                  width={50}
                  height={50}
                  alt="Imagem de perfil"
                />
              </Dropdown.Toggle>
            )}
            <Dropdown.Menu className="dropdown-menu">
              <Dropdown.Item as={Link} href="/userProfile">
                Perfil
              </Dropdown.Item>
              {session && (
                <Dropdown.Item as="button" onClick={() => handleLogout()}>
                  Sair
                </Dropdown.Item>
              )}
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
                href="/aboutUs"
                className={itemAtivo === "aboutUs" ? "active" : ""}
                onClick={() => setItemAtivo("aboutUs")}
              >
                QUEM SOMOS
              </Link>
            </div>
            <div>
              <Link
                href="/eventsPage"
                className={itemAtivo === "eventsPage" ? "active" : ""}
                onClick={() => setItemAtivo("eventsPage")}
              >
                EVENTS
              </Link>
            </div>
            <div>
              <button
                type="button"
                className="btn-out"
                onClick={() => handleLogout()}
              >
                SAIR
              </button>
            </div>
            <form className="search-mobile">
              <input type="search" placeholder="Search" />
              <button type="submit">
                <i className="bi bi-search"></i>
              </button>
            </form>
          </div>
        </NavMobile>

        <ButtonMenuHamburger
          onClick={toggleMenu}
          className={isMenuOpen ? "bi bi-x" : "bi bi-list"}
        />
      </Container>
    </Nav>
  );
}
