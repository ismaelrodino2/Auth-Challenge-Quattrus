"use client";

import { CreateUserFormSchema, createUserFormSchema } from "@/utils/schemas";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type Inputs = {
  company: string;
  username: string;
  password: string;
};

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserFormSchema>({
    resolver: zodResolver(createUserFormSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <main>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="company"
          {...register("company", { required: true })}
        />

        <input
          placeholder="username"
          {...register("username", { required: true })}
        />

        <input
          placeholder="password"
          {...register("password", { required: true })}
        />

        <button type="submit">Enviar</button>
      </form>
    </main>
  );
}
