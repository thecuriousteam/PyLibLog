import React, { useState } from "react";
import MonacoEditor from "react-monaco-editor";
import { initPyodide, runPython } from "./pyodide";

function PythonInterpreter() {
  const [pythonCode, setPythonCode] = useState("");
  const [output, setOutput] = useState("");

  const editorOptions = {
    language: "python",
    theme: "vs-dark",
  };

  const executePython = async () => {
    try {
      const result = await runPython(pythonCode);
      setOutput(result);
    } catch (error) {
      console.error(error);
      setOutput("error");
    }
  };

  const onChangeMonaco = () => {
    (newValue) => setPythonCode(newValue)
   }

  return (
    <div>
      <h3>PythonInterpreter</h3>
      <MonacoEditor
        width="800"
        height="400"
        language="python"
        theme="vs-dark"
        value={pythonCode}
        options={editorOptions}
        onChange={onChangeMonaco}
      />
      <button onClick={executePython}>Run</button>
      <div>
        <h3>Output:</h3>
        <pre>{output}</pre>
      </div>
    </div>
  );
}

export default PythonInterpreter;
