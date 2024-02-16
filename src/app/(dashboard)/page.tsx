import { User } from "@prisma/client";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import HomeScreen from "./page.client";

export default async function Home() {
  const cookie = cookies().get("auth");

  if (!cookie) return notFound();

  let user: Omit<User, "password"> | null;
  const token: { payload: Omit<User, "password"> | null } = await jwtVerify(
    cookie.value,
    new TextEncoder().encode(process.env.JWT_SECRET)
  );
  user = token.payload;

  return (
    <main className="">
      <HomeScreen />
    </main>
  );
}
