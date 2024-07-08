import React, { useState } from 'react';
import CodeEditor from './CodeEditore';
import CodeSummary from './CodeSummary';
import { getGroqChatCompletion } from './Groq';

const CodeReviewContainer = () => {
  const [code, setCode] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  const handleAnalyzeCode = async () => {
    setLoading(true);
    try {
      const analyzedCode = await getGroqChatCompletion(code, 'analyze');
      setSummary(analyzedCode);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const handleMakeSummary = async () => {
    setLoading(true);
    try {
      const summaryCode = await getGroqChatCompletion(code, 'summary');
      setSummary(summaryCode);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const handleImproveCode = async () => {
    setLoading(true);
    try {
      const improvedCode = await getGroqChatCompletion(code, 'improve');
      setSummary(improvedCode);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const handleGenerateDocumentation = async () => {
    setLoading(true);
    try {
      const documentation = await getGroqChatCompletion(code, 'document');
      setSummary(documentation);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 min-h-screen p-4 bg-gray-100">
      <CodeEditor
        code={code}
        onChange={handleCodeChange}
        onAnalyze={handleAnalyzeCode}
        onMakeSummary={handleMakeSummary}
        onImprove={handleImproveCode}
        onGenerateDocumentation={handleGenerateDocumentation}
      />
      <CodeSummary summary={summary} loading={loading} />
    </div>
  );
};

export default CodeReviewContainer;
