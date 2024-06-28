import React, { useState } from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-github';

const CodeEditor = ({ code, onChange, onAnalyze }) => {
  return (
    <div className="code-editor-container">
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
      <button onClick={onAnalyze} className="analyze-button">
        Analyze Code
      </button>
    </div>
  );
};

export default CodeEditor;
