import React,{ useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Scripts from './Scripts';
import CodeEditor from './CodeEditor';
import "brace/mode/python";
import "brace/theme/monokai";

let logs = [];

const PlayGround = () => {

    const [code, setCode] = useState("");
    const [outputArr, setOutputArr] = useState([]);
  
    const run = () => {
      try {
        logs =[];
        window.brython([1]);
      } catch (error) {
        console.log(error);
      }
    };

    const handleConsoleLog = (value) => {
        if (value !== 'using indexedDB for stdlib modules cache') {
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
      <div id="python-editor-container" className='flex max-md:flex-col -mt-10 gap-5'>
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
    <div id="python-editor-input">
        <div className='flex justify-between mb-2 p-2'>
      <button type="button" onClick={run} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        Run
      </button>
      <button type="button" onClick={clearLogs} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        Output Clear
      </button>
      </div>
      <CodeEditor
        id="python-code-editor"
        value={code}
        mode="python"
        theme="monokai"
        onChange={(text) => setCode(text)}
        width={`${window.innerWidth / 2.5}px`}
        height={`${window.innerHeight - 30}px`}
        fontSize={"1rem"}
      />
    </div>
    <div id="python-editor-output" className='flex flex-column mt-[4rem] '>
      <textarea
        className='h-[39rem] bg-[#272822] text-gray-400 w-[25rem] py-2 px-2'
        id="python-output"
        readOnly
        value={outputArr.join("\n")}
        placeholder="> output goes here..."
      />
    </div>
  </div>
    </HelmetProvider>
    
);
}; 

export default PlayGround