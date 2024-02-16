import type { Metadata } from "next";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Link from "next/link";
import { NavBar } from "../components/navbar";
import TopBar from "../components/navbarTop/navBarTop";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Generated by create next app",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <TopBar/>
    <section className="px-7 flex gap-7 flex-col">
      <div className=" pt-6">
        {/* breadcrumb */}
        <div className="text-lg flex items-center">
          <KeyboardArrowLeftIcon className="text-aquamarine" />
          <span className="text-aquamarine mr-1">Dashboard</span> | Cronograma
        </div>

        {/* text */}
        <div className="flex gap-1 mt-7">
          <span>
            <CalendarMonthIcon className="text-aquamarine" />
          </span>
          <h1 className="text-lg font-light text-steelGray">Cronograma</h1>
        </div>
        <hr className="bg-mercuryGray h-[1px] my-2 opacity-30" />
        <p>
          Aqui você pode acompanhar os resultados dos seus projetos.
          <Link className="text-aquamarine font-bold ml-1" href="/saiba-mais">
            Saiba mais
          </Link>
        </p>
      </div>
      {children}
    </section>
    </>
  );
}
