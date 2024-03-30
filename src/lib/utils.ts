import { type ClassValue, clsx } from "clsx"
import Pusher from "pusher";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const fetchJson = async (uri: any, method?: any) => await fetch(uri).then(async (x) => x.json())
export const postJson = async (uri: any, data: any) => await fetch(uri, { body: JSON.stringify(data), method: 'POST' }).then(async (x) => x.json())

export const SendEvent = async (channel: any, event: any, data: any) => await postJson(`/api/ws?channel=${channel}&event=${event}`, data)