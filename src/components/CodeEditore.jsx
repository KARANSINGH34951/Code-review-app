import React from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-github';

const CodeEditor = ({ code, onChange, onAnalyze }) => {
  return (
    <div className="flex-1 bg-white p-4 rounded shadow">
      <AceEditor
        mode="javascript"
        theme="github"
        value={code}
        onChange={onChange}
        name="code-editor"
        editorProps={{ $blockScrolling: true }}
        fontSize={14}
        width="100%"
        height="400px"
        showPrintMargin={false}
      />
      <button
        onClick={onAnalyze}
        className="mt-4 mx-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Analyze Code
      </button>
      <button
        onClick={onAnalyze}
        className="mt-4 mx-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Make Summary
      </button>
      <button
        onClick={onAnalyze}
        className="mt-4 mx-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Improve Code
      </button>
    </div>
  );
};

export default CodeEditor;
