import React from "react";

const PythonBasics = () => {
  return (
    <div>
      <h1><b>Python Tutorial</b></h1>
      <br /><br />
      <pre>
      <h2><b>1. Introduction to Python</b></h2>
        <p>
          Python is a high-level, interpreted programming language known for its readability and simplicity. It:
        </p>
          <li>Supports multiple programming paradigms.</li>
          <li>Has a large standard library.</li>
          <li>Python is free and easy to learn. </li>
        This doc will help you to get all the knowledge you want for getting started with Python. <br />
        If you have never programmed anything before and are just getting started, this might be <br />the blog for you. 
        Python has many use cases in different industries such as 
        <br />
        <br />
        <p><u>Web Development:</u></p>
        <ul>
          <li>Frameworks like Django and Flask make Python a popular choice for building web applications.</li>
        </ul>

        <p><u>Data Science and Machine Learning:</u></p>
        <ul>
          <li>Python is extensively used for data analysis, machine learning, and artificial intelligence.</li>
          <li>Libraries such as NumPy, Pandas, Scikit-learn, TensorFlow, and PyTorch are widely employed.</li>
        </ul>

        <p><u>Finance:</u></p>
        <ul>
          <li>Python is used in finance for quantitative analysis, risk management, and algorithmic trading.</li>
          <li>Libraries such as Pandas and NumPy are particularly useful in this domain.</li>
        </ul>

        <p><u>Education:</u></p>
        <ul>
          <li>Python is widely used in teaching programming due to its simplicity.</li>
          <li>It's often the first language taught in many computer science courses.</li>
        </ul>

        <p><u>Game Development:</u></p>
        <ul>
          <li>Python is used in the game development industry, and libraries like Pygame make it easier <br />to develop 2D games.</li>
        </ul>

        <p><u>GIS (Geographic Information System):</u></p>
        <ul>
          <li>Python is used for GIS applications, and libraries like Geopandas and ArcPy are popular in this field.</li>
        </ul>
      </pre>
      <br />
      <br />

      <h2><b>2. Setting up Python</b></h2>
      <p> <br />
      <h3><b>For Windows:</b></h3>

      <h4><u>Download Python:</u></h4>
      <ol>
          <li>Visit the official Python website at <a href="https://www.python.org/"><b><u>python.org</u></b></a></li>
          <li>Navigate to the "Downloads" section.</li>
          <li>Click on the latest version of Python for Windows.</li>
      </ol>

      <h4><u>Run the Installer:</u></h4>
      <ol>
          <li>Run the downloaded installer.</li>
          <li>Check the box that says "Add Python to PATH" during installation.</li>
      </ol>

      <h4><u>Install Python:</u></h4>
      <ol>
          <li>Click <b>"Install Now"</b> to start the installation process.</li>
          <li>The installer will download and install Python on your system.</li>
      </ol>

      <h4><u>Verify Installation:</u></h4>
      <ol>
          <li>Open a Command Prompt or PowerShell.</li>
          <li>Type <code><b>python --version</b></code> or <code><b>python -V</b></code> and press Enter to verify the installation.</li>
      </ol>
    <br />
      <h3><b>For macOS:</b></h3>

      <h4><u>Install Homebrew (if not installed):</u></h4>
      <ol>
          <li>Open Terminal.</li>
          <li>Install Homebrew by following the instructions on the <a href="https://brew.sh/"> <u><b >Homebrew website </b></u></a>.</li>
      </ol>

      <h4><u>Install Python using Homebrew:</u></h4>
      <ol>
          <li>In Terminal, type <code><b>brew install python</b></code> and press Enter.</li>
      </ol>

      <h4><u>Verify Installation:</u></h4>
      <ol>
          <li>Type <code><b>python3 --version</b></code> or <code><b>python3 -V</b></code> and press Enter to verify the 
          installation.</li>
      </ol>
      <br />
      <h3><b>For Linux (Ubuntu/Debian):</b></h3>

      <h4><u>Update Package List:</u></h4>
      <ol>
          <li>Open a terminal.</li>
          <li>Run <code><b>sudo apt update</b></code> to update the package list.</li>
      </ol>

      <h4><u>Install Python:</u></h4>
      <ol>
          <li>Run <code><b>sudo apt install python3</b></code> to install Python.</li>
      </ol>

      <h4><u>Verify Installation:</u></h4>
      <ol>
          <li>Type <code><b>python3 --version</b></code> or <code><b>python3 -V</b></code> and press Enter to verify the 
          installation.</li>
      </ol>
            </p>
      <br />
      <br />

      <h2><b>3. Write Your First Program</b></h2>
      <br />
      <p> Now that we know the importance and some use-cases of python lest jump on to the intresting and exciting part that is 
        writing our first program using python, don't worry if you are writing a program for the first time, why i'm telling 
        this u'll get to know soon. Now let's start our first program!<br /><br />
      <h3><u>Program 1</u>: Hello World!</h3>
      <pre>
      <code><br />
      print("Hello World!")
      <br /><br />
      </code>
      </pre>

    <p>
        <strong><u>Explanation:</u></strong>
    </p>
    <ul>
        <li>This is the classic "Hello, World!" program, often used as a first program in many programming languages.</li>
        <li>As the name suggests, <code>print()</code> function is used to display the text "Hello, World!" on the screen.</li>
        <li>Python is known for its readability and simplicity, and this program demonstrates how concise Python code can be.</li>
    </ul>

    <br />

    <p>
        <b><u>To run the programs:</u></b>
    </p>
    <ol>
        <li><strong><u>Install Python:</u></strong> Follow the installation instructions provided earlier according to your 
        operating system.</li>
        <li><strong><u>Create Python Files:</u></strong> Open a text editor (<a href="https://code.visualstudio.com/">
          <b><u>VS Code</u></b></a> is recomended for beginers ), 
        copy and paste the respective program code into the editor.</li>
        <li><strong><u>Save and Run:</u></strong> Save the file with a <code>.py</code> extension (e.g., <code>hello_world.py</code> 
        or <code>user_greeting.py</code>). 
        Open a terminal or command prompt, navigate to the directory where you saved the file, and run the program using 
        <code><b>python filename.py</b></code> (replace <code>filename</code> with the actual name of your file). <br /> 
        (Alternate Methord) If you are using VS Code head on to Extensions present on the left side of VS Code and type python 
        install the extension for future use, after this on the top right side u'll notice a play button just click that, 
        your code will be executed</li>
    </ol>
    <pre><br />
        <code>
        <u>Output</u>: Hello World!
       </code>
      </pre><br />
    <p>These programs are basic examples to help you understand the syntax and structure of Python code.
       As you progress, you can explore more advanced topics, such as 
      data types, control structures, and functions.</p>

      </p>

    <br /> <br />
    <h2><b>4. How to Take Input from User in Python</b></h2>
    <br />

    <p>In Python, you can take input from the user using the <code>input()</code> function. Now let we
    know how to print, we will move on and take the inout from user. This function reads a line
        from the user's input and returns it as a string.</p>

    <h3><u>Example:</u></h3>

    <pre>
    <code>
      <br />

    user_input = input("Enter something: ")
    <br />

    print("You entered:", user_input)
    <br /> <br />

    </code>
    </pre>

    <p><u>Explaination:</u></p>
    <ul>
        <li>In this code, <code>input("Enter something: ")</code> prompts the user to enter something and waits for them to input a
            value.</li>
        <li>The entered value is stored in the variable <code>user_input</code>.</li>
        <li>Finally, <code>print("You entered:", user_input)</code> displays the entered value to the user.</li>
    </ul>

    <p>You can use the <code>input()</code> function without any argument, but providing a prompt inside the function
        call makes the user interaction more meaningful.</p>

    <p>Keep in mind that the <code>input()</code> function always returns a string. If you want to use the input as a
        number, you'll need to convert it using functions like <code>int()</code> or <code>float()</code> for example:</p>

    <pre><br />
    <code>
    user_input = int(input("Enter an integer: ")) <br />
    print("You entered:", user_input)
    </code><br /><br />
    </pre>

    <p>This code takes an integer as input and converts it to an integer type using <code>int()</code> function.</p>

    <p>Always be cautious when using user input in your programs, especially if you're expecting a specific type of
        input. You may want to add error handling to handle cases where the user enters unexpected input.</p>

      <br /><br />

      {/* ... Repeat the same structure for other sections ... */}

      <h2>8. Classes</h2>
      <h3>Explanation:</h3>
      <pre>
        <code>
          {`class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def bark(self):
        print("Woof!")

# Creating an Object
my_dog = Dog("Buddy", 3)

# Accessing Class Members
print("Name:", my_dog.name)
print("Age:", my_dog.age)

# Calling a Method
my_dog.bark()
          `}
        </code>
      </pre>
      <p>
        Classes in Python are used for object-oriented programming. In this
        example, a <code>Dog</code> class is defined with a constructor (
        <code>__init__</code>) and a method (<code>bark</code>). An object{" "}
        <code>my_dog</code> is created, and its attributes and methods are
        accessed.
      </p>
    </div>
  );
};

export default PythonBasics;
