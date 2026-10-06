# 🌱 Detour

An AI that helps you spend less time with AI.

## The Problem
We have AI assistants that can answer almost anything, generate code, write emails, and summarize entire books in seconds. But in doing so, they also give us another reason to stay glued to our screens. They optimize our digital lives, but often at the expense of our physical ones.

## The Idea
Detour is an AI agent that flips the script. It has a short conversation with you, understands how much free time you have and what you feel like doing, and then suggests a real-world activity. 

And then: **It gets out of your way.** 

The best thing this AI can do is know when to stop talking. You tell it you're free, and it sends you outside. No endless scrolling, no 20-message deep dives. Just a thoughtful suggestion and a blank screen waiting for your return.

## Why Open AI?
This project uses open-weight AI models (like Llama 3 or Mistral) rather than closed ecosystems. This is genuinely important to the project for a few reasons:
- **Model Flexibility & Privacy:** You can run it on your own server or locally via Ollama. What you do with your free time is your business.
- **Avoiding Dependence:** We shouldn't rely on a single closed AI provider for something as fundamental as "how to spend time in the real world."
- **Customization:** Open models allow you to modify the agent's behavior—making it more poetic, more direct, or tailored to your specific environment (e.g., tweaking it for a garden planner or a hiking buddy).

## Features
- **Conversational Engine:** Natural, human-like chat that figures out your context without boring forms.
- **Detour Mode:** Once a mission is generated, the UI fades away to a peaceful screen, encouraging you to put your phone down.
- **Return Reflection:** A minimal feedback loop when you return to log what you noticed.
- **Surprise Mode:** For when you just want the AI to tell you what to do.

## Tech Stack
- **Frontend:** React, Vite, Tailwind CSS, Framer Motion
- **Backend:** Node.js, Express
- **AI Integration:** Open-weight model API via simple service layer (currently mocked for easy local setup, swap with your Groq/HuggingFace key in `.env`).

## Getting Started

### 1. Backend Setup
```bash
cd backend
npm install
# Rename .env.example to .env and add your AI API key
node server.js
```

### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

## Built for Hacktoberfest 🌱
This project was built for the Hacktoberfest "Touch Grass" challenge, focusing on building something with open-source AI that gets people off the screen and into the world.
