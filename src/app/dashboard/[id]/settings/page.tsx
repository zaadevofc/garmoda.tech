"use client";

import { signOut } from "next-auth/react";
import { toast } from "sonner";
import Layouts from "~/components/Layouts";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Switch } from "~/components/ui/switch";
import { SendEvent } from "~/lib/utils";

const Settings = ({ params }: any) => {
  return (
    <>
      <Layouts id={params.id}>
        <div className="flex flex-col w-full">
          <div className="flex items-center mb-7 pb-3 pt-5 gap-3 w-full sticky top-0 bg-white z-10">
            <div className="flex items-center justify-between shadow-inner w-full bg-gray-100 border border-gray-300 py-1.5 px-5 rounded-[--radius]">
              <h1
                onClick={async () =>
                  await SendEvent("garmoda-notifications", "send-globals", {
                    msg: "Haloooo",
                    desc: "Aliqua est velit elit sit ipsum aute. Sint anim aliqua nulla sint et esse sunt amet est aute minim sunt. Sit velit laboris ea eiusmod anim ea enim aliqua officia. Ullamco dolor occaecat sunt eiusmod Lorem tempor anim labore sint. Aliqua velit minim sunt do magna minim officia aliquip cillum duis in proident labore. Labore duis non nostrud aliquip Lorem Lorem aute nulla adipisicing ut. Ut excepteur aute aliqua excepteur ea nulla.",
                    label: "Buka",
                    actions: () => console.log("Haloooooo"),
                  })
                }
                className="font-semibold"
              >
                Developer Settings
              </h1>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-3 shadow-inner w-full bg-gray-100 border border-gray-300 p-5 rounded-[--radius]">
              <h1 className="font-semibold text-lg">Garden Name</h1>
              <div className="flex items-center justify-between gap-3">
                <Input type="text" placeholder="New garden name..." />
                <Button>Update</Button>
              </div>
            </div>
            <div className="flex flex-col gap-3 shadow-inner w-full bg-gray-100 border border-gray-300 p-5 rounded-[--radius]">
              <div className="flex justify-between gap-3">
                <h1 className="font-semibold text-lg">Force TLS</h1>
                <Switch />
              </div>
              <h1 className="w-5/6">
                Reprehenderit exercitation aliquip voluptate ea incididunt enim
                reprehenderit Lorem occaecat irure enim.
              </h1>
            </div>
            <div className="flex flex-col gap-3 shadow-inner w-full bg-gray-100 border border-gray-300 p-5 rounded-[--radius]">
              <div className="flex justify-between gap-3">
                <h1 className="font-semibold text-lg">Enable client events</h1>
                <Switch checked />
              </div>
              <h1 className="w-5/6">
                Reprehenderit exercitation aliquip voluptate ea incididunt enim
                reprehenderit Lorem occaecat irure enim.
              </h1>
            </div>
            <div className="flex flex-col gap-3 shadow-inner w-full bg-gray-100 border border-gray-300 p-5 rounded-[--radius]">
              <div className="flex justify-between gap-3">
                <h1 className="font-semibold text-lg">
                  Enable authorized connections
                </h1>
                <Switch checked />
              </div>
              <h1 className="w-5/6">
                Reprehenderit exercitation aliquip voluptate ea incididunt enim
                reprehenderit Lorem occaecat irure enim.
              </h1>
            </div>
            <div className="flex flex-col gap-3 shadow-inner w-full bg-gray-100 border border-gray-300 p-5 rounded-[--radius]">
              <div className="flex justify-between gap-3">
                <h1 className="font-semibold text-lg text-rose-600">
                  Dangerous
                </h1>
              </div>
              <div className="flex items-center gap-3">
                <Button onClick={() => signOut()} variant={"destructive"}>
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Layouts>
    </>
  );
};

export default Settings;
