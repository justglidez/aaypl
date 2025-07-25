import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    // You would send an email or write to a DB here
    res.status(200).json({ success: true, message: "Message received." });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}