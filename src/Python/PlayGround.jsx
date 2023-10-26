import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Scripts from "./Scripts";
import CodeEditor from "./CodeEditor";
import "brace/mode/python";
import "brace/theme/monokai";

let logs = [];

const PlayGround = () => {
  const [code, setCode] = useState("");
  const [outputArr, setOutputArr] = useState([]);
  const [showMainOrShell, setShowMainOrShell] = useState(true);
  const [windowWidth, setWindowWidth] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setWindowWidth(false);
      } else {
        setWindowWidth(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const setShowTrue = () => {
    setShowMainOrShell(true);
  };
  const setShowFalse = () => {
    setShowMainOrShell(false);
  };

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
      <div
        id="python-editor-container"
        className=" grid grid-cols-1 md:grid-cols-2 md:grid-rows-[55px_minmax(0,1fr)] bg-slate-700 border border-solid border-gray-400"
      >
        <div className="hidden md:border-solid md:border-r md:border-b md:border-gray-400 md:flex md:items-center md:justify-between md:px-5">
          <h2 className="text-base text-white font-bold">main.py</h2>
          <button
            type="button"
            onClick={run}
            className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold p-2 rounded"
          >
            Run Code
          </button>
        </div>
        <div className="hidden md:border-solid md:border-b md:border-gray-400 md:flex md:items-center md:justify-between md:px-5">
          <h2 className="text-base text-white font-bold">Shell</h2>
          <button
            type="button"
            onClick={clearLogs}
            className="border border-solid border-gray-400 hover:bg-gray-400 text-white font-bold text-sm p-2 rounded"
          >
            Clear Output
          </button>
        </div>

        <div className="visible p-2 md:hidden flex justify-center">
          <div
            onClick={setShowTrue}
            className={`cursor-pointer p-2 border border-solid border-gray-400 text-white rounded-tl rounded-bl ${
              showMainOrShell ? "bg-blue-500" : "bg-gray-700"
            } `}
          >
            Main.py
          </div>
          <div
            onClick={setShowFalse}
            className={`cursor-pointer p-2 border border-solid border-gray-400 text-white rounded-tr rounded-br ${
              showMainOrShell ? "bg-gray-700" : "bg-blue-500"
            }`}
          >
            Shell
          </div>
          {showMainOrShell ? (
            <button
              type="button"
              onClick={run}
              className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold p-2 rounded ml-10"
            >
              Run Code
            </button>
          ) : (
            <button
              type="button"
              onClick={clearLogs}
              className="border border-solid border-gray-400 hover:bg-gray-400 text-white font-bold text-sm p-2 rounded ml-10"
            >
              Clear Output
            </button>
          )}
        </div>

        {(windowWidth || showMainOrShell) && (
          <div
            id="python-editor"
            className="border-solid border-r border-b border-gray-400"
          >
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
              width={"100%"}
              height={"100vh"}
              fontSize={"1rem"}
            />
          </div>
        )}

        {(windowWidth || !showMainOrShell) && (
          <div
            id="python-editor-output"
            className="md:visible w-full border-solid border-b border-gray-400"
          >
            <textarea
              className="h-[100vh] bg-[#272822] text-gray-400 w-[100%] py-2 px-2 mx-auto outline-none border-none"
              id="python-output"
              readOnly
              value={outputArr.join("\n")}
              placeholder=">> output goes here..."
            />
          </div>
        )}
      </div>
    </HelmetProvider>
  );
};

export default PlayGround;
