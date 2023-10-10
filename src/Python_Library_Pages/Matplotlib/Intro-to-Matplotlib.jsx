import React from "react";

const MatplotlibBasics = () => {
  const containerStyle = {
    padding: "20px",
    background: "#f7f7f7",
    padding: "30px",
    margin: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  };

  const h1Style = {
    color: "#8800ff",
    fontSize: "2.5rem",
    fontFamily: "Poppins, sans-serif",
  };

  const h2ToH6Style = {
    color: "#000000",
    fontFamily: "Poppins, sans-serif",
  };

  const paragraphStyle = {
    color: "#000000",
    fontFamily: "Source Serif 4, serif",
    marginBottom: "16px",
  };

  const codeStyle = {
    fontFamily: "monospace",
    backgroundColor: "#d7d7d7",
    padding: "16px",
    borderRadius: "4px",

  };

  const linkStyle = {
    color: "#8800ff", 
    textDecoration: "underline", // Underline the links
  };

  return (
    <div style={containerStyle}>
      <h1 style={h1Style}>Introduction to Matplotlib</h1>
      <br></br>
      <p style={paragraphStyle}>
        Matplotlib is a popular Python library used for creating static,
        animated, and interactive visualizations in data science and
        scientific computing. It provides a wide range of tools for
        constructing various types of plots and charts, making it an essential
        tool for data analysts, scientists, and engineers.
      </p>

      <h2 style={h2ToH6Style}>Key Features of Matplotlib</h2>

      <ul>
        <li style={h2ToH6Style}>
          <strong>Simple and Flexible:</strong> Matplotlib allows you to create
          high-quality visualizations with just a few lines of code, making it
          accessible to both beginners and experts.
        </li>
        {/* Other list items with h2ToH6Style */}
      </ul>
      <br></br>
      <h2 style={h2ToH6Style}>Getting Started with Matplotlib</h2>

      <p style={paragraphStyle}>
        To get started with Matplotlib in Python, you'll typically need to
        install it using a package manager like pip and import it into your
        Python scripts or Jupyter notebooks. Here's a basic example of creating
        a simple line plot using Matplotlib:
      </p>

      <pre style={codeStyle}>
        <code>
          {`
import matplotlib.pyplot as plt

# Data
x = [1, 2, 3, 4, 5]
y = [2, 4, 6, 8, 10]

# Create a line plot
plt.plot(x, y)

# Add labels and a title
plt.xlabel("X-axis")
plt.ylabel("Y-axis")
plt.title("Simple Line Plot")

# Show the plot
plt.show()
          `}
        </code>
      </pre>
      <br></br>
      <p style={paragraphStyle}>
        This code snippet creates a basic line plot with labeled axes and a
        title. Matplotlib provides extensive documentation and a wealth of
        examples to help you explore its capabilities further.
      </p>

      <p style={paragraphStyle}>
        For more information on fonts, colors, and typography in design systems,
        you can refer to{" "}
        <a
          href="https://medium.com/eightshapes-llc/typography-in-design-systems-6ed771432f1e"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          this typography guide
        </a>.
      </p>

      <p style={paragraphStyle}>
        Additionally, you can check out the following websites for standard
        website design references:
      </p>

      <ul>
        <li>
          <a
            href="https://dart-tutorial.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            Dart Tutorial
          </a>
        </li>
        <li>
          <a
            href="https://www.w3schools.com/html/"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            W3Schools HTML Tutorial
          </a>
        </li>
        <li>
          <a
            href="https://www.studytonight.com/html5-references/html-a-tag"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            StudyTonight HTML5 Reference
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MatplotlibBasics;
