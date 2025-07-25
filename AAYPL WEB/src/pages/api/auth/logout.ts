import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "./[...nextauth]";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Invalidate session on the client using next-auth's signOut
  const session = await getServerSession(req, res, authOptions);
  if (session) {
    res.status(200).json({ message: "Successfully logged out." });
  } else {
    res.status(401).json({ error: "Not logged in." });
  }
}