const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Open-weight AI integration endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;
    
    // In a real application, you would connect to an open-weight model API here.
    // Examples: Llama 3 on Groq, Mistral on HuggingFace, or a local Ollama instance.
    /*
    const response = await fetch(process.env.AI_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.AI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: "llama-3-8b-chat",
        messages: [
          { role: "system", content: "You are the Detour agent. Your goal is to get people outside..." },
          ...messages
        ]
      })
    });
    const data = await response.json();
    return res.json(JSON.parse(data.choices[0].message.content)); // Assuming JSON response mode
    */

    // Fallback/Mock Implementation for Hacktoberfest MVP
    // Simulates the structured JSON output expected from the AI
    const userCount = messages.filter(m => m.role === 'user').length;
    
    let result = {};
    if (userCount === 1) {
      result = { reply: "Nice. How much time did you steal for yourself?", needsMoreInformation: true };
    } else if (userCount === 2) {
      result = { reply: "And what's the mood? Want some quiet, movement, company, or just something different?", needsMoreInformation: true };
    } else {
      result = { 
        reply: "Got it. You sound like you need your brain to stop doing its 37 open tabs thing. I've got your plan.",
        activity: {
          title: "The Quiet Walk",
          duration: "30-40 min",
          category: "reset",
          steps: [
            "Walk somewhere green.",
            "No music for the first 10 minutes.",
            "Find one thing you've never noticed before.",
            "Then sit somewhere for five minutes."
          ],
          screenRule: "I'll stop talking now. Go."
        },
        needsMoreInformation: false
      };
    }
    
    res.json(result);
  } catch (error) {
    console.error("AI Error:", error);
    res.status(500).json({ error: "Failed to generate response" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Detour backend running on port ${PORT}`);
});
