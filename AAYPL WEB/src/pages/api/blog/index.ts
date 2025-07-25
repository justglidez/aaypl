import type { NextApiRequest, NextApiResponse } from "next";
import { mockBlogs } from "../../../data/mockBlogs";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(mockBlogs);
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}