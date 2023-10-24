import React from "react";

const PandasBasics = () => {
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

  const paragraphStyle = {
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
        <h1 style={heading1Style}>Pandas: Data Manipulation Made Easy</h1>
      </header>

      <main>
        <article>
          <h2 style={heading2Style}>Efficient Data Manipulation</h2>
          <p style={paragraphStyle}>
            When it comes to data manipulation and analysis in Python, Pandas is a go-to library. It provides easy-to-use data structures and data analysis tools. In this blog post, we'll explore Pandas and its features.
          </p>

          <p style={paragraphStyle}>
            <strong>Key Features of Pandas</strong>
            <br />
            Pandas offers a range of features that make data manipulation efficient and intuitive:
          </p>

          <ul style={paragraphStyle}>
            <li>
              <strong>Data Structures:</strong> Pandas introduces two primary data structures, Series (1D) and DataFrame (2D), for handling data.
            </li>
            <li>
              <strong>Data Cleaning:</strong> It provides methods for handling missing data and cleaning messy datasets.
            </li>
            <li>
              <strong>Data Transformation:</strong> You can perform various operations like merging, reshaping, and pivoting data effortlessly.
            </li>
            <li>
              <strong>Data Analysis:</strong> Pandas offers tools for data exploration, aggregation, and statistical analysis.
            </li>
          </ul>

          <p style={paragraphStyle}>
            Whether you are dealing with structured data, time series, or messy real-world datasets, Pandas simplifies the process.
          </p>

          <h2 style={heading2Style}>Exploring Further</h2>
          <p style={paragraphStyle}>
            Pandas is widely used in data analysis, scientific research, and machine learning projects. It seamlessly integrates with libraries like NumPy and Matplotlib for advanced data analysis and visualization.
          </p>

          <ul style={paragraphStyle}>
            <li>
              <a href="https://pandas.pydata.org/docs/" style={linkStyle}>Official Pandas Documentation</a>
            </li>
            <li>
              <a href="https://pandas.pydata.org/pandas-docs/stable/getting_started/index.html" style={linkStyle}>Getting Started with Pandas</a>
            </li>
          </ul>

          <h2 style={heading2Style}>Example: Data Manipulation with Pandas</h2>
          <p style={paragraphStyle}>
            Here's a simple example of using Pandas to load a CSV file, perform basic operations, and display the data.
          </p>

          <pre style={paragraphStyle}>
            {`# Python script to work with Pandas
import pandas as pd

# Load a CSV file
data = pd.read_csv('example.csv')

# Display the first few rows
print(data.head())
`}
          </pre>

          <p style={paragraphStyle}>
            To run this script, ensure you have Pandas installed in your Python environment and replace 'example.csv' with the path to your CSV file.
          </p>

          <p style={paragraphStyle}>
            If you haven't already installed Pandas, you can do so using pip:
          </p>

          <pre style={paragraphStyle}>
            {'pip install pandas'}
          </pre>
        </article>
      </main>

      <footer style={italicStyle}>
        <p style={paragraphStyle}>
          Pandas simplifies data manipulation and analysis in Python. Whether you are a data scientist, analyst, or Python developer, mastering Pandas is essential for working with data efficiently. Install Pandas and start exploring the world of data manipulation!
        </p>
      </footer>
    </div>
  );
};

export default PandasBasics;
