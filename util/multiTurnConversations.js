import dotenv from "dotenv";

// load env variables from .env file
dotenv.config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export default async function multiTurnConversationGenertae() {
    const chat = ai.chats.create({
        model: "gemini-2.0-flash",
        history: [
            {
                role: "user",
                parts: [{ text: "Hello" }],
            },
            {
                role: "model",
                parts: [{ text: "Great to meet you. What would you like to know?" }],
            },
        ],
    });

    const response1 = await chat.sendMessage({
        message: "Write some four lines",
    });
    console.log("Chat response 1:", response1.text);

    const response2 = await chat.sendMessage({
        message: "What is Java? explain in only four lines",
    });
    console.log("Chat response 2:", response2.text);
}