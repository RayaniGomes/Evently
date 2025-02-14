import PerfilContainer from "@/(components)/perfilContainer";
import { SessionProp } from "@/interfaces";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Perfil() {
  const session: SessionProp | null = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return <PerfilContainer session={session} />;
}
