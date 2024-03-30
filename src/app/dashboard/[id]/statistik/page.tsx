"use client";

import Layouts from "~/components/Layouts";
import { Badge } from "~/components/ui/badge";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "~/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

const tableHead = ["Suhu", "K. Tanah", "K. Udara", "Pompa", "Blower", "Waktu"];
const tempData = [
  {
    suhu: "46 Â°C",
    "k.tanah": "20%",
    "k.udara": "89%",
    pompa: 1,
    blower: 1,
    waktu: "23:12:12 10/03/24",
  },
  {
    suhu: "46 Â°C",
    "k.tanah": "20%",
    "k.udara": "89%",
    pompa: 0,
    blower: 0,
    waktu: "23:12:12 10/03/24",
  },
  {
    suhu: "46 Â°C",
    "k.tanah": "20%",
    "k.udara": "89%",
    pompa: 0,
    blower: 0,
    waktu: "23:12:12 10/03/24",
  },
  {
    suhu: "46 Â°C",
    "k.tanah": "20%",
    "k.udara": "89%",
    pompa: 1,
    blower: 1,
    waktu: "23:12:12 10/03/24",
  },
  {
    suhu: "46 Â°C",
    "k.tanah": "20%",
    "k.udara": "89%",
    pompa: 1,
    blower: 0,
    waktu: "23:12:12 10/03/24",
  },
];

const Statistik = ({ params }: any) => {
  return (
    <>
      <Layouts id={params.id}>
        <div className="flex flex-col w-full">
          <div className="flex items-center mb-7 pb-3 pt-5 gap-3 w-full sticky top-0 bg-white z-10">
            <div className="flex items-center justify-between w-full bg-gray-100 border border-gray-300 py-1.5 px-5 rounded-[--radius]">
              <h1 className="font-semibold">Perhitungan dan Rata rata</h1>
            </div>
          </div>
          <div className="border border-gray-300 rounded-[--radius] mb-10">
            <Table className="w-full shadow-inner bg-gray-100 p-5 rounded-[--radius]">
              <TableHeader>
                <TableRow className="font-bold">
                  {tableHead.map((x) => (
                    <TableHead className="text-center">{x}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody className="text-center">
                {tempData.map((x, i) => (
                  <TableRow key={i} className="font-medium">
                    <TableCell>{x.suhu}</TableCell>
                    <TableCell>{x["k.tanah"]}</TableCell>
                    <TableCell>{x["k.udara"]}</TableCell>
                    <TableCell>
                      {x.pompa ? (
                        <Badge>Aktif</Badge>
                      ) : (
                        <Badge variant={"destructive"}>Mati</Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      {x.blower ? (
                        <Badge>Aktif</Badge>
                      ) : (
                        <Badge variant={"destructive"}>Mati</Badge>
                      )}
                    </TableCell>
                    <TableCell>{x.waktu}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </Layouts>
    </>
  );
};

export default Statistik;
