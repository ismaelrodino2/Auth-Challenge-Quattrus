import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = req.url ? new URL(req.url) : new URL("");
    const username: string = searchParams.get("username")!;

    let user;

    if (username) {
      user = await prisma.user.findUnique({
        where: {
          username,
        },
      });
    }
    

    return NextResponse.json({ user }, { status: 200 });
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
