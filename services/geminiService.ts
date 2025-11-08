import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Helper function for base64 encoding (if needed for image/audio parts)
function encode(bytes: Uint8Array): string {
  let binary = '';
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

// Helper function for base64 decoding (if needed for audio processing)
function decode(base64: string): Uint8Array {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

/**
 * Generates text content using the Gemini API.
 * @param prompt The text prompt to send to the model.
 * @param model The Gemini model to use (e.g., 'gemini-2.5-flash-lite', 'gemini-2.5-pro').
 * @returns The generated text response.
 */
export const generateText = async (prompt: string, model: string = 'gemini-2.5-flash-lite'): Promise<string> => {
  // CRITICAL: Create a new GoogleGenAI instance right before making an API call
  // to ensure it always uses the most up-to-date API key from the dialog.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: model,
      contents: prompt,
      // Example config for low-latency responses with thinkingBudget for flash models
      config: model.includes('flash') ? { thinkingConfig: { thinkingBudget: 0 } } : {},
    });
    return response.text;
  } catch (error: unknown) {
    console.error(`Error generating text with model ${model}:`, error);
    // You might implement retry logic here (e.g., exponential backoff)
    // or prompt the user to re-select API key if error is "Requested entity was not found."
    if (error instanceof Error && error.message.includes("Requested entity was not found.")) {
      console.warn("API Key might be invalid or not selected. Prompting user to select key.");
      // Assume window.aistudio.openSelectKey() is available in the environment
      // if (window.aistudio && window.aistudio.openSelectKey) {
      //   await window.aistudio.openSelectKey();
      // }
    }
    return `Error: Failed to generate content. Please try again.`;
  }
};

/**
 * Example function to generate content with image input.
 * @param textPrompt The text prompt.
 * @param base64Image The base64 encoded image data.
 * @param mimeType The MIME type of the image (e.g., 'image/jpeg', 'image/png').
 * @param model The Gemini model to use (e.g., 'gemini-2.5-flash-image').
 * @returns The generated text response.
 */
export const generateContentWithImage = async (
  textPrompt: string,
  base64Image: string,
  mimeType: string,
  model: string = 'gemini-2.5-flash-image'
): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    const imagePart = {
      inlineData: {
        mimeType: mimeType,
        data: base64Image,
      },
    };
    const textPart = {
      text: textPrompt,
    };

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: model,
      contents: { parts: [imagePart, textPart] },
    });
    return response.text;
  } catch (error) {
    console.error("Error generating content with image:", error);
    return `Error: Failed to generate content with image.`;
  }
};

// Example function for text-to-speech (TTS)
// This is a complex operation and requires more setup (AudioContext, decoding)
// For brevity, only the API call structure is shown.
/*
import { Modality } from "@google/genai";
export const generateSpeech = async (text: string, voiceName: string = 'Zephyr'): Promise<string | undefined> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text: text }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: voiceName },
            },
        },
      },
    });
    // This will return base64 encoded audio data, which needs to be decoded and played.
    return response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
  } catch (error) {
    console.error("Error generating speech:", error);
    return undefined;
  }
};
*/
