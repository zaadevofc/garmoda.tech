"use client";

import { useState } from "react";
import { toast } from "sonner";
import Layouts from "~/components/Layouts";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Switch } from "~/components/ui/switch";
import { Textarea } from "~/components/ui/textarea";
import { SendEvent } from "~/lib/utils";

const Settings = ({ params }: any) => {
  const [Notif, setNotif] = useState<any>({});

  return (
    <>
      <Layouts id={params.id}>
        <div className="flex flex-col w-full">
          <div className="flex items-center mb-7 pb-3 pt-5 gap-3 w-full sticky top-0 bg-white z-10">
            <div className="flex items-center justify-between shadow-inner w-full bg-gray-100 border border-gray-300 py-1.5 px-5 rounded-[--radius]">
              <h1 className="font-semibold">Admin Access</h1>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-3 shadow-inner w-full bg-gray-100 border border-gray-300 p-5 rounded-[--radius]">
              <h1 className="font-semibold text-lg">Kirim Notifikasi</h1>
              <div className="flex flex-col gap-3">
                <Input
                  onChange={(p) =>
                    setNotif((x: any) => ({
                      ...x,
                      msg: p.target.value,
                    }))
                  }
                  type="text"
                  placeholder="Masukan title..."
                />
                <Textarea
                  onChange={(p) =>
                    setNotif((x: any) => ({
                      ...x,
                      desc: p.target.value,
                    }))
                  }
                  placeholder="Masukan deskripsi..."
                />
              </div>
              <div className="flex items-center gap-3">
                <Input
                  onChange={(p) =>
                    setNotif((x: any) => ({
                      ...x,
                      label: p.target.value,
                    }))
                  }
                  type="text"
                  placeholder="Masukan label..."
                />
                <Select
                  onValueChange={(p) =>
                    setNotif((x: any) => ({
                      ...x,
                      event: p,
                    }))
                  }
                >
                  <SelectTrigger className="py-4">
                    <SelectValue placeholder="Pilih siapa usernya" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="send-globals">Global</SelectItem>
                    <SelectItem value="send-admin">Admin</SelectItem>
                    <SelectItem value="send-moderator">Moderator</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button
                onClick={async () =>
                  await SendEvent("garmoda-notifications", Notif?.event, Notif)
                }
                className="w-fit"
              >
                Kirim
              </Button>
            </div>
          </div>
        </div>
      </Layouts>
    </>
  );
};

export default Settings;
