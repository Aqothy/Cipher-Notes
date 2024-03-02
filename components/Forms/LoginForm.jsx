"use client";

import { useState } from "react";
import axios from "@/utils/axios";
import { useDispatch } from "react-redux";
import { setToken } from "@/redux/features/tokenSlice";
import { useRouter } from "next/navigation";
import { addUser } from "@/redux/features/userSlice";
import { toast } from "react-toastify";
import Link from "next/link";

export default function LoginForm() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  
  async function submit(e) {
    setLoading(true)
    e.preventDefault();
    try {
      const { data } = await axios.post("/login", {
        username,
        password,
      });
      const { accessToken, newUser } = data;
      dispatch(setToken(accessToken));
      dispatch(addUser(newUser));
      toast.success("Log in successful");
      router.push("/home");
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
        disabled={loading}
      >
        <span
          className="p-[0.5rem] flex justify-center items-center rounded-md font-semibold text-xl text-[#efebe1]"
          style={{
            background:
              "linear-gradient(180deg, rgba(252,169,3,1) 0%, rgba(255,207,0,1) 100%)",
          }}
        >
          {loading ? "Logging in..." : "Login"}
        </span>
      </button>
      <Link href={"/sign-up"} className="mt-[1rem] text-center">
        Don&apos;t have an account?{" "}
        <span className="text-[#FCCB2A]">Sign up here</span>
      </Link>
    </form>
  );
}
