"use client";

import { signIn } from "next-auth/react";
import { FaCreditCard, FaGithub, FaGoogle } from "react-icons/fa";
import { LuLeaf } from "react-icons/lu";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Separator } from "~/components/ui/separator";

const Login = () => {
  return (
    <>
      <main className="flex justify-center items-center min-h-screen w-full">
        <div className="flex flex-col gap-5 min-[430px]:bg-gray-100 w-96 min-[430px]:border border-gray-300 min-[430px]:shadow-inner p-9 rounded-[--radius]">
          <div className="flex items-center text-2xl gap-3">
            <LuLeaf className="fill-emerald-600" />
            <h1 className="font-black underlines underline-offset-8 decoration-2 decoration-wavy decoration-emerald-600">
              Garmoda
            </h1>
          </div>
          <h1 className="text-lg font-medium">Masuk ke Garmoda</h1>
          <div className="flex flex-col gap-3">
            <Input type="email" id="email" placeholder="Masukan email..." />
            <Input
              type="password"
              id="password"
              placeholder="Masukan password..."
            />
            <Button>Masuk</Button>
          </div>
          <div className="flex justify-center w- items-center gap-3">
            <Separator className="w-1/3" />
            <p className="font-medium">atau</p>
            <Separator className="w-1/3" />
          </div>
          <div className="flex flex-col gap-3">
            <Button
              onClick={() => signIn("google")}
              variant={"destructive"}
              className="flex items-center gap-4"
            >
              <FaGoogle className="text-lg" />
              <h1>Lanjutkan dengan Google</h1>
            </Button>
            <Button
              // onClick={() => signIn("github")}
              variant={"destructive"}
              className="flex items-center gap-4"
            >
              <FaGithub className="text-lg" />
              <h1>Lanjutkan dengan Github</h1>
            </Button>
            <Button
              disabled
              variant={"destructive"}
              className="flex items-center gap-4"
            >
              <FaCreditCard className="text-lg" />
              <h1>Lanjutkan dengan Card ID</h1>
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
