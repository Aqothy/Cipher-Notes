import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req) {
  cookies().delete("jwt");
  return NextResponse.json({ msg: "Cookie cleared!" });
}
