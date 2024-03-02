import { headers } from "next/headers";
import jwt from "jsonwebtoken";

export async function verifyToken(req) {
  try {
    const authHeader = headers().get("Authorization");

    if (!authHeader?.startsWith("Bearer ")) {
      throw new Error("Unauthorized");
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    req.uid = decoded.uid;
  } catch (error) {
    throw { msg: error.message, status: 403 };
  }
}
