import React from "react";

const StreamlitBasics = () => {
  return (
    <div>
      <h1><b>Introduction to Streamlit</b></h1>
      <br />
      <pre>
        <code>
          {`Streamlit is a free and open-source framework to rapidly build and share beautiful machine learning and 
data science web apps.It is a Python-based library specifically designed for machine learning engineers. 
Data scientists or machine learning engineers are not web developers and they're not interested in spending
weeks learning to use these frameworks to build web apps. Instead, they want a tool that is easier to learn
and to use, as long as it can display data and collect needed parameters for modeling. Streamlit allows you
to create a stunning-looking application with only a few lines of code.The best thing about Streamlit is that
you don't even need to know the basics of web development to get started or to create your first web application.

So if you're somebody who's into data science and you want to deploy your models easily, quickly, and with only
a few lines of code, Streamlit is a good fit.

One of the important aspects of making an application successful is to deliver it with an effective and intuitive user
 interface. Many of the modern data-heavy apps face the challenge of building an effective user interface quickly, without
  taking complicated steps. Streamlit is a promising open-source Python library, which enables developers to build 
  attractive user interfaces in no time.

Streamlit is the easiest way especially for people with no front-end knowledge to put their code into a web application:
  - No front-end (html, js, css) experience or knowledge is required.
  - You don't need to spend days or months to create a web app, you can create a really beautiful machine learning or data science app in only a few hours or even minutes.
  - It is compatible with the majority of Python libraries (e.g. pandas, matplotlib, seaborn, plotly, Keras, PyTorch, SymPy(latex)).
  - Less code is needed to create amazing web apps.
  - Data caching simplifies and speeds up computation pipelines.
`}
        </code>
      </pre>
      <br />
      <br />
      <h1>
        <b>How to use Streamlit</b>
      </h1>
      <h2><b>Install Streamlit</b></h2>
      <p>
        <br />
        <h2>
          <b>For Windows:</b>
        </h2>
        <h2>
          - <u>Install Anaconda and create your environment</u>
          - <u>Open the terminal:</u>
        </h2>
        <ol>
          <li>
          Type this command in the terminal to install Streamlit:{" "}
            <a href="">
              <b>
                <b>pip install streamlit</b>
              </b>
            </a>
          </li>
        </ol>
<br />
<h2>
          <b>For MacOS:</b>
        </h2>
        <h2>
          - <u>Install pip:</u>
          - <u>Open the terminal:</u>
        </h2>
        <ol>
          <li>
          Type this command in the terminal to install pip:{" "}
            <a href="">
              <b>
                <b>sudo easy_install pip</b>
              </b>
            </a>
          </li>
        </ol>
<br />
        <h2>
          - <u>Install pipenv:</u>
        </h2>
        <ol>
          <li>Run this code.</li>
          <b>
                <b>pip3 install pipenv</b>
              </b>
        </ol>
      <h2>
        <br></br>
          - <u>Create your environment. Open your project folder:</u>
        </h2>
        <ol>
          <li>Run this code.</li>
          <b>
                <b>cd project_folder_name</b>
              </b>
        </ol>
      <br />
        <h2>
          - <u>Create a pipenv environment::</u>
        </h2>
        <ol>
          <li>Run this code.</li>
          <b>
                <b>pipenv shell</b>
              </b>
        </ol>

        <h2>
          - <u>Type this command to install Streamlit:</u>
        </h2>
        <ol>
          <li>Run this code.</li>
          <b>
                <b>pip install streamlit</b>
              </b>
        </ol>

        <h2>
          - <u>Create a pipenv environment::</u>
        </h2>
        <ol>
          <li>Run this code.</li>
          <b>
                <b>pipenv shell</b>
          </b>
          <li>Test if the installation worked.</li>
          <b>
                <b>streamlit hello</b>
              </b>  
        </ol>

        <h2>
          <b>For Linux:</b>
        </h2>
        <h2>
          - <u>Install pip:</u>
          - <u>Open the terminal:</u>
        </h2>
        <ol>
          <li>
          Type this command in the terminal to install pip:{" "}
            <a href="">
              <b>
                <b>sudo apt-get install python3-pip</b>
              </b>
            </a>
          </li>
        </ol>
<br />
        <h2>
          - <u>Install pipenv:</u>
        </h2>
        <ol>
          <li>Run this code.</li>
          <b>
                <b>pip3 install pipenv</b>
              </b>
        </ol>
      <h2>
        <br></br>
          - <u>Create your environment. Open your project folder:</u>
        </h2>
        <ol>
          <li>Run this code.</li>
          <b>
                <b>cd project_folder_name</b>
              </b>
        </ol>
      <br />
        <h2>
          - <u>Create a pipenv environment:</u>
        </h2>
        <ol>
          <li>Run this code.</li>
          <b>
                <b>pipenv shell</b>
              </b>
        </ol>

        <h2>
          - <u>Type this command to install Streamlit:</u>
        </h2>
        <ol>
          <li>Run this code.</li>
          <b>
                <b>pip install streamlit</b>
              </b>
        </ol>

        <h2>
          - <u>Create a pipenv environment::</u>
        </h2>
        <ol>
          <li>Run this code.</li>
          <b>
                <b>pipenv shell</b>
          </b>
          <li>Test if the installation worked.</li>
          <b>
                <b>streamlit hello</b>
              </b>  
        </ol>
        <br />
        
        <h2>How to run your Streamlit code</h2>
        <li><b>streamlit run file_name.py</b></li>
        <br />


      </p>
      <br />
      <br />
      
      <h2><b>Streamlit Components</b></h2>
      <p>
        Streamlit apps are built using a set of components that allow you to create interactive user interfaces. Some commonly used Streamlit components include:
      </p>
      <ul>
        <li><b>st.text()</b>: Display plain text.</li>
        <li><b>st.markdown()</b>: Render Markdown-formatted text.</li>
        <li><b>st.title()</b>: Display a title.</li>
        <li><b>st.image()</b>: Display images.</li>
        <li><b>st.dataframe()</b>: Display DataFrames.</li>
        <li><b>st.plotly_chart()</b>: Render Plotly charts.</li>
        <li><b>st.map()</b>: Display interactive maps.</li>
      </ul>
      <p>
        You can combine these components to build rich and interactive Streamlit apps. For detailed usage and examples, refer to the Streamlit documentation.
      </p>

      <br />
      <h2><b>Deploying a Streamlit App</b></h2>
      <p>
        Once you've created your Streamlit app, you might want to deploy it to make it accessible to others. Here are some common deployment options:
      </p>

      <h3><b>Streamlit Sharing (Free Hosting)</b></h3>
      <p>
        Streamlit offers a free hosting platform called Streamlit Sharing. Follow these steps to deploy your app:
      </p>
      <ol>
        <li>Create a GitHub repository containing your Streamlit app.</li>
        <li>Sign in to Streamlit Sharing with your GitHub account.</li>
        <li>Select your GitHub repository and deploy your app.</li>
        <li>Streamlit Sharing will provide a URL where your app is hosted.</li>
      </ol>
      <br />
      <h3><b>Heroku (Custom Hosting)</b></h3>
      <p>
        If you prefer custom hosting, you can deploy your Streamlit app on Heroku:
      </p>
      <ol>
        <li>Create a Heroku account if you don't have one.</li>
        <li>Install the Heroku CLI.</li>
        <li>Create a requirements.txt file containing your app's dependencies.</li>
        <li>Create a Procfile to specify how Heroku should run your app.</li>
        <li>Deploy your app to Heroku using Git.</li>
        <li>Heroku will provide a URL where your app is hosted.</li>
      </ol>
      <br />
      <h3><b>Other Deployment Options</b></h3>
      <p>
        Besides Streamlit Sharing and Heroku, you can deploy your Streamlit app to various cloud platforms like AWS, Google Cloud, or use containerization tools like Docker for deployment. The choice of deployment platform depends on your specific requirements and preferences.
      </p>

    </div>
  );
};

export default StreamlitBasics;
