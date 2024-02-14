import { CreateUserFormSchema } from "@/lib/schemas";

export async function SignInHook(data: CreateUserFormSchema) {
  console.log(data);
  const user = await fetch("api/user?username=" + data.username);
  console.log("asd", user);

  return await user.json();
}
