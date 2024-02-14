"use client";

import { CreateUserFormSchema, createUserFormSchema } from "@/lib/schemas";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { SignInHook } from "./hooks/signin-hook";
import { useState } from "react";
import { Button, TextField } from "@mui/material";

export default function SignIn() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserFormSchema>({
    resolver: zodResolver(createUserFormSchema),
    defaultValues: {
      company: "",
      password: "",
      username: "",
    },
  });

  async function onSubmit(data: CreateUserFormSchema) {
    setLoading(true);
    try {
      const user = await SignInHook(data);
      console.log("asdasd", user);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-1 py-2">
          <label htmlFor="email">Email</label>
          <input placeholder="company" {...register("company")} />
          {errors?.username && (
            <p className="text-sm text-red-500">{errors.username.message}</p>
          )}
        </div>

        <div className="grid gap-1 py-2">
          <label htmlFor="email">Email</label>
          <input placeholder="username" {...register("username")} />
          {errors?.username && (
            <p className="text-sm text-red-500">{errors.username.message}</p>
          )}
        </div>

        <div className="grid gap-1 py-2">
          <label htmlFor="password">Password</label>
          <input
            {...register("password")}
            type="password"
            className={cn({
              "focus-visible:ring-red-500": errors.password,
            })}
            placeholder="Password"
          />
          {errors?.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}
        </div>

        <button type="submit">Enviar</button>
      </form>
    </main>
  );
}
