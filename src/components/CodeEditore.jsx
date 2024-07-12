// CodeEditor.jsx
import React, { useEffect } from 'react';
import AceEditor from 'react-ace';
import ace from 'brace';

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-github';

const CodeEditor = ({ code, onChange, onAnalyze, onMakeSummary, onImprove, onGenerateDocumentation }) => {
  useEffect(() => {
    const editor = ace.edit("code-editor");
    editor.setOption("placeholder", "Enter or paste your code here");
  }, []);

  return (
    <div className="flex-1 bg-white p-4 rounded shadow h-full">

      <AceEditor
        mode="javascript"
        theme="github"
        value={code}
        onChange={onChange}
        name="code-editor"
        editorProps={{ $blockScrolling: true }}
        fontSize={14}
        width="100%"
        height="calc(100vh - 200px)"
        showPrintMargin={false}
      />
      <div className="mt-4 flex flex-wrap space-y-1 md:space-y-0 md:space-x-1">
        <button
          onClick={onAnalyze}
          className="px-2 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 w-full md:w-auto"
        >
          Analyze Code
        </button>
        <button
          onClick={onMakeSummary}
          className="px-2 py-2 bg-green-500 text-white rounded hover:bg-green-700 w-full md:w-auto"
        >
          Make Summary
        </button>
        <button
          onClick={onImprove}
          className="px-2 py-2 bg-purple-500 text-white rounded hover:bg-purple-700 w-full md:w-auto"
        >
          Improve Code
        </button>
        <button
          onClick={onGenerateDocumentation}
          className="px-2 py-2 bg-orange-500 text-white rounded hover:bg-orange-700 w-full md:w-auto"
        >
          Documentation
        </button>
      </div>
    </div>
  );
};

export default CodeEditor;