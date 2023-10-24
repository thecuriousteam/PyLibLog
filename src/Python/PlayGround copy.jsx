import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Scripts from "./Scripts";
import CodeEditor from "./CodeEditor";
import "brace/mode/python";
import "brace/theme/monokai";

let logs = [];

const PlayGround = () => {
  const [code, setCode] = useState("");
  const [outputArr, setOutputArr] = useState([]);

  const run = () => {
    try {
      logs = [];
      window.brython([1]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleConsoleLog = (value) => {
    if (value !== "using indexedDB for stdlib modules cache") {
      logs.push(`${value}`);
      setOutputArr([...logs]);
    }
  };

  const clearLogs = () => {
    logs = [];
    setOutputArr([]);
  };

  window.console.log = handleConsoleLog;

  return (
    <HelmetProvider>
      <div id="python-editor-input">
        <div id="python-editor-container" className="my-5">
          <Helmet>
            <script
              type="text/javascript"
              src="https://cdnjs.cloudflare.com/ajax/libs/brython/3.7.1/brython.min.js"
            />
            <script
              type="text/javascript"
              src="https://cdnjs.cloudflare.com/ajax/libs/brython/3.7.1/brython_stdlib.js"
            />
          </Helmet>
          <Scripts code={code} />

          <CodeEditor
            id="python-code-editor"
            className="m-auto"
            value={code}
            mode="python"
            theme="monokai"
            onChange={(text) => setCode(text)}
            width={"95%"}
            height={"75dvh"}
            fontSize={"1rem"}
          />

          <div className="flex  ml-5 p-4 gap-6">
            <button
              type="button"
              onClick={clearLogs}
              className="bg-blue-500 w-40 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Clear Output
            </button>
            <button
              type="button"
              onClick={run}
              className="bg-blue-500 w-40 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Run Code
            </button>
          </div>

          <div id="python-editor-output" className="flex flex-column">
            <textarea
              className="h-[25rem] bg-[#272822] text-gray-400 w-[95%] py-2 px-2 mx-auto"
              id="python-output"
              readOnly
              value={outputArr.join("\n")}
              placeholder=">> output goes here..."
            />
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default PlayGround;
