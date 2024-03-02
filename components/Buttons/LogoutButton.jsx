"use client";

import axios from "@/utils/axios";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/features/tokenSlice";
import { logoutUser } from "@/redux/features/userSlice";

export default function LogoutButton() {
  const router = useRouter();
  const dispatch = useDispatch()
  async function logOut() {
    try {
      await axios.post("/logout");
      dispatch(logout());
      dispatch(logoutUser());
      router.push("/");
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <button
      className="mt-[1rem] p-[0.3rem] rounded-md flex-1"
      style={{
        background:
          "linear-gradient(180deg, rgba(222,75,48,1) 0%, rgba(163,0,0,1) 100%)",
      }}
      onClick={logOut}
    >
      <span
        className="p-[0.5rem] flex justify-center items-center rounded-md font-semibold text-xl text-[#efebe1] h-full"
        style={{
          background:
            "linear-gradient(180deg, rgba(163,0,0,1) 0%, rgba(222,75,48,1) 100%)",
        }}
      >
        Logout
      </span>
    </button>
  );
}
