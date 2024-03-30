"use client";

import Layouts from "~/components/Layouts";
import { Badge } from "~/components/ui/badge";

const Device = ({ params }: any) => {
  return (
    <>
      <Layouts id={params.id}>
        <div className="flex flex-col w-full">
          <div className="flex items-center mb-7 pb-3 pt-5 gap-3 w-full sticky top-0 bg-white z-10">
            <div className="flex items-center justify-between shadow-inner w-full bg-gray-100 border border-gray-300 py-1.5 px-5 rounded-[--radius]">
              <h1 className="font-semibold">Detail Informasi</h1>
            </div>
          </div>
          <div className="flex flex-col w-full shadow-inner bg-gray-100 border border-gray-300 p-5 rounded-[--radius]">
            <div className="flex w-full justify-between">
              <div className="flex items-center gap-4">
                <span className="w-1 rounded-lg bg-emerald-600 h-12"></span>
                <div className="flex flex-col">
                  <h1 className="font-semibold text-xl">
                    Lab. Mekatronika Utara
                  </h1>
                  <h1 className="opacity-80">{params.id}</h1>
                </div>
              </div>
              <div className="end-0">
                <Badge>online</Badge>
              </div>
            </div>
            <div className="flex flex-col gap-3 mt-8">
              <Badge
                variant={"outline"}
                className="flex text-base items-center justify-between shadow-inner"
              >
                <h1 className="font-normal">ID</h1>
                <h1 className="line-clamp-1 uppercase">{params.id}</h1>
              </Badge>
              <Badge
                variant={"outline"}
                className="flex text-base items-center justify-between shadow-inner"
              >
                <h1 className="font-normal">Status</h1>
                <h1 className="line-clamp-1 uppercase">Online</h1>
              </Badge>
              <Badge
                variant={"outline"}
                className="flex text-base items-center justify-between shadow-inner"
              >
                <h1 className="font-normal">Name</h1>
                <h1 className="line-clamp-1 uppercase">
                  Lab. Mekatronika Utara
                </h1>
              </Badge>
              <Badge
                variant={"outline"}
                className="flex text-base items-center justify-between shadow-inner"
              >
                <h1 className="font-normal">Connection</h1>
                <h1 className="line-clamp-1 uppercase">WiFi</h1>
              </Badge>
              <Badge
                variant={"outline"}
                className="flex text-base items-center justify-between shadow-inner"
              >
                <h1 className="font-normal">Module</h1>
                <h1 className="line-clamp-1 uppercase">Wemos D1 R32</h1>
              </Badge>
              <Badge
                variant={"outline"}
                className="flex text-base items-center justify-between shadow-inner"
              >
                <h1 className="font-normal">SSID</h1>
                <h1 className="line-clamp-1 uppercase">Kejaa Wifi</h1>
              </Badge>
              <Badge
                variant={"outline"}
                className="flex text-base items-center justify-between shadow-inner"
              >
                <h1 className="font-normal">IP Address</h1>
                <h1 className="line-clamp-1 uppercase">123.567.78.9</h1>
              </Badge>
              <Badge
                variant={"outline"}
                className="flex text-base items-center justify-between shadow-inner"
              >
                <h1 className="font-normal">CreateAt</h1>
                <h1 className="line-clamp-1 uppercase">Dec, 12 Nov 24 23:12</h1>
              </Badge>
              <Badge
                variant={"outline"}
                className="flex text-base items-center justify-between shadow-inner"
              >
                <h1 className="font-normal">UpdateAt</h1>
                <h1 className="line-clamp-1 uppercase">Dec, 12 Nov 24 23:12</h1>
              </Badge>
            </div>
          </div>
        </div>
      </Layouts>
    </>
  );
};

export default Device;
