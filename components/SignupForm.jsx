"use client";

import { toast } from "react-toastify";
import { useState } from "react";
import axios from "@/utils/axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignupForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false)

  async function submit(e) {
    try {
      setLoading(true);
      e.preventDefault();
      const { data } = await axios.post("/users", {
        username,
        password,
      });
      const { msg } = data;
      router.push("/login");
      toast.success(msg);
    } catch (error) {
      toast.error(error.response.data.msg);
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} className="flex flex-col mt-[1rem]">
      <label htmlFor="username" className="">
        Username
      </label>
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        className="border-[#FCCB2A] border focus:outline-none rounded-md p-[0.5rem]"
        name="username"
        placeholder="username"
      />
      <label htmlFor="password" className="mt-[1rem]">
        Password
      </label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        className="border-[#FCCB2A] border focus:outline-none rounded-md p-[0.5rem]"
        name="password"
        placeholder="password"
      />
      <button
        className="mt-[1rem] p-[0.3rem] rounded-md"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,207,0,1) 0%, rgba(252,169,3,1) 100%)",
        }}
        aria-disabled={loading}
      >
        <span
          className="p-[0.5rem] flex justify-center items-center rounded-md font-semibold text-xl text-[#efebe1]"
          style={{
            background:
              "linear-gradient(180deg, rgba(252,169,3,1) 0%, rgba(255,207,0,1) 100%)",
          }}
        >
          {loading ? "Making account..." : "Sign up"}
        </span>
      </button>
      <Link href={"/login"} className="mt-[1rem] text-center">
        Already have an account?{" "}
        <span className="text-[#FCCB2A]">Login in here</span>
      </Link>
    </form>
  );
}
