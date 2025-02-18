import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import LoginContainer from "@/(components)/loginContainer";

export default async function Login() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/perfil");
  }

  return <LoginContainer />;
}
