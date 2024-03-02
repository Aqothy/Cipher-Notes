"use client";

import useRefresh from "@/hooks/useRefresh";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTokenLoading } from "@/redux/features/tokenSlice";

export default function PersistLogin({ children }) {
  const dispatch = useDispatch();
  const refresh = useRefresh();

  useEffect(() => {
    async function verifyRefresh() {
      try {
        await refresh();
      } catch (error) {
        console.log(error.message);
        dispatch(setTokenLoading(false));
      }
    }
    verifyRefresh();
  }, []);

  return children;
}
