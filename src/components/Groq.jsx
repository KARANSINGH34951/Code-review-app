import Groq from "groq-sdk";

// Initialize the Groq client with your API key from environment variables
const groq = new Groq({ apiKey: import.meta.env.VITE_GROQ_API_KEY,dangerouslyAllowBrowser: true });

export async function getGroqChatCompletion() {
  try {
    const response = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: "explan me this code <h1>hello 4+5</h1>",
        },
      ],
      model: "llama3-8b-8192",
    });
    return response.choices[0]?.message?.content || "No content received";
  } catch (error) {
    console.error("Error fetching chat completion:", error);
    throw error;
  }
}
