import { jwtVerify } from "jose";
import { cookies } from "next/headers";

export default async function Home() {
  const cookie = cookies().get("auth");

  let user;
  if (cookie) {

    user = await jwtVerify(
      cookie.value,
      new TextEncoder().encode(process.env.JWT_SECRET)
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {JSON.stringify(user)}
    </main>
  );
}
