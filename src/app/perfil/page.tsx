import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { SesseionProps } from "@/interfaces";
import { redirect } from "next/navigation";
import PerfilContainer from "@/(components)/perfilContainer";

export default async function Perfil() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const sessionProps: SesseionProps = {
    user: {
      _id: session.user.id,
      criador: session.user.criador,
      nome: session.user.name as string,
      email: session.user.email as string,
      fotoPerfil: session.user.image as string,
      senha: "",
      dataNascimento: "",
      eventos: [],
      minhasInscricoes: [],
    },
    id: session.user.id,
    criador: session.user.criador,
  };

  return <PerfilContainer {...sessionProps} />;
}
