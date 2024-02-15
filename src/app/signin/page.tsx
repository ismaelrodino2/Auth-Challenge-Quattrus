"use client";

import { CreateUserFormSchema, createUserFormSchema } from "@/lib/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSignIn } from "./hooks/useSignIn";
import { useState } from "react";
import { Button, Typography, FormControl, TextField, Box } from "@mui/material";
import { error } from "console";
import logo from "./../../../assets/logo.png";
import logoSimplify from "./../../../public/assets/logoSimplify.svg";

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
      <div
        style={{
          backgroundImage: `url(${logoSimplify.src})`,
          backgroundSize: "contain",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            borderRadius: "20px",
            background: "linear-gradient(315deg, background.default, grey.100)",
            boxShadow: "-19px -19px 38px #bebebe, 19px 19px 38px #ffffff",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', // Vertically center the content
            position: 'fixed',
            left: '20%',
            top: '50%', 
            transform: 'translateY(-50%)',
            padding: '30px',
            maxWidth: '100%'
          }}
        >
         
          <Typography
            color="primary"
            align="left"
            gutterBottom={true}
            variant="inherit"
            sx={{ fontWeight: "bold" }}
          >
            Seja bem-vindo!
          </Typography>
          <FormControl onSubmit={handleSubmit(onSubmit)} sx={{ gap: '10px' }}>
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
              <Typography color="error">{errors.company.message}</Typography>
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
              variant="standard"
              color="primary"
              label="Senha"
              {...register("password", { required: true })}
            />
            {errors?.password && (
              <Typography color="error">{errors.password.message}</Typography>
            )}
            <Button
              sx={{
                borderRadius: "8px",
                backgroundColor: "primary.main",
                color: "common.white",
                padding: "7px 10px",
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
              Entrar
            </Button>
          </FormControl>
        </Box>
      </div>
    </>
  );
}
