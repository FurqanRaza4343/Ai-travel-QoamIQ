import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { prompt } = req.body;
  const apiKey = process.env.GROK_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: "GROK API key not set" });
  }

  try {
    const grokRes = await fetch("https://api.grok.com/v1/ai/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ prompt }),
    });
    const data = await grokRes.json();
    if (!grokRes.ok) throw new Error(data.error || "Grok API error");
    res.status(200).json(data);
  } catch (err: any) {
    res.status(500).json({ error: err.message || "Unknown error" });
  }
}
