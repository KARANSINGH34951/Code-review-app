import React from 'react';

const CodeSummary = ({ code }) => {
  const analyzeCode = () => {
    // Implement your logic here to analyze the code
    // Example: Count lines, find errors, suggest improvements, etc.
    return `Code Summary:\n${code}`;
  };

  const summary = analyzeCode();

  return (
    <div className="flex-1 bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold mb-2">Code Summary / Improvements</h2>

      <pre className="text-sm text-gray-700 whitespace-pre-wrap">{summary}</pre>
    </div>
  );
};

export default CodeSummary;
