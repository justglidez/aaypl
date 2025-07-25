import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, email } = req.body;
    // Save to DB or email marketing service here
    res.status(200).json({ success: true, message: "Subscribed successfully." });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}