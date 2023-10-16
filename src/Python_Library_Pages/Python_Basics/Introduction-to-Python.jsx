import React from "react";

const PythonBasics = () => {
  return (
    <div>

      <h1><b>1. Introduction to Python</b></h1>
      <br />
      <pre>
        <code>
          {`Python is a high-level, interpreted programming language known for its readability and simplicity. It:
  - Supports multiple programming paradigms.
  - Has a large standard library.
  - Python is free and easy to learn.

This doc will help you to get all the knowledge you want for getting started with Python. 
If you have never programmed anything before and are just getting started, this might be the blog for you. 
Python has many use cases in different industries such as

  Web Development:
    - Frameworks like Django and Flask make Python a popular choice for building web applications.

  Data Science and Machine Learning:
    - Python is extensively used for data analysis, machine learning, and artificial intelligence.
    - Libraries such as NumPy, Pandas, Scikit-learn, TensorFlow, and PyTorch are widely employed.

  Finance:
    - Python is used in finance for quantitative analysis, risk management, and algorithmic trading.
    - Libraries such as Pandas and NumPy are particularly useful in this domain.

  Education:
    - Python is widely used in teaching programming due to its simplicity.
    - It's often the first language taught in many computer science courses.

  Game Development:
    - Python is used in the game development industry, and libraries like Pygame make it 
      easier to develop 2D games.

  GIS (Geographic Information System):
    - Python is used for GIS applications, and libraries like Geopandas and ArcPy are popular 
      in this field.`}
        </code>
      </pre>
      <br />
      <br />

      <h1><b>2. Setting up Python</b></h1>
      <p>
        <br />
        <h2><b>For Windows:</b></h2>
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
        <h2><b>For macOS:</b></h2>

        <h4><u>Install Homebrew (if not installed):</u></h4>
        <ol>
          <li>Open Terminal.</li>
          <li>Install Homebrew by following the instructions on the <a href="https://brew.sh/"><u><b>Homebrew website</b></u></a>.</li>
        </ol>

        <h4><u>Install Python using Homebrew:</u></h4>
        <ol>
          <li>In Terminal, type <code><b>brew install python</b></code> and press Enter.</li>
        </ol>

        <h4><u>Verify Installation:</u></h4>
        <ol>
          <li>Type <code><b>python3 --version</b></code> or <code><b>python3 -V</b></code> and press Enter to verify the installation.</li>
        </ol>
        <br />
        <h2><b>For Linux (Ubuntu/Debian):</b></h2>

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
          <li>Type <code><b>python3 --version</b></code> or <code><b>python3 -V</b></code> and press Enter to verify the installation.</li>
        </ol>
      </p>
      <br />
      <br />

      <h1><b>3. Write Your First Program</b></h1>
      <br />
      <p>Now that we know the importance and some use-cases of Python, let's jump into the interesting and exciting part that is writing our first program using Python. Don't worry if you are writing a program for the first time; you'll get to know soon. Now let's start our first program!<br /><br />

        <h3><u>Program 1</u>: Hello World!</h3>
        <pre>
          <code>
            {`print("Hello World!")`}
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

        <p>
          <b><u>To run the programs:</u></b>
        </p>
        <ol>
          <li><strong><u>Install Python:</u></strong> Follow the installation instructions provided earlier according to your operating system.</li>
          <li><strong><u>Create Python Files:</u></strong> Open a text editor (<a href="https://code.visualstudio.com/"><b><u>VS Code</u></b></a> is recommended for beginners), copy and paste the respective program code into the editor.</li>
          <li><strong><u>Save and Run:</u></strong> Save the file with a <code>.py</code> extension (e.g., <code>hello_world.py</code> or <code>user_greeting.py</code>). Open a terminal or command prompt, navigate to the directory where you saved the file, and run the program using <code><b>python filename.py</b></code> (replace <code>filename</code> with the actual name of your file). <br />(Alternate Method) If you are using VS Code, head to Extensions present on the left side of VS Code and type python, install the extension for future use, after this on the top right side you'll notice a play button just click that, your code will be executed</li>
        </ol>
        <pre><br />
          <code>
            <u>Output</u>: Hello World!
          </code>
        </pre><br />
        <p>These programs are basic examples to help you understand the syntax and structure of Python code. As you progress, you can explore more advanced topics, such as data types, control structures, and functions.</p>

      </p>

      <br /> <br />
      <h1><b>4. How to Take Input from User in Python</b></h1>
      <br />

      <p>In Python, you can take input from the user using the <code>input()</code> function. Now let's move on and take input from the user. This function reads a line from the user's input and returns it as a string.</p>

      <h3><u>Example:</u></h3>
      <pre>
        <code>
          {`user_input = input("Enter something: ")
print("You entered:", user_input)`}
        </code>
      </pre>

      <p><u>Explanation:</u></p>
      <ul>
        <li>In this code, <code>input("Enter something: ")</code> prompts the user to enter something and waits for them to input a value.</li>
        <li>The entered value is stored in the variable <code>user_input</code>.</li>
        <li>Finally, <code>print("You entered:", user_input)</code> displays the entered value to the user.</li>
      </ul>

      <p>You can use the <code>input()</code> function without any argument, but providing a prompt inside the function call makes the user interaction more meaningful.</p>

      <p>Keep in mind that the <code>input()</code> function always returns a string. If you want to use the input as a number, you'll need to convert it using functions like <code>int()</code> or <code>float()</code> for example:</p>

      <pre><br />
        <code>
          {`user_input = int(input("Enter an integer: "))
print("You entered:", user_input)`}
        </code><br /><br />
      </pre>

      <p>This code takes an integer as input and converts it to an integer type using <code>int()</code> function.</p>

      <p>Always be cautious when using user input in your programs, especially if you're expecting a specific type of input. You may want to add error handling to handle cases where the user enters unexpected input.</p>

      <br /><br />

      <h1><b>5. Python Keywords</b></h1>
      <br />
      <p>Keywords in Python are reserved words that have special meanings and cannot be used as identifiers (variable names, function names, etc.). These keywords are part of the Python language syntax and serve specific purposes in the code.</p>
      <br />

      <h2><u><b>1. False, True, None</b></u></h2>
      <pre>
        <b>
          <code>
            {`flag = True
if flag:
      print("The flag is True")`}
          </code>
        </b>
      </pre>

      <p>In this example, <code>True</code> is a Boolean value, and the <code>if</code> statement checks if the condition is <code>True</code> and prints a message.
        The same goes as for false.</p>
      <br />
      <h2><b><u>2. and, or, not: </u></b></h2>
      <br />

      <h3><b><u>and operator:</u></b></h3>
      <pre>
        <b>
          <code>
            {`x = 5
y = 10
if x > 0 and y > 0:
print("Both x and y are greater than 0")`}
          </code>
        </b>
      </pre>

      <p>The <code>and</code> operator is used to combine two conditions. The statement prints a message if both conditions are <code>True</code>.</p>
      <br />
      <h3><b><u>or operator:</u></b></h3>
      <pre>
        <b>
          <code>
            {`x = 5
y = 10
if x > 0 or y > 0:
    print("Either x or y is greater than 0")`}
          </code>
        </b>
      </pre>
      <p>The <code>or</code> operator is used when either of a condition is true. The statement prints if one statement is  <code>True</code> out of both.</p>
      <br />
      <h3><b><u>not operator:</u></b></h3>
      <pre>
        <b>
          <code>
            {`x = 5
y = 10
if not (x > 0 and y > 0):
    print("Either x or y is not greater than 0")`}
          </code>
        </b>
      </pre>
      <p>The <code>not</code> operator is used to negate the condition inside the <code>if</code> statement. The <code>print</code> statement will be executed if either x or y (or both) is not greater than 0.</p>
      <br />
      <h2><b><u>3. if, else, elif</u></b></h2>
      <pre>
        <b>
          <code>
            {`score = 85
  if score >= 90:
      print("A grade")
  elif score >= 80:
      print("B grade")
  else:
      print("C grade")`}
          </code>
        </b>
      </pre>

      <p><code>If the score is 90 or above, it prints "A grade."<br />
        Otherwise, if the score is between 80 and 89 (inclusive), it prints "B grade." <br /><q></q>
        If neither of the above conditions is met, it prints "C grade" as the default grade for scores below 80. <br />
        This program uses conditional statements (if, elif, and else) to determine the appropriate grade based on the student's score. </code></p>
      <br />

      <h3><b><u>4.break, continue, comment</u></b></h3>
      <br />
      <h4><b><u>break</u></b></h4>

      <pre>
        <b>
          <code>
            {`print("Example with break:")
for i in range(5):
    if i == 3:
        print("Breaking the loop at i =", i)
        break
    print(i)
`}
          </code>
          <br />
          <code>
            <p><b>Output for break :</b></p>
            0 <br />
            1 <br />
            2 <br />
            Breaking the loop at i = 3 <br />
            <br />
          </code>
        </b>
      </pre>
      <p>break statement is used to terminate the loop when i becomes equal to 3. As a result, the loop is interrupted, and the message is printed.</p>
      <br />
      <h4><b><u>continue</u></b></h4>

      <pre>
        <b>
          <code>
            {`print("\nExample with continue:")                                                 
for i in range(5):
    if i == 2:
        print("Skipping iteration at i =", i)
        continue
    print(i)
`}

          </code>
          <br />
          <code>
            <p><b>Output for continue :</b></p>
            0 <br />
            1 <br />
            Skipping iteration at i = 2 <br />
            3 <br />
            4 <br />
            <br />
          </code>
        </b>
      </pre>
      <p>continue statement is used to skip the iteration when i is equal to 2. As a result, the print statement inside the loop is bypassed for that specific iteration, and the loop continues with the next iteration.</p>
      <br />

      <h4><b><u>Comment</u></b></h4>
      <pre>
        <code>
          <b>
            # Here '#' is used to add comments for a line, this will not be exceuted / not seen in Output <br />
            print("Hey there!") <br />
          </b>
        </code>
        <b>
          <br />
          Output : Hey there!
        </b>
      </pre>
      <br />

      <h2><b><u>5. def, return</u></b></h2>
      <pre>
        <code>
          <b>
            {`def add(x, y):
    return x + y

result = add(3, 5)
print(result)`}
            <br /> <br />
            Output : 8
          </b>
        </code>
      </pre>

      <p>Functions are defined using <code>def</code>, and <code>return</code> is used to send a value back to the caller. In this case, a simple <code>add</code> function is defined and called with arguments.</p>

      <br />
      <h1><b><u>6. import, from, as</u></b></h1>
      <pre>
        <b>
          <code>
            {`import math
from math import sqrt as square_root

result = square_root(25)`}
            <br /> <br />
            Output : 5
          </code>
        </b>
      </pre>

      <p><code>import</code> is used to bring in a module, and <code>from</code> allows you to import specific items. In this example, the <code>sqrt</code> function from the <code>math</code> module is imported and given the alias <code>square_root</code>.</p>
      <br /><br />
      <h1><b>6.Some Basic Types of Errors :</b></h1>
      <br />
      <h3><b><u>Syntax Errors :</u></b></h3>
      <pre>
        <code>
          <b>  # Syntax Error Example <br />
            print("Hello, World!"
          </b>
        </code>
        <p>These occur when the code violates the syntax rules of the programming language. <br />The interpreter cannot execute the code if it contains syntax errors.</p>
      </pre> <br />
      <h3><b><u>Runtime errors :</u></b></h3>
      <pre>
        <code>
          <b>
            # Runtime Error Example (Division by Zero) <br />
            x = 10 / 0

          </b>
        </code>
        <p>Also known as exceptions, these errors occur during the execution of the program. <br />Common examples include division by zero, accessing an undefined variable, <br />or trying to open a file that does not exist.</p>
      </pre>
      <br /><br />

      <h1><b>7. Exception Handling</b></h1>
      <br />
      <p>Exception is an event or object that occurs during the execution of a program and disrupts the normal flow of instructions. <br /> Exceptions are typically caused by errors in the code or by unexpected conditions that may arise during runtime. <br />
        When an exception occurs, the normal flow of the program is halted, and the control is transferred to a special code segment known as an exception handler.


      </p>
      <br />
      <pre>
        <code>
          <h4><u><i>try, except block:</i></u></h4>
          <b>

            # Code that may cause an exception <br />
            result = 10 / 0 <br />
            except ZeroDivisionError: <br />
            # Code to handle the ZeroDivisionError <br />
            print("Cannot divide by zero.") <br />
          </b>
        </code>
        <br />
        <p>To handle exceptions, the try block is used to enclose the code that might raise an exception, <br />and the except block is used to define the actions to be taken if a particular exception occurs.</p>
      </pre>
      <br />

      <h4><b><u>finally block:</u></b></h4>
      <pre>
        <b>try:
          file = open("example.txt", "r") <br />
          # Code to read from the file <br />
          finally: <br />
          file.close() <br />
        </b>
      </pre>
      <br />
      <p>The "finally" block is used to define cleanup actions that must be executed under all circumstances, whether an exception occurred or not.</p>


      <br /><br />
      <h1><b>8. Classes</b></h1>
      <br />
      <pre>
        <code>
          <b>
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
my_dog.bark()`}
          </b>
        </code>
      </pre>
      <p>
        Classes in Python are used for object-oriented programming. In this example, a <code>Dog</code> class is defined with a constructor (<code>__init__</code>) and a method (<code>bark</code>). An object <code>my_dog</code> is created, and its attributes and methods are accessed. <br /> <br />
        The "Dog" class is a simple representation of a dog with attributes for name and age, and a method to make the dog bark. The object "my_dog" is created from this class, and its attributes are accessed and a method is called to demonstrate the basic principles of object-oriented programming in Python.
      </p>
    </div>
  );
};

export default PythonBasics;