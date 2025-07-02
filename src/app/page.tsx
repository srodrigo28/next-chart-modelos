import { ChartLineLabel } from "@/components/lineChart";
import { ChartBarInteractive } from "@/components/ui/barFull";
import { ChartBarLabelCustom } from "@/components/ui/barRightChart";
import { ChartBarMultiple } from "@/components/ui/barUpChart";
import { ChartBarLabel } from "@/components/ui/barUpChart2";
import { ChartAreaInteractive } from "@/components/ui/pieAreaChart";
import { PieCharGrafic } from "@/components/ui/pieCharGrafic";

import { ChartPieInteractive } from "@/components/ui/pieChartSelect";
import { ChartRadialShape } from "@/components/ui/radialChart1";
import { ChartRadialLabel } from "@/components/ui/radialChart2";
import { ChartRadialStacked } from "@/components/ui/radialChartMidium";
import { SideBar } from "@/components/ui/siderBar";
import Image from "next/image";
import { FaArrowUpRightDots, FaRegBell } from "react-icons/fa6";
export default function Home() {

  return (
    <div className="flex gap-3 flex-col h-screen p-3">

      <div className="flex md:gap-3 items-center justify-between mb-5 bg-slate-900 py-5 rounded-md px-5">
        <div className="flex">
          <Image src="https://avatars.githubusercontent.com/u/23580648?v=4" className=" ml-2 mr-2 rounded-full" alt="" width={50} height={50} />
          <div className="flex flex-col">
            <p>Olá, <span>Sebastião</span></p>
            <p className="bg-green-600 py-1 mt-1 rounded-full text-center px-5">Admin</p>
          </div>
          </div>
        <input type="text" placeholder="Buscar por ?" className="flex-1 border-2 tracking-wider border-slate-700 p-3 mr-2 bg-slate-900 md:flex hidden rounded-md " />
        <div className="flex gap-2 justify-between md:w-40 w-36 px-3 mr-5 md:mr-1">
          <div className="flex gap-2">

            <button className="w-12 bg-slate-800 rounded-md flex justify-center items-center "> <FaArrowUpRightDots /> </button>
            <button className="w-12 bg-slate-800 rounded-md flex justify-center items-center "> <FaRegBell /> </button>
            <SideBar />
          </div>

        </div>
      </div>

      <div className="flex px-3 md:px-0 items-center justify-between">
        <div className="w-62 flex flex-col">
          <h1 className="text-zinc-200 text-3xl">Dashbord</h1>
          <p className="text-zinc-500">Bem vindo ao Painel de controle</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-3 p-3">
        <div className="flex-1 min-w-[33%]">
          <ChartPieInteractive />
        </div>
        <div className="flex-1 min-w-[33%]">
          <ChartRadialLabel />
        </div>

        <div className="flex-1 min-w-[33%]">
          <PieCharGrafic />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-5">
        <div className="flex-1 min-w-[33%]">
          <ChartRadialStacked />
        </div>
        <div className="flex-1 min-w-[33%]">
          <ChartBarMultiple />
        </div>
        <div className="flex-1 min-w-[33%]">
          <ChartBarLabel />
        </div>
      </div>

      <div className="mt-36 mb-36 hidden" > </div>

      <div className="flex flex-col md:flex-row gap-5 mb-5">

        <div className="flex-1 min-w-[33%]">
          <ChartBarLabelCustom />
        </div>

        <div className="flex-1 min-w-[33%]">
          <ChartRadialShape />
        </div>

        <div className="flex-1 min-w-[33%]">
          <ChartLineLabel />
        </div>
      </div>

      <div className="mt-20 mb-20 hidden" > </div>

      <div className="">
        <ChartAreaInteractive />
      </div>

      <div className="">
        <ChartBarInteractive />
      </div>
    </div>
  );
}
