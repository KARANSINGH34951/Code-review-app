import React, { useState } from 'react';
import CodeEditor from '../components/CodeEditore';
import CodeSummary from '../components/CodeSummary';

const CodeReviewContainer = () => {
  const [code, setCode] = useState('');
  const [summary, setSummary] = useState('');

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  const handleAnalyzeCode = () => {
    // Simulate analysis (replace with actual logic if needed)
    setSummary(code);
  };

  return (
    <div className="flex space-x-4">
      <CodeEditor
        code={code}
        onChange={handleCodeChange}
        onAnalyze={handleAnalyzeCode}
      />
      <CodeSummary code={summary} />
    </div>
  );
};

export default CodeReviewContainer;
