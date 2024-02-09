"use client";

import { useForm, SubmitHandler } from "react-hook-form";

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
  } = useForm<Inputs>();

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
