import { NextRequest } from "next/server";
import Pusher from "pusher";

const pusher = new Pusher({
    appId: "1769192",
    key: "a3c27cb71dc03e5e4209",
    secret: "c6f254b62c1cece76466",
    cluster: "ap1",
    useTLS: true
});

export async function POST(req: NextRequest) {
    const data = await req.json()
    const query: any = (get: any) => req.nextUrl.searchParams.get(get)
    if (!query('channel') && !query('event') && !data) {
        return Response.json({
            status: 400,
            error: 'Missing required parameters'
        })
    }
    const trigger: any = await pusher.trigger(query('channel'), query('event'), data)

    if (!trigger) return Response.json({ status: trigger?.status })
    return Response.json({ status: trigger?.status })
}