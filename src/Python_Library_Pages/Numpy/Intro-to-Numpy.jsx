import React from "react";

const NumpyBasics = () => {
  return (
    <div className="w-full lg:w-auto p-6 lg:p-10">
      <h1 className="text-3xl font-bold text-gray-700">Introduction to NumPy</h1>

      <p className="mt-4 text-gray-600 text-lg">
        NumPy, short for Numerical Python, is a fundamental library in the Python ecosystem for numerical and scientific computing. It provides support for large, multi-dimensional arrays and matrices, along with a collection of high-level mathematical functions to operate on these arrays. NumPy is a must-know tool for anyone involved in data analysis, machine learning, scientific research, and more.
      </p>

      <h2 className="text-2xl font-bold text-gray-700 mt-6">Why NumPy?</h2>

      <p className="mt-4 text-gray-600 text-lg">
        You might be wondering why you should use NumPy when Python itself has a rich set of data structures and functions. Here are some compelling reasons:
      </p>

      <ul className="list-disc ml-6 text-gray-600 text-lg">
        <li>
          <b>Efficiency:</b> NumPy is implemented in C, which makes it faster and more efficient than pure Python code. It leverages pre-compiled functions and avoids the overhead of interpreting Python code.
        </li>
        <li>
          <b>Multi-dimensional Arrays:</b> NumPy provides a powerful <code>ndarray</code> data structure, which allows you to work with arrays of any dimension (vectors, matrices, tensors) efficiently.
        </li>
        <li>
          <b>Mathematical Functions:</b> NumPy includes a wide range of mathematical functions, including linear algebra, statistics, Fourier analysis, and more.
        </li>
        <li>
          <b>Broadcasting:</b> NumPy's broadcasting feature allows you to perform operations on arrays of different shapes, making your code more concise and readable.
        </li>
        <li>
          <b>Interoperability:</b> NumPy integrates seamlessly with other scientific libraries in Python, such as SciPy, Matplotlib, and Pandas.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-700 mt-6">Getting Started</h2>

      <p className="mt-4 text-gray-600 text-lg">
        Before you dive into NumPy, you'll need to ensure that Python and NumPy are installed on your system. Let's go through the installation process:
      </p>

      <h3 className="text-xl font-bold text-gray-700 mt-6">Python Installation (if needed)</h3>
      <p className="mt-2 text-gray-600 text-lg">
        If you haven't installed Python, follow these steps to get it up and running on your system:
      </p>

      <div className="bg-gray-100 p-4 rounded-lg mt-4">
        <h4 className="text-lg font-bold text-gray-700">For Windows:</h4>
        <ol className="list-decimal ml-6 text-gray-600">
          <li>Visit the official Python website at <a href="https://www.python.org/" className="text-blue-500">python.org</a></li>
          <li>Navigate to the "Downloads" section.</li>
          <li>Click on the latest version of Python for Windows.</li>
          <li>Run the downloaded installer.</li>
          <li>Check the box that says "Add Python to PATH" during installation.</li>
          <li>Click "Install Now" to start the installation process.</li>
          <li>Open a Command Prompt or PowerShell.</li>
          <li>Type <code>python --version</code> or <code>python -V</code> and press Enter to verify the installation.</li>
        </ol>
      </div>

      <h2 className="text-2xl font-bold text-gray-700 mt-8">Installing NumPy</h2>

      <p className="mt-4 text-gray-600 text-lg">
        Once Python is installed, it's straightforward to install NumPy. Open your terminal or command prompt and run the following command:
      </p>

      <div className="bg-gray-800 p-4 text-white rounded-lg mt-4">
        <code>pip install numpy</code>
      </div>

      <p className="mt-4 text-gray-600 text-lg">
        This command will install NumPy on your system. Once NumPy is installed, you're ready to dive into the world of numerical computing with Python. Let's start exploring NumPy and its capabilities!
      </p>
    </div>
  );
};

export default NumpyBasics;
