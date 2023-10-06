import * as pyodide from 'pyodide';

pyodide.runPythonAsync(`importScripts('https://cdn.jsdelivr.net/pyodide/v0.18.1/full/pyodide.js');`);

let pyodideReady = null;

export const initPyodide = async() =>{
    if(!pyodideReady){
        pyodideReady = pyodide.loadPackage(['numpy', 'pandas', 'matplotlib'])
            .then(()=>{
                return pyodide;
            })
            .catch((err)=>{
                console.log(err);
            });
    }
    return pyodideReady
} 

export const runPython = async() => {
    const pyodideInstance = await initPyodide();
    try {
        const result = await initPyodide();
        return result;
    } catch (error) {
        throw(error)
    }
}