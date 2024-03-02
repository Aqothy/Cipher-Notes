"use client";

import { useSelector } from "react-redux";
import Back from "./Back";
import Image from "next/image";

export default function RequireAuth({ children }) {
  const { user } = useSelector((state) => state.user);
  return user ? (
    children
  ) : (
    <main className="flex justify-center items-center h-screen">
      <Back to={"/"} />
      <div>
        <h1 className="text-3xl font-bold text-center text-red-500">
          Access Denied!
        </h1>
        <Image
          src={"/nooo.gif"}
          width={500}
          height={500}
          sizes="(min-width: 540px) 500px, calc(90.91vw + 27px)"
        />
      </div>
    </main>
  );
}
