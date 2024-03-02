"use client";

import { useSelector } from "react-redux";
import { FaRegUserCircle } from "react-icons/fa";
import Link from "next/link";

export default function Welcome() {
  const { user } = useSelector((state) => state.user);
  return (
    <section className="rounded-full bg-[#FCCB2A] px-[3rem] py-[2rem] mx-auto flex justify-between items-center w-full">
      <h1 className="font-bold text-3xl">
        Welcome back <span className="text-white">{user.username}!</span>
      </h1>
      <Link href={"/home/profile"}>
        <FaRegUserCircle className="text-4xl text-white" />
      </Link>
    </section>
  );
}
