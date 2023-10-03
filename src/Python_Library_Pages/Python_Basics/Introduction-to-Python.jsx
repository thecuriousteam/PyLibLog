import React from "react";
import '../../CSS/python-basics/intro-to-python.css';

const PythonBasics = () => {
  return (
    <div className="container">
      <h1 className="main-heading">Introduction to Python</h1> 

      <p>Python is a versatile and popular programming language created by Guido van Rossum in 1991. It is widely used for various purposes, including:</p>

      <ul className="unordered-list">
        <li>Web Development (server-side)</li>
        <li>Software Development</li>
        <li>Mathematics</li>
        <li>System Scripting</li>
      </ul>

      <h2 className="sub-heading">Key Capabilities of Python</h2>

      <p>Python's flexibility and capabilities make it a preferred choice for many developers:</p>

      <ul className="unordered-list">
        <li>Creating Web Applications</li>
        <li>Automating Workflows</li>
        <li>Database Connectivity</li>
        <li>Data Manipulation and Analysis</li>
        <li>Rapid Prototyping</li>
        <li>Production-Ready Software Development</li>
      </ul>

      <h2 className="sub-heading">Why Choose Python?</h2>

      <ul className="unordered-list">
        <li>Multi-Platform Support (Windows, Mac, Linux, Raspberry Pi, etc.)</li>
        <li>Simple and Readable Syntax (Similar to English)</li>
        <li>Concise Code (Fewer Lines Compared to Other Languages)</li>
        <li>Interpreted Language (Quick Prototyping)</li>
        <li>Support for Procedural, Object-Oriented, and Functional Programming</li>
      </ul>

      <h2 className="sub-heading">Learn More About Python</h2>

      <p>If you'd like to learn more about Python, here's a video introduction to Python programming:</p>

      {/* Embed the YouTube video */}
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/qwAFL1597eM"
          title="Introduction to Python"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
<br/>
      <p>As you explore this guide, you'll dive deeper into Python's core concepts and practical applications. Whether you're a beginner or an experienced developer, Python offers a wide range of possibilities for your programming journey.</p>
    </div>
  );
};

export default PythonBasics;
