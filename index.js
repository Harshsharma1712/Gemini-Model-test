import dotenv from "dotenv";

// load env variables from .env file
dotenv.config();

import { GoogleGenAI } from "@google/genai";
// import the test util files
import imageInputGenerate from "./util/imageInput.js";
import textGenerate from "./util/textGeneration.js";
import multiTurnConversationGenertae from "./util/multiTurnConversations.js";
import systemInstructionGenerate from "./util/systemInstruction.js";


// await textGenerate();

// await imageInputGenerate();

// await multiTurnConversationGenertae();

await systemInstructionGenerate();