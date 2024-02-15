import prisma from "@/lib/prisma";
import { createUserFormSchema } from "@/lib/schemas";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import * as jose from "jose";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { username, password, company } = createUserFormSchema.parse(body);

    const user = await prisma.user.findUnique({
      where: {
        username,
        company,
        password,
      },
    });

    //token
    if (user) {
      const { password, ...userWithoutPassword } = user;

      const token = await new jose.SignJWT(userWithoutPassword)
        .setProtectedHeader({ alg: "HS256", typ: "JWT" })
        .sign(new TextEncoder().encode(process.env.JWT_SECRET));

      //set cookie as token
      cookies().set({
        name: "auth",
        value: token,
        httpOnly: true,
        path: "/",
      });
      return NextResponse.json({ user }, { status: 200 });
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
