import type { NextApiRequest, NextApiResponse } from "next";
import { mockEvents } from "../../../data/mockEvents";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(mockEvents);
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}