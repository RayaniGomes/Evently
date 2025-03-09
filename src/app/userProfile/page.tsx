import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import ContainerProfile from "@/(components)/containerProfile";
import { authOptions } from "@/lib/auth";

export default async function Profile() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const user = {
    name: session.user.name ?? "",
    email: session.user.email ?? "",
  };

  return <ContainerProfile {...user} />;
}
