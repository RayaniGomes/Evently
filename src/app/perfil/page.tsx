"use client";
import Navbar from "@/(components)/navbar";
import Titulo from "@/(components)/titulo";
import { Botoes, ContainerPerfil, Section } from "./styled";
import Footer from "@/(components)/footer";
import InputGrupo from "@/(components)/inputGrupo";

export default function Perfil() {
  return (
    <main>
      <Navbar />
      <Section>
        <Titulo titulo="Meu perfil" border="--azul-escuro" />
        <div className="perfil">
          <Botoes>
            <button className="active">Dados Pessoais</button>
            <button>Minhas Inscrições</button>
            <button>Meus Eventos</button>
            <button>Criar Evento</button>
          </Botoes>
          <ContainerPerfil>
            <InputGrupo
              type="text"
              placeholder="Nome Completo"
              icon="bi bi-person-fill"
            />
            <InputGrupo type="date" />
            <InputGrupo
              type="email"
              placeholder="Email"
              icon="bi bi-envelope-fill"
            />
            <div className="senha">
              <h5>Alterar Senha</h5>
              <InputGrupo
                type="password"
                placeholder="Senha"
                icon="bi bi-lock-fill"
              />
              <InputGrupo
                type="password"
                placeholder="Confirmar Senha"
                icon="bi bi-lock-fill"
              />
            </div>

            <button className="btnForm">Atualizar</button>
          </ContainerPerfil>
        </div>
      </Section>
      <Footer />
    </main>
  );
}
