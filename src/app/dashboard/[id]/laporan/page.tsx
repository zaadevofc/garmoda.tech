"use client";

import Layouts from "~/components/Layouts";
import { Badge } from "~/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

const tempData = [
  {
    suhu: "46 Â°C",
    "k.tanah": "20%",
    "k.udara": "89%",
    waktu: "23:12:12 10/03/24",
  },
  {
    suhu: "46 Â°C",
    "k.tanah": "20%",
    "k.udara": "89%",
    waktu: "23:12:12 10/03/24",
  },
  {
    suhu: "46 Â°C",
    "k.tanah": "20%",
    "k.udara": "89%",
    waktu: "23:12:12 10/03/24",
  },
  {
    suhu: "46 Â°C",
    "k.tanah": "20%",
    "k.udara": "89%",
    waktu: "23:12:12 10/03/24",
  },
  {
    suhu: "46 Â°C",
    "k.tanah": "20%",
    "k.udara": "89%",
    waktu: "23:12:12 10/03/24",
  },
];

const tableHead = ["Suhu", "K. Tanah", "K. Udara", "Waktu"];

const Laporan = ({ params }: any) => {
  return (
    <>
      <Layouts id={params.id}>
        <div className="flex flex-col w-full">
          <div className="flex items-center mb-7 pb-3 pt-5 gap-3 w-full sticky top-0 bg-white z-10">
            <div className="flex items-center justify-between w-full bg-gray-100 border border-gray-300 py-1.5 px-5 rounded-[--radius]">
              <h1 className="font-semibold">Notifikasi dan Laporan</h1>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {[...new Array(4)].map((x) => (
              <div className="flex flex-col gap-y-3 w-full bg-gray-100 border border-gray-300 py-3 px-5 rounded-[--radius]">
                <div className="flex items-center justify-between">
                  <h1 className="font-semibold text-lg">
                    ð ï¸ Pemberitahuan ada perbaikan pada sistem
                  </h1>
                  <Badge variant={"destructive"}>Baru</Badge>
                </div>
                <p className="text-sm opacity-80">
                  Cillum enim sint nostrud ea exercitation adipisicing ad
                  officia. Excepteur qui do fugiat id non magna voluptate
                  cupidatat cupidatat officia. Cillum enim sint nostrud ea
                  exercitation adipisicing ad officia. Excepteur qui do fugiat
                  id non magna voluptate cupidatat cupidatat officia. Cillum
                  enim sint nostrud ea exercitation adipisicing ad officia.
                  Excepteur qui do fugiat id non magna voluptate cupidatat
                  cupidatat officia.
                </p>
                <div className="flex items-center justify-between text-sm font-semibold text-gray-500">
                  <h1>Hari ini</h1>
                  <h1>12:33:33 20/01/24</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layouts>
    </>
  );
};

export default Laporan;
