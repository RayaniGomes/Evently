import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import PerfilContainer from "@/(components)/perfilContainer";

export default async function Perfil() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const user = {
    name: session.user.name ?? '',
    email: session.user.email ?? '',
  };

  console.log(user);

  return <PerfilContainer {...user} />;
}