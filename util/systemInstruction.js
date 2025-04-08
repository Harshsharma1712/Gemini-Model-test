import dotenv from "dotenv";

// load env variables from .env file
dotenv.config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export default async function systemInstructionGenerate() {
    const response = await ai.models.generateContentStream({
        model: "gemini-2.0-flash",
        contents: "What is AI",
        config: {
            systemInstruction: "You give short and sweet answers in points.",
        },
    });
    // console.log(response.text);
    for await (const chunk of response) {
        console.log(chunk.text);
    }
}