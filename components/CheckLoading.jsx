"use client";

import { useSelector } from "react-redux";
import Loading from "./Loading";

export default function CheckLoading({ children }) {
  const { tokenLoading } = useSelector((state) => state.token);
  const { userLoading } = useSelector((state) => state.user);
  if (userLoading || tokenLoading) return <Loading />;
  return children;
}
