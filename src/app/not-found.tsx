"use client"

import { useSession } from "next-auth/react";
import Link from "next/link";
import { LuAnnoyed } from "react-icons/lu";

const Loading = () => {
  const { data: session } = useSession();

  return (
    <section className="flex flex-col inset-0 m-auto h-screen justify-center items-center">
      <h1 className="flex items-center gap-2 text-3xl font-extrabold text-emerald-600 sm:text-4xl">
        <LuAnnoyed className="text-3xl sm:text-4xl mr-2" />
        <span>404 - </span>
        <span className="text-black">Not Found</span>
      </h1>
      <Link href={session ? '/dashboard' : '/'} className="mt-8 text-lg">Kembali ke <strong className="text-blue-500">{session ? 'Dashboard' : 'Halaman Utama'}</strong></Link>
    </section>
  )
}

export default Loading