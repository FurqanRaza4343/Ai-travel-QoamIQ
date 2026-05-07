// Utility to call the Grok API from the frontend
export async function fetchGrokAI(prompt: string) {
  const res = await fetch("/api/grok", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });
  if (!res.ok) throw new Error("Failed to fetch Grok AI response");
  return res.json();
}
