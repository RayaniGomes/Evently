import Image from "next/image";
import Link from "next/link";
import { ButtonMenuHamburger, Form, Login, Menu, Nav, NavMobile } from "./styled";
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <Nav>
            <Link href="/">
                <Image
                    src="/logo.svg"
                    alt="Logo"
                    loading="lazy"
                    objectFit="cover"
                    width={150}
                    height={50}
                />
            </Link>

            <Form>
                <input type="search" placeholder="Pesquisar" />
                <button type="submit">
                    <i className="bi bi-search"></i>
                </button>
            </Form>

            <Menu>
                {window.location.pathname === "/" ? (
                    <Link href="/" className="active">
                        HOME
                    </Link>
                ) : (
                    <Link href="/">
                        HOME
                    </Link>)
                }
                {window.location.pathname === "/quem-somos" ? (
                    <Link href="/quem-somos" className="active">
                        QUEM SOMOS
                    </Link>
                ) : (
                    <Link href="/quem-somos">
                        QUEM SOMOS
                    </Link>)
                }
                {window.location.pathname === "/eventos" ? (
                    <Link href="/eventos" className="active">
                        EVENTOS
                    </Link>
                ) : (
                    <Link href="/eventos">
                        EVENTOS
                    </Link>)
                }
            </Menu>

            <Login>
                {window.location.pathname === "/login" ? (
                    <Link href="/login" className="active">
                        LOGIN
                    </Link>
                ) : (
                    <Link href="/login">
                        LOGIN
                    </Link>
                )}

                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                        <i className="bi bi-person-fill" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu">
                        <Dropdown.Item href="">Perfil</Dropdown.Item>
                        <Dropdown.Item href="">Sair</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Login>

            <NavMobile className={isMenuOpen ? 'menu-mobile' : ''}>
                <div className="menu">
                    <div>
                        {window.location.pathname === "/" ? (
                            <Link href="/" className="active">
                                HOME
                            </Link>
                        ) : (
                            <Link href="/">
                                HOME
                            </Link>)
                        }
                    </div>
                    <div>
                        {window.location.pathname === "/quem-somos" ? (
                            <Link href="/quem-somos" className="active">
                                QUEM SOMOS
                            </Link>
                        ) : (
                            <Link href="/quem-somos">
                                QUEM SOMOS
                            </Link>)
                        }
                    </div>
                    <div>
                        {window.location.pathname === "/eventos" ? (
                            <Link href="/eventos" className="active">
                                EVENTOS
                            </Link>
                        ) : (
                            <Link href="/eventos">
                                EVENTOS
                            </Link>)
                        }
                    </div>
                    <div>
                        {window.location.pathname === "/login" ? (
                            <Link href="/login" className="active">
                                LOGIN
                            </Link>
                        ) : (
                            <Link href="/login">
                                LOGIN
                            </Link>
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

            <ButtonMenuHamburger className={isMenuOpen ? 'bi bi-x' : 'bi bi-list'} onClick={toggleMenu} />
        </Nav>
    );
}