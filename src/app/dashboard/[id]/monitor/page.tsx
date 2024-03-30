"use client";

import Layouts from "~/components/Layouts";
import { Button } from "~/components/ui/button";

const Monitor = ({ params }: any) => {
  return (
    <>
      <Layouts id={params.id}>
        <div className="flex flex-col w-full">
          <div className="flex items-center mb-7 pb-3 pt-5 gap-3 w-full sticky top-0 bg-white z-10">
            <div className="flex items-center justify-between w-full shadow-inner bg-gray-100 border border-gray-300 py-1.5 px-5 rounded-[--radius]">
              <h1 className="font-semibold">Konfigurasi Alat</h1>
            </div>
            <Button>Tambah</Button>
          </div>
          <div className="columns-2 gap-3 space-y-3">
            {[...new Array(7)].map((x) => (
              <div className="break-inside-avoid flex flex-col rounded-[--radius] border border-gray-300 w-full">
                <div className="bg-emerald-600 shadow-inner text-white py-3 px-5 rounded-t-lg">
                  <h1 className="font-semibold">Sensor</h1>
                </div>
                <div className="flex flex-col shadow-inner bg-gray-100 gap-2 rounded-b-lg py-3 px-5 text-sm">
                  <div className="flex items-center justify-between uppercase">
                    <h1 className="text-left line-clamp-1">ID</h1>
                    <h1 className="font-semibold text-right line-clamp-1">
                      HF6547SHD5FHI
                    </h1>
                  </div>
                  <div className="flex items-center justify-between uppercase">
                    <h1 className="text-left line-clamp-1">NAME</h1>
                    <h1 className="font-semibold text-right line-clamp-1">
                      Sensor Kelembaban Tanah
                    </h1>
                  </div>
                  <div className="flex items-center justify-between uppercase">
                    <h1 className="text-left line-clamp-1">SLOT</h1>
                    <h1 className="font-semibold text-right line-clamp-1">
                      IO23
                    </h1>
                  </div>
                  <div className="flex items-center justify-between uppercase">
                    <h1 className="text-left line-clamp-1">PIN</h1>
                    <h1 className="font-semibold text-right line-clamp-1">
                      Digital
                    </h1>
                  </div>
                  <div className="flex items-center justify-between uppercase">
                    <h1 className="text-left line-clamp-1">TYPE</h1>
                    <h1 className="font-semibold text-right line-clamp-1">
                      DHT11
                    </h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layouts>
    </>
  );
};

export default Monitor;
