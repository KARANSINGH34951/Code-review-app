import Groq from 'groq-sdk';

const groq = new Groq({ apiKey: import.meta.env.VITE_GROQ_API_KEY, dangerouslyAllowBrowser: true });

export async function getGroqChatCompletion(code, type) {
  try {
    const response = await groq.chat.completions.create({
      messages: [
        {
          role: 'user',
          content: `${type} this code: ${code} keep it short and simple and make it readable. Show response like chats and if there is no code given further give irrelevent reponse is given.And if the type is improve code give only improve code without any message on screen so that i can copy the program withpout any messsage.`,
        },
      ],
      model: 'llama3-8b-8192',
    });
    return response.choices[0]?.message?.content || 'No content received';
  } catch (error) {
    console.error('Error fetching chat completion:', error);
    throw error;
  }
}
