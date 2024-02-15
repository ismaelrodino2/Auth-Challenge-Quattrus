"use client";

import { CreateUserFormSchema, createUserFormSchema } from "@/lib/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSignIn } from "./hooks/useSignIn";
import { useState } from "react";
import { Button, Typography, FormControl, TextField } from "@mui/material";
import { error } from "console";

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
      const user = await useSignIn(data);
      console.log("asdasd", user);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Typography
        color="primary"
        align="left"
        gutterBottom={true}
        variant="inherit"
        sx={{ fontWeight: "bold" }}
      >
        Seja bem-vindo!
      </Typography>
      <FormControl onSubmit={handleSubmit(onSubmit)}>
        <TextField
          sx={{
            borderRadius: "8px",
            color: "primary.main",
            fontSize: "12px",
            paddingTop: 0,
            paddingBottom: "2px",
          }}
          variant="standard"
          color="primary"
          label="Empresa"
          {...register("company", { required: true })}
        />
        {errors?.company && (
          <Typography color="error">
            {errors.company.message}
          </Typography>
        )}
        <TextField
          sx={{
            color: "primary.main",
            fontSize: "12px",
            paddingTop: 0,
            paddingBottom: "2px",
            // "& .MuiInput-input": {
            //   backgroundColor: "grey.100",
            //   borderRadius: "4px",
            // },
          }}
          variant="standard"
          color="primary"
          label="Nome"
          {...register("username", { required: true })}
        />
        {errors?.username && (
          <Typography color="error">
            {errors.username.message}
          </Typography>
        )}
        <TextField
          sx={{
            borderRadius: "8px",
            color: "primary.main",
            fontSize: "12px",
            paddingTop: 0,
            paddingBottom: "2px",
          }}
          variant="standard"
          color="primary"
          label="Senha"
          {...register("password", { required: true })}
        />
        {errors?.password && (
          <Typography color="error">
            {errors.password.message}
          </Typography>
        )}
        <Button
          sx={{
            borderRadius: "8px",
            backgroundColor: "primary.main",
            color: "common.white",
            padding: "13px 10px",
            fontSize: "12px",
            maxWidth: "115px",
            "&:hover": {
              color: "common.black",
              borderColor: "grey.400",
              border: "1px",
            },
          }}
          type="submit"
        >
          Enviar
        </Button>
      </FormControl>
    </>
  );
}
