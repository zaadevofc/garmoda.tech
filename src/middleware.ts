export { default } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";
import { fetchJson } from "./lib/utils";

export async function middleware(req: NextRequest) {
  const redirect = (uri: any) => NextResponse.redirect(new URL(uri, req.url));
  const token = await req.cookies.get("garmoda.session-token");
  const path = req.nextUrl.pathname;
  
  if (!token) {
    if (path == '/' || path.startsWith("/dashboard")) return redirect("/auth/login");
  } else {
    if (['/', "/auth/login"].includes(path)) return redirect(`/dashboard`);
    if (path == "/dashboard") {
      const getId = await fetchJson(
        "https://api.npoint.io/0f81a95b8a737a6cbf4a"
      );
      return redirect(`/dashboard/${getId?.id}`);
    }
  }
}
