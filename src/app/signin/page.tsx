"use client";
import { Typography, TextField, Link } from "@mui/material";
import { useSignIn } from "./hooks/useSignIn";
import { Button } from "../components/button";
import Image from "next/image";

export default function SignIn() {
  const { register, handleSubmit, errors, loading, onSubmit } = useSignIn();

  return (
    <>
      <div
        className={`bg-[url('/assets/logoSimplify.svg')] bg-contain bg-right bg-no-repeat h-screen overflow-hidden`}
      >
        <div className="rounded-[20px] bg-gradient-to-br from-white to-[#F1F3F4] shadow-[5px_5px_38px_#ffffff] flex flex-col fixed left-[20%] top-[50%] -translate-y-[50%] p-[30px] max-w-full">
          <div className="flex items-center gap-[20px]">
            <div className="relative max-h-20">
              <Image src="/assets/logoSimplify.svg" alt="Logo Simplify" fill />
            </div>
            <div className="relative max-h-11 pr-5">
              <Image src="/assets/logoQuattrus.svg" alt="Logo Quattrus" fill />
            </div>
          </div>
          <div className="flex justify-start mt-[20px]">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-1"
              style={{ width: "100%" }}
            >
              <Typography
                color="primary"
                align="left"
                gutterBottom={true}
                variant="inherit"
                sx={{ fontWeight: "bold", textTransform: "uppercase" }}
              >
                Seja bem-vindo!
              </Typography>
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
                <Typography variant="caption" color="error">
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
                <Typography variant="caption" color="error">
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
                <Typography variant="caption" color="error">
                  {errors.password.message}
                </Typography>
              )}
              <Button
                loading={loading}
                sx={{
                  borderRadius: "8px",
                  backgroundColor: "primary.main",
                  color: "common.white",
                  padding: "7px 10px",
                  marginTop: "30px",
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
              <Typography
                variant="caption"
                color="primary.main"
                sx={{ fontWeight: "bold", marginTop: "10px" }}
              >
                <Link href="/forgot-password" underline="always">
                  Esqueceu a senha?
                </Link>
              </Typography>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
