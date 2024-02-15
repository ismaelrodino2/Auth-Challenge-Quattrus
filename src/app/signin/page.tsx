"use client";
import { Typography, TextField } from "@mui/material";
import { useSignIn } from "./hooks/use-signin-hook";
import { Button } from "../components/button";

export default function SignIn() {
  const { register, handleSubmit, errors, loading, onSubmit } = useSignIn();



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
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
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
          {...register("company")}
          error={Boolean(errors.company)}
          helperText={errors.company?.message}
        />
        {errors?.company && (
          <Typography color="error">{errors.company.message}</Typography>
        )}
        <TextField
          sx={{
            color: "primary.main",
            fontSize: "12px",
            paddingTop: 0,
            paddingBottom: "2px",
          }}
          {...register("password")}
          error={Boolean(errors.username)}
          helperText={errors.username?.message}
          variant="standard"
          color="primary"
          label="Nome de usuário"
          {...register("username")}
        />
        {errors?.username && (
          <Typography color="error">{errors.username.message}</Typography>
        )}
        <TextField
          sx={{
            borderRadius: "8px",
            color: "primary.main",
            fontSize: "12px",
            paddingTop: 0,
            paddingBottom: "2px",
          }}
          label="Senha"
          {...register("password")}
          type="password"
          error={Boolean(errors.password)}
          helperText={errors.password?.message}
          variant="standard"
          color="primary"
          {...register("password")}
        />
        {errors?.password && (
          <Typography color="error">{errors.password.message}</Typography>
        )}
        <Button
          loading={loading}
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
      </form>
    </>
  );
}
