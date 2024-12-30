import Image from "next/image";
import Link from "next/link";
import { Form, Menu, Nav } from "./styled";

export default function Navbar() {

    return (
        <Nav>
            <Link href="/">
                <Image
                    src="/logo.svg"
                    alt="Logo"
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
                    <Link href="/" className="active">
                        QUEM SOMOS
                    </Link>
                ) : (
                    <Link href="/">
                        QUEM SOMOS
                    </Link>)
                }
                {window.location.pathname === "/eventos" ? (
                    <Link href="/" className="active">
                        EVENTOS
                    </Link>
                ) : (
                    <Link href="/">
                        EVENTOS
                    </Link>)
                }
            </Menu>
        </Nav>
    );
}