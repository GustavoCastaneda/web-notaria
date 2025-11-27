import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY;

if (!apiKey) {
  console.warn("API_KEY is not defined in the environment variables. The AI features will not function correctly.");
}

const ai = new GoogleGenAI({ apiKey: apiKey || 'dummy-key' });

export const sendChatMessage = async (
  message: string, 
  history: { role: 'user' | 'model'; text: string }[]
): Promise<string> => {
  try {
    // Convert generic history format to Gemini format if necessary, 
    // but the Chat object handles context internally usually.
    // For simplicity in a stateless hook, we initialize chat with history.
    
    // System instruction to guide the persona
    const systemInstruction = `
      Eres el Asistente Virtual de 'Notaría 103', cuyo titular es el Lic. Víctor Alfonso Varela Velasco.
      Tu objetivo es orientar a los clientes sobre trámites notariales en México (específicamente Toluca) de forma profesional, breve y sofisticada.
      
      Reglas:
      1. Responde de manera cortés y formal (usa 'usted').
      2. Si preguntan por requisitos de trámites (testamentos, compraventas, poderes), dales una lista general aplicable a México.
      3. No des consejos legales específicos ni resuelvas disputas; siempre sugiere agendar una cita con el notario titular.
      4. Mantén las respuestas concisas (máximo 100 palabras si es posible).
      5. El tono debe ser de confianza, seguridad y calma.
    `;

    const model = 'gemini-2.5-flash';

    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: systemInstruction,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message });
    return result.text || "Disculpe, no pude procesar su solicitud en este momento.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Lo siento, ha ocurrido un error temporal en el servicio de asistencia. Por favor intente más tarde o contáctenos por teléfono.";
  }
};