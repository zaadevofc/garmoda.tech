"use client";

import { useSession } from "next-auth/react";
import Pusher from "pusher-js";
import { useEffect } from "react";
import { toast } from "sonner";
// import { PusherConnection } from "~/app/providers";

const Notification = () => {
  const { status, data: session }: any = useSession();
  useEffect(() => {
    if (status != "loading") {
      const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_SECRET as any, { cluster: "ap1" });
      let channel = pusher.subscribe(`garmoda-notifications`);
      channel.bind('send-globals', (x: any) => {
        return toast(x.msg, {
          description: x.desc,
          action: {
            label: x.label,
            onClick: x.actions,
          },
        })
      })
    }
  }, [status]);
  return <></>;
};

export default Notification;
