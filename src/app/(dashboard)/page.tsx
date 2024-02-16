import { User } from "@prisma/client";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

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
    <main className="flex min-h-screen flex-col items-center gap-4 justify-center">
      <h1 className="text-3xl font-medium">Olá {user?.username}</h1>
      <p>Empresa:{user?.company}</p>
      <p>ID:{user?.id}</p>
    </main>
  );
}
