import type { Metadata } from "next";
import { Roboto } from "next/font/google";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Generated by create next app",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}
