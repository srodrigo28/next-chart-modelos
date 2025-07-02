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

export default function Home() {
  return (
    <div className="flex gap-3 flex-col h-screen p-3">
      <h1 className="text-6xl font-semibold text-center py-10">Modelos de gráficos</h1>    

      <div className="flex flex-col md:flex-row gap-3 p-3">
        <div className="flex-1">
          <ChartPieInteractive />
        </div>
        <div className="flex-1">
          <ChartRadialLabel />
        </div>
        
        <div className="flex-1">
          <PieCharGrafic />
        </div>
      </div>  
      
      <div className="flex flex-col md:flex-row gap-5">
        <div className="flex-1">
          <ChartRadialStacked />
        </div>
        <div className="flex-1">
           <ChartBarMultiple />
        </div>
        <div className="flex-1">
           <ChartBarLabel />
        </div>
      </div>
      
      <div className="mt-36 mb-36 hidden" > </div>
      
      <div className="flex flex-col md:flex-row gap-5 mb-5">
        
        <div className="flex-1">
            <ChartBarLabelCustom />
        </div>

        <div className="flex-1">
          <ChartRadialShape />
        </div>

        <div className="flex-1">
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
