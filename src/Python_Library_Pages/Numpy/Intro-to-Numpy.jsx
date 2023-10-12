import React from 'react';

const NumpyBasics = () => {
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  };

  const heading1Style = {
    textAlign: 'center',
    fontSize: '36px',
    fontWeight: 'bold',
    margin: '20px 0',
  };

  const heading2Style = {
    fontSize: '28px',
    fontWeight: 'bold',
    margin: '20px 0',
  };

  const heading3Style = {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '20px 0',
  };

  const paragraphStyle = {
    fontSize: '18px',
    lineHeight: '1.6',
    margin: '20px 0',
  };

  const listStyle = {
    fontSize: '18px',
    lineHeight: '1.6',
    margin: '20px 0',
  };

  const linkStyle = {
    color: '#007BFF',
    textDecoration: 'none',
    fontWeight: 'bold',
  };

  const italicStyle = {
    fontStyle: 'italic',
  };

  return (
    <div style={containerStyle}>
      <header>
        <h1 style={heading1Style}>NumPy: Exploring the World of Numerical Computing</h1>
      </header>

      <main>
        <article>
          <h2 style={heading2Style}>Efficient Numerical Computing</h2>
          <p style={paragraphStyle}>
            In the realm of data science and scientific computing, efficiently manipulating and processing large datasets is paramount. Enter NumPy, short for Numerical Python, a powerful Python library that supports large, multi-dimensional arrays and matrices. It also provides a wide range of mathematical functions for array operations. In this blog post, we'll explore NumPy's features and benefits.
          </p>

          <ul style={listStyle}>
            <li>
              <strong>Efficient Array Operations:</strong>
              <ul style={listStyle}>
                <li>NumPy's ndarray (n-dimensional array) object enables efficient array operations, making it faster and more memory-efficient than traditional Python lists.</li>
                <li>Element-wise operations simplify complex mathematical calculations.</li>
              </ul>
            </li>
            <li>
              <strong>Broadcasting:</strong>
              <ul style={listStyle}>
                <li>NumPy allows operations on arrays of different shapes through broadcasting.</li>
                <li>It automatically aligns smaller arrays with larger ones, enabling element-wise operations.</li>
              </ul>
            </li>
            <li>
              <strong>Mathematical Functions:</strong>
              <ul style={listStyle}>
                <li>NumPy provides a vast array of mathematical functions for tasks such as linear algebra, Fourier analysis, and statistics.</li>
                <li>It's an essential tool for numerical computations.</li>
              </ul>
            </li>
            <li>
              <strong>Interoperability:</strong>
              <ul style={listStyle}>
                <li>NumPy seamlessly integrates with data analysis libraries like Pandas and visualization libraries like Matplotlib.</li>
                <li>This enables efficient data processing and meaningful visualizations.</li>
              </ul>
            </li>
          </ul>

          <p style={paragraphStyle}>
            <strong>Applications of NumPy</strong>
            <br />
            NumPy is indispensable in scientific and data analysis tasks, including data manipulation, statistical analysis, image processing, and machine learning. It's a crucial tool for working with large datasets and complex mathematical models.
          </p>

          <h3 style={heading3Style}>Exploring Further</h3>
          <p style={paragraphStyle}>
            NumPy serves as the foundation for many Python libraries used in scientific and data-intensive applications. It supports various data types, integrates with databases, and handles file I/O efficiently. Its flexibility and efficiency make it the ideal choice for numerical and data manipulation tasks.
          </p>

          <ul style={listStyle}>
            <li>
              <a href="https://numpy.org/doc/stable/" style={linkStyle}>Official NumPy Documentation</a>
            </li>
            <li>
              <a href="https://numpy.org/devdocs/" style={linkStyle}>Latest Development Documentation</a>
            </li>
          </ul>
          <h2 style={heading2Style}>Example: Working with NumPy</h2>
          <p style={paragraphStyle}>
            Here's an example of working with NumPy in a Python script. The script creates a NumPy array, performs a simple operation, and displays the result.
          </p>

          <pre style={listStyle}>
            {`# Python script to work with NumPy
import numpy as np

# Create a NumPy array
arr = np.array([1, 2, 3, 4, 5])

# Perform a simple operation (multiply by 2)
result = arr * 2

# Print the result
print("Original array:")
print(arr)
print("\\nResult after multiplying by 2:")
print(result)
`}
          </pre>

          <p style={paragraphStyle}>
            To run this script and see the output, execute the Python script in your Python environment with NumPy installed. Make sure to include the necessary import statement for NumPy in your script.
          </p>

          <p style={paragraphStyle}>
            If you haven't already installed NumPy, you can do so using pip:
          </p>

          <pre style={listStyle}>
            {'pip install numpy'}
          </pre>
        </article>
      </main>

      <footer style={italicStyle}>
        <p style={paragraphStyle}>
          NumPy is an essential tool for numerical computing and scientific data analysis. Its efficiency, extensive features, and wide-ranging applications make it a must-know for data scientists and Python developers. Install NumPy and unlock the potential of numerical computing in Python!
        </p>
      </footer>
    </div>
  );
};

export default NumpyBasics;
