import React from 'react';
import { FaRegCopy } from 'react-icons/fa';

const CodeSummary = ({ summary, loading }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(summary);
    alert('Code copied to clipboard!');
  };

  return (
    <div className="flex-1 bg-white p-4 rounded shadow h-full">
      <div className="flex justify-between items-center">
        <h2 className="text-lg text-black font-bold mb-2">
          Your Code Optimizer, Jam is Here!
        </h2>
        {!loading && (
          <button
            onClick={handleCopy}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            title="Copy to clipboard"
          >
            <FaRegCopy size={24} />
          </button>
        )}
      </div>
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
        </div>
      ) : (
        <pre className="text-sm text-center mt-5 text-black whitespace-pre-wrap break-words h-full">
          {summary}
        </pre>
      )}
    </div>
  );
};

export default CodeSummary;
