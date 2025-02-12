// app/perfil/page.js (Server Component)
import PerfilContainer from "@/(components)/perfilContainer";
import { SessionProp } from "@/interfaces";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Perfil() {
  const session: SessionProp | null = await getServerSession();

  if (!session) {
    redirect("/login");
  }

  return <PerfilContainer session={session} />;
}
