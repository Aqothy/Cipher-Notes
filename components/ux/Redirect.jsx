"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import Loading from "./Loading";

export default function Redirect({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const { token } = useSelector((state) => state.token);
  const userLimitedPath = ["/", "/sign-up", "/login"];
  const userRestricted = userLimitedPath.includes(pathname);
  const [shouldRenderChildren, setShouldRenderChildren] = useState(false);

  useEffect(() => {
    if (token && userRestricted) {
      router.push("/home");
    } else {
      setShouldRenderChildren(true);
    }
  }, [pathname, token]);

  if (!shouldRenderChildren) {
    return <Loading />;
  }

  return children;
}
