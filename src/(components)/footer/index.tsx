import Image from "next/image";
import { FooterContainer } from "./styled";
import Link from "next/link";
import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <FooterContainer>
      <Container className="container">
        <div className="info">
          <Image
            src="/logo.svg"
            alt="Logo"
            loading="lazy"
            objectFit="cover"
            width={120}
            height={50}
          />

          <div className="contato">
            <Link href="mailto:contato@eventos.com">
              <i className="bi bi-envelope-fill" />
              contato@eventos.com <br />
              assistencia@eventos.com
            </Link>
            <Link href="tel:+5511999999999">
              <i className="bi bi-telephone-fill" />
              (11) 99999-9999
            </Link>
          </div>

          <div className="social">
            <Link href="https://www.instagram.com">
              <i className="bi bi-instagram" />
            </Link>
            <Link href="https://www.facebook.com">
              <i className="bi bi-facebook" />
            </Link>
            <Link href="https://www.twitter.com">
              <i className="bi bi-linkedin" />
            </Link>
          </div>
        </div>

        <p>Copyright © 2024 Rayani Gomes. Todos os direitos reservados.</p>
      </Container>
    </FooterContainer>
  );
}
