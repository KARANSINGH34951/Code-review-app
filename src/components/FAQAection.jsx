import React from "react";
import { useState } from "react";

const FAQSection = () => {
  // State to manage accordion toggle
  const [activeIndex, setActiveIndex] = useState(null);

  // FAQ data with questions and answers
  const faqs = [
    {
      question: "What is Automated Code Review?",
      answer:
        "Automated code review involves using tools and software to analyze code for issues, style violations, and performance improvements without manual intervention.",
    },
    {
      question: "How can I optimize my code using your platform?",
      answer:
        "Our platform provides detailed feedback and suggestions on optimizing your code for better performance, readability, and efficiency.",
    },
    {
      question: "Is my code secure on your platform?",
      answer:
        "Yes, we prioritize security. Your code is protected by stringent security measures and best practices.",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can reach our support team through [support email], or visit our community forum for assistance.",
    },
  ];

  // Function to toggle accordion item
  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close the accordion if it's already open
    } else {
      setActiveIndex(index); // Open the accordion
    }
  };

  return (
    <section id="faq" className="mt-16 w-full max-w-4xl mx-auto">
      <div className=" p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg p-4 shadow-md cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-800">{faq.question}</h3>
                <svg
                  className={`w-6 h-6 transition-transform transform ${
                    activeIndex === index ? "rotate-0" : "rotate-180"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={activeIndex === index ? "M19 9l-7 7-7-7" : "M5 15l7-7 7 7"}
                  />
                </svg>
              </div>
              {activeIndex === index && (
                <p className="text-gray-600 mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
