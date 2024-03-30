'use client'

import Link from "next/link";
import React from "react";
import {
  LuActivity,
  LuAirplay,
  LuBadgeAlert,
  LuBarChart2,
  LuBarChart3,
  LuLeaf,
  LuMonitor,
  LuSettings2,
} from "react-icons/lu";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

const SideBar = ({ id }: any) => {
  const sidebar = [
    { icon: LuBarChart2, name: "Dashboard", href: `/dashboard/${id}` },
    { icon: LuActivity, name: "Monitor", href: `/dashboard/${id}/monitor` },
    { icon: LuAirplay, name: "Device", href: `/dashboard/${id}/device` },
    { icon: LuBarChart3, name: "Statistik", href: `/dashboard/${id}/statistik` },
    { icon: LuBadgeAlert, name: "Laporan", href: `/dashboard/${id}/laporan` },
    { icon: LuSettings2, name: "Settings", href: `/dashboard/${id}/settings` },
    { icon: LuMonitor, name: "Admin", href: `/dashboard/${id}/admin` },
  ];

  const pathname = usePathname();

  return (
    <nav className="flex flex-col sticky top-6 max-w-48 h-full w-full border-rs border-black">
      <div className="flex items-center text-2xl gap-3">
        <LuLeaf className="fill-emerald-600" />
        <h1 className="font-black underlines underline-offset-8 decoration-2 decoration-wavy decoration-emerald-600">
          Garmoda
        </h1>
      </div>
      <div className="flex flex-col mt-5 gap-3">
        <Select>
          <SelectTrigger className="max-w-full border-gray-300 shadow-inner font-medium bg-gray-100">
            <SelectValue placeholder="Pilih Garden" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Lab. Kimia Timur</SelectItem>
            <SelectItem value="lights">Lab. Mekatronika Utara</SelectItem>
            <SelectItem value="lightz">Lab. Mekatronika Selatan</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-4 my-14">
        <div className="flex flex-col gap-5">
          {sidebar.map((x, i) => (
            <Link href={x.href} key={x.name}>
              <div
                className={`${
                  pathname == x.href &&
                  "bg-gray-100 border !border-emerald-600 shadow-inner rounded-[--radius] font-semibold"
                } transition-all ease-linear hover:bg-gray-100 hover:shadow-inner hover:border-emerald-100 border border-transparent rounded-[--radius] flex items-center gap-5`}
              >
                <div className="bg-gray-100 p-2 rounded-[--radius]">
                  <x.icon className="stroke-emerald-600" />
                </div>
                <h1>{x.name}</h1>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
