"use client";

import { LuDot } from "react-icons/lu";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import Layouts from "~/components/Layouts";

const data = [
  {
    name: "Suhu Udara",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "K Udara",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "K Tanah",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "K Udara",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "K Tanah",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "K Udara",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "K Tanah",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "K Udara",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "K Tanah",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
];
const Dashboard = ({ params }: any) => {
  return (
    <>
      <Layouts id={params.id}>
        <div className="flex flex-col w-full gap-y-10 mt-10">
          <div className="flex items-center justify-between gap-3 w-full">
            {[...new Array(4)].map((x) => (
              <>
                <div className="flex flex-col gap-1 bg-gray-100 shadow-inner border border-gray-300 rounded-[--radius] px-5 py-3.5 w-full">
                  <h1 className="font-medium opacity-80 text-sm">Suhu Udara</h1>
                  <h1 className="text-3xl font-bold text-emerald-700">
                    50 Â°C
                  </h1>
                  <div className="flex items-center gap-1 text-sm">
                    <h1 className="text-rose-600">344%</h1>
                    <LuDot className="text-lg opacity-50" />
                    <h1>25 Hari</h1>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className="flex w-full gap-3">
            <div className="h-52 w-full flex flex-col gap-y-5 bg-gray-100 shadow-inner border border-gray-300 rounded-[--radius] px-3 pt-5">
              <div className="flex flex-col px-5">
                <h1 className="font-semibold">Statistik</h1>
                <h1 className="text-sm">Lab. Mekatronika Timur</h1>
              </div>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} className="text-sm">
                  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis
                    dataKey="name"
                    type="category"
                    className="text-center text-sm hidden"
                  />
                  {/* <CartesianGrid strokeDasharray="3 3" /> */}
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="uv"
                    stroke="#8884d8"
                    fillOpacity={1}
                    fill="url(#colorUv)"
                  />
                  <Area
                    type="monotone"
                    dataKey="pv"
                    stroke="#82ca9d"
                    fillOpacity={1}
                    fill="url(#colorPv)"
                  />
                  <Area
                    type="monotone"
                    dataKey="amt"
                    stroke="#aaf649"
                    fillOpacity={1}
                    fill="url(#colorPv)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="h-52 w-full flex flex-col gap-y-5 bg-gray-100 shadow-inner border border-gray-300 rounded-[--radius] px-3 pb-2 pt-5">
              <div className="flex flex-col px-5">
                <h1 className="font-semibold">Riset Terakhir</h1>
                <h1 className="text-sm">Lab. Mekatronika Timur</h1>
              </div>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} className="text-sm">
                  <XAxis dataKey="name" className="hidden" />
                  <Tooltip />
                  <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                  <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
                  <Bar dataKey="amt" stackId="a" fill="#637480" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </Layouts>
    </>
  );
};

export default Dashboard;
