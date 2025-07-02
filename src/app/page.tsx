import { ChartPieDonut } from "@/components/pieChart-1";
import { ChartBarLabelCustom } from "@/components/ui/barRightChart";
import { ChartBarMultiple } from "@/components/ui/barUpChart";
import { ChartAreaInteractive } from "@/components/ui/pieAreaChart";
import { ChartPieDonutText } from "@/components/ui/pieChar";
import { ChartRadialShape } from "@/components/ui/radialChart1";
import { ChartRadialLabel } from "@/components/ui/radialChart2";

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      
      <div className="flex gap-5 mb-5">
        <div className="w-60 h-60">
          <ChartPieDonutText />
        </div>
        <div className="w-60 h-60">
          <ChartPieDonut />
        </div>

        <div className="w-60 h-60">
             <ChartBarMultiple />
        </div>
        <div className="w-60 h-60">
            <ChartBarLabelCustom />
        </div>

        <div className="w-60 h-60">
          <ChartRadialShape />
        </div>

        <div className="w-60 h-60">
          <ChartRadialLabel />
        </div>
      </div>

      <div className="mt-36">
        <ChartAreaInteractive />
      </div>
    </div>
  );
}
