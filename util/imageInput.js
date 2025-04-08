import dotenv from "dotenv";
dotenv.config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

import {
    GoogleGenAI,
    createUserContent,
    createPartFromUri,
} from "@google/genai";

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY })

export default async function imageInputGenerate() {
    const image = await ai.files.upload({
        file: "./assets/test2.png",
    });
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: [
            createUserContent([
                // user prompt
                "What is this ?, shortly explain this image",
                createPartFromUri(image.uri, image.mimeType),
            ]),
        ],
    });
    console.log(response.text);
}