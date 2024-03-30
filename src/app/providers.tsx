"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import splitbee from "@splitbee/web";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Analytics } from "@vercel/analytics/react";
import { SessionProvider } from "next-auth/react";
import { useEffect, useState } from "react";
import Loading from "./loading";
import Pusher from "pusher-js";
import { Toaster } from "~/components/ui/sonner";
import Notification from "~/components/Notification";

splitbee.init();
const queryClient = new QueryClient();

// export const PusherConnection = () =>
//   new Pusher(process.env.NEXT_PUBLIC_PUSHER_SECRET as any, { cluster: "ap1" });
export const Providers = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => setLoading(false), [SessionProvider]);

  return (
    <>
      <GoogleAnalytics gaId="G-JBNN2XEZL3" />
      <Analytics />
      <Toaster />
      <QueryClientProvider client={queryClient}>
        <SessionProvider>
          <Notification />
          {isLoading ? <Loading /> : children}
        </SessionProvider>
      </QueryClientProvider>
    </>
  );
};
