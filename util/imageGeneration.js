import dotenv from "dotenv";
dotenv.config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

import { GoogleGenAI } from "@google/genai";
import * as fs from "node:fs";

export default async function imageGenerate() {
    const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

    const contents =
        // "Hi, can you create a 3d rendered image of a pig " +
        // "with wings and a top hat flying over a happy " +
        // "futuristic scifi city with lots of greenery?";

        "Hi, can you create a old style anime image of a mountian" + "with a beautiful sunset background";

    // Set responseModalities to include "Image" so the model can generate  an image
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash-exp-image-generation",
        contents: contents,
        config: {
            responseModalities: ["Text", "Image"],
        },
    });
    for (const part of response.candidates[0].content.parts) {
        // Based on the part type, either show the text or save the image
        if (part.text) {
            console.log(part.text);
        } else if (part.inlineData) {
            const imageData = part.inlineData.data;
            const buffer = Buffer.from(imageData, "base64");
            // fs.writeFileSync("gemini-native-image.png", buffer); // This save image in root of project.
            fs.writeFileSync("./generatedImages/gemini-native-image.png", buffer);      // This store image in "generatedImages" folder.
            console.log("Image saved as gemini-native-image.png");
        }
    }
}