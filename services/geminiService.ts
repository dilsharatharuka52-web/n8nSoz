
import { GoogleGenAI, Type } from "@google/genai";
import { AIWorkflowResponse } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateWorkflowIdea = async (prompt: string): Promise<AIWorkflowResponse | null> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Suggest a unique and useful n8n automation workflow based on this theme: ${prompt}. The workflow should be professional and production-ready.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            overview: { type: Type.STRING },
            nodesNeeded: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            steps: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["title", "overview", "nodesNeeded", "steps"]
        }
      }
    });

    return JSON.parse(response.text) as AIWorkflowResponse;
  } catch (error) {
    console.error("Gemini Error:", error);
    return null;
  }
};
