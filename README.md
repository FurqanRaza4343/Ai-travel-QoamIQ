# RoamIQ — Smart AI Travel Planner

RoamIQ is a modern, AI-powered travel planning web app built with Next.js 16, Tailwind CSS v4, and Framer Motion.

## Features

- 🗺️ AI Itinerary Builder — full day-by-day trip plans in seconds
- ✈️ Smart Hotel & Flight Recommendations
- 🤖 Conversational AI Assistant (powered by Google Gemini)
- 🌤️ Climate-Aware Packing Lists
- 💰 Budget Intelligence with live breakdowns
- 📄 Offline Travel Docs (PDF export)
- 👥 Group Trip Sync
- 💎 Local Hidden Gems discovery

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploy on Vercel

1. Push this folder to a GitHub repository
2. Import the repo on [vercel.com](https://vercel.com)
3. Add your GROK API key in the Vercel/GitHub environment variables as `GROK_API_KEY` for live AI data (see below).

## Tech Stack

## Environment Variables

To enable live, real AI data (no mock/fake responses), set the following in your environment:

```
GROK_API_KEY=your_grok_api_key_here
```

For Vercel or GitHub deployment, add this key in the project/environment secrets panel.

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Playfair Display, Outfit, Syne (Google Fonts)
- **Language**: TypeScript
