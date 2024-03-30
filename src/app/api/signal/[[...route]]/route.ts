import { fetchJson, postJson } from './../../../../lib/utils';
import { Hono } from 'hono'
import { handle } from 'hono/vercel'

export const runtime = 'edge';
const app = new Hono().basePath('/api/signal')
const baseUrl = (c: any) => c.req.raw.nextUrl.origin;

app.post('/ws', async (c) => {
    const body = await c.req.json()
    const ws = await postJson(baseUrl(c) + `/api/ws?channel=${c.req.query('channel')}&event=${c.req.query('event')}`, body)
    return c.json({
        ok: true
    })
})

export const GET = handle(app)
export const POST = handle(app)