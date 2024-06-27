import React, { useEffect, useState } from "react";
import { getGroqChatCompletion } from "./Groq";

function CodeReview() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function fetchChatCompletion() {
      try {
        const result = await getGroqChatCompletion();
        setMessage(result);
      } catch (error) {
        setMessage("Error fetching chat completion");
      }
    }

    fetchChatCompletion();
  }, []);

  return (
    <div>
      <h1>Chat Completion</h1>
      <p>{message}</p>
    </div>
  );
}

export default CodeReview;
