import { db as prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
// import { hashPassword } from '@prisma/client/runtime/library';

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { name, email, password } = data;
  console.log("ROUTE HANDLER", data);

  const isUserExists = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (isUserExists) {
    return NextResponse.json({error: "E-mail já cadastrado!"}, {status: 400});
  }

const hashedPassword = await bcrypt.hash(password, 10);
const user = await prisma.user.create({
  data: {
    name,
    email,
    hashedPassword,
  },
});

  return NextResponse.json(user);
}