import type { NextApiRequest, NextApiResponse } from "next";

// Mock user for demonstration
const user = {
  id: "1",
  name: "Jane Doe",
  email: "jane@aaypl.org",
  role: "admin"
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(user);
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}