import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import ContainerPerfil from "@/(components)/containerPerfil";

export default async function Perfil() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const user = {
    name: session.user.name ?? "",
    email: session.user.email ?? "",
  };

  return <ContainerPerfil {...user} />;
}
