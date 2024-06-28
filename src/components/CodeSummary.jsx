import React from 'react';

const CodeSummary = ({ code }) => {
  // Function to analyze code and generate summary or improvements
  const analyzeCode = () => {
    // Implement your logic here to analyze the code
    // Example: Count lines, find errors, suggest improvements, etc.
    console.log(code);
    return `Code Summary:\n${code}`;

  };

  const summary = analyzeCode();

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-4 w-full">
        <h2 className="text-lg font-bold mb-2">Code Summary / Improvements</h2>
        <pre className="text-sm text-gray-700 whitespace-pre-wrap">{summary}</pre>
      </div>
    </div>
  );
};

export default CodeSummary;
