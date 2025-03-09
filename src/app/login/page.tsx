import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import ContainerLogin from "@/(components)/containerLogin";
import { authOptions } from "@/lib/auth";

export default async function Login() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/userProfile");
  }

  return <ContainerLogin />;
}
