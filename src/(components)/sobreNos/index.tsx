'use client';
import Link from "next/link";
import { Section } from "./styled";

export default function Sobre() {
    return (
        <Section>
            <h1>Sobre Nós <hr/></h1>
            <h5>Evently é um sistema inovador de gerenciamento de eventos projetado para simplificar a organização, planejamento e execução de qualquer tipo de evento, desde pequenas reuniões corporativas até grandes celebrações. Com uma interface intuitiva e funcionalidades inteligentes, o Evently permite gerenciar inscrições, cronogramas de forma eficiente e integrada. Seu design moderno e responsivo oferece uma experiência fluida tanto para organizadores quanto para participantes, garantindo que cada detalhe do evento seja cuidadosamente planejado e executado. Evently transforma a complexidade em praticidade, conectando pessoas e momentos de maneira única e inesquecível.</h5>
            <div className="redes">
                <Link className="bi bi-instagram" href="/" />
                <Link className="bi bi-facebook" href="/" />
                <Link className="bi bi-linkedin" href="/" />
            </div>
        </Section>
    );
}