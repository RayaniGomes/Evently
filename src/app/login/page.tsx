'use client';
import Footer from "@/(components)/footer";
import Navbar from "@/(components)/navbar";
import { Section } from "./styled";
import { Container } from "react-bootstrap";
import FormLogin from "@/(components)/formularios/formLogin";
import FormUsuario from "@/(components)/formularios/formUsuario";

export default function Login() {
    return (
        <main>
            <Navbar />
            <Container as={Section}>
                <div className="form-login">
                    <h3>Login</h3>
                    <FormLogin />
                </div>
                <div className="hr" />
                <div className="form-cadastre">
                    <h3>Cadastre-se</h3>
                    <FormUsuario /> 
                </div>
            </Container>  
            <Footer />
        </main>
    );
}