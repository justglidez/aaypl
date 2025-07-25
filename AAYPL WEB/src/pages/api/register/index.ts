import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, email, password } = req.body;
    // Store user in DB here
    res.status(201).json({ success: true, message: "Registration successful." });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}