import React from "react";

const IntroAndInstall = () => {
  return (
    <div className='ml-8 mb-8 mt-8'>
      <div>
        <h1 className='text-3xl font-bold mb-4 text-gray-700'>Introduction to Flask</h1>
        <p>Flask is a micro web framework written in Python, that allows developers to build lightweight web applications quickly and easily with Flask Libraries.It is based on WSGI toolkit and jinja2 template engine.</p>
        <p>The backend server Flask was created fully in Python. It is a lightweight application that speeds up the development of backend apps.</p><br />
        <h2 className='mt-3 text-gray-4500 font-bold'>What is WSGI?</h2>
        <p>It is an acronym for web server gateway interface which is a standard for python web application development. It is considered as the specification for the universal interface between the web server and web application.Werkzeug It is a WSGI toolkit, which implements requests, response objects, and other utility functions. This enables building a web framework on top of it.The Flask framework uses Werkzeug as one of its bases.</p><br />
        <h2 className='mt-3 text-gray-4500 font-bold'>What is Jinja2?</h2>
        <p>Jinja2 is a web template engine which combines a template with a certain data source to render the dynamic web pages.</p><br /><hr /><br />
      </div>

      <div>
        <h1 className ='text-3xl font-bold mb-4 text-gray-700'>Installing Flask on Windows</h1>
      <p>1. Make sure that <b>Python PIP </b>should be installed on your OS. You can check using the below command.</p>
      <div className='bg-gray-800 w-4/5 text-white p-2 leading-8 mt-4'>
        <h2>pip -V</h2>
        <h2>or</h2>
        <h2>pip --version</h2>
      </div><br />
      <p>2. At first, open the command prompt in administrator mode. Then the following command should be run. This command will help to install Flask using Pip in Python and will take very less time to install.</p>
      <div className='bg-gray-800 w-4/5 text-white p-2 leading-8 mt-4'>
        <h2>pip install flask</h2>
      </div><br />
      <p>3. After that, also the following two commands should be run. These commands will start Flask in the command prompt. Hence, the process is completed successfully.</p>
      <div className='bg-gray-800 w-4/5 text-white p-2 leading-8 mt-4'>
        <h2>python</h2>
        <h2>import flask</h2>
      </div>
    </div><br /><hr /><br />
    <div>
        <h1 className='text-3xl font-bold mb-4 text-gray-700'>File Structure of a flask application</h1>
        <p>Flask doesn't impose a strict structure, but a common structure includes the following files and directories:</p>
        <ul className='leading-8'>
          <li> <i className="fa fa-solid fa-circle text-gray-900 text-xs"></i>&nbsp; <b>Main Application File</b> (usually named app.py or application.py): This is the entry point of your Flask application. It contains the Flask application instance, route definitions, and other application-specific code.</li>
          <li> <i className="fa fa-solid fa-circle text-gray-900 text-xs"></i>&nbsp; <b>Templates Directory</b> (usually named templates): This directory contains HTML templates for rendering dynamic web pages. Flask uses the Jinja2 templating engine by default. You can use these templates to generate HTML with dynamic data.</li>
          <li> <i className="fa fa-solid fa-circle text-gray-900 text-xs"></i>&nbsp; <b>Static Directory</b> (usually named static): This directory stores static files like CSS stylesheets, JavaScript files, images, and other assets that are served directly to the client's web browser.</li>
        </ul>
      </div><br /><hr /><br /><div>
        <h1 className='text-3xl font-bold mb-4 text-gray-700'>Running and accessing your application</h1>
        <p>To run your web application created <b>app.py</b> using flask, In your terminal, navigate to the directory containing your app.py file and run the Flask application with the following command:</p>
        <div className='bg-gray-800 w-4/5 text-white p-2 leading-8 mt-4'>
          <h2>python app.py</h2>
        </div><br />
        <p>Flask will start a development server, and it will display output indicating that the application is running. Typically, it will say something like "Running on http://127.0.0.1:5000/," indicating that your application is accessible at http://127.0.0.1:5000 in your web browser.</p><br />
        <p>Open a web browser and navigate to the URL displayed in the terminal (e.g., http://127.0.0.1:5000). You should see your Flask application in action.</p><br /><hr /><br />
      </div><div>
        <h1 className='text-3xl font-bold mb-4 text-gray-700'>Creating first flask application</h1>
        <p>Write the following lines of code and save to a file named as <b>script.py</b>.</p>
        <div className='bg-gray-800 w-4/5 text-white p-2 leading-8 mt-4'>
          <h2>from flask import Flask  </h2>
          <h2>app = Flask(__name__)</h2>
          <h2>@app.route("/")</h2>
          <h2>def home():</h2>
          <h2>&nbsp;&nbsp;return '&lt;h1&gt;Hello World&lt;/h1&gt;'</h2>
          <h2>if __name__=='__main__':</h2>
          <h2>&nbsp;&nbsp;app.run(debug=True)</h2>
        </div><br />
        <p><b>Creating Flask App Object</b> - The Flask class can be imported to create the main application object. It takes the name of the app as an argument. <br /><i>app = Flask(__name__)</i></p><br />
        <p><b>Creating a Route</b> - Routes in a Flask app can be created by defining a view function and associating a URL with it using the route() decorator. Routes specify how the Flask app handles requests it receives, such as what to display on the webpage at a certain URL. <br /><i>@app.route("/")</i></p><br />
        <p><b>Returning HTML From Route</b> - In a Flask app, HTML can be returned from a view function to be rendered on a webpage. The HTML can be returned as a string. <br /><i>return '&lt;h1&gt;Hello World&lt;/h1&gt;'</i></p><br />
        <p><b>Running The App in Debugger</b> -This coomand is used to run the flask application with debug mode as on. When debug mode is turned on, It allows developers to locate any possible error and as well the location of the error, by logging a traceback of the error. <br /><i>if __name__=='__main__':<br />&nbsp;&nbsp;app.run(debug=True)</i></p>
      </div><br /><hr /><br /><div>
        <h1 className='text-3xl font-bold mb-4 text-gray-700'>Routing</h1>
        <p>The route() decorator in Flask is used to bind URL to a function. </p>
        <div className='bg-gray-800 w-4/5 text-white p-2 leading-8 mt-4'>
          <h2>@app.route('/hello')</h2>
          <h2>def hello_world():</h2>
          <h2>&nbsp;&nbsp;return 'hello world'</h2>
        </div><br />
        <p>Here, URL ‘/hello’ rule is bound to the hello_world() function. As a result, if a user visits http://localhost:5000/hello URL, the output of the hello_world() function will be rendered in the browser.</p><br />
        <p>A decorator’s purpose is also served by the following representation −</p>
        <div className='bg-gray-800 w-4/5 text-white p-2 leading-8 mt-4'>
          <h2>def hello_world():</h2>
          <h2>&nbsp;&nbsp;return 'hello world'</h2>
          <h2>app.add_url_rule('/','hello',hello_world)</h2>
        </div><br />
        <p>The add_url_rule() function is used to bind a URL with a function as in the above example, route() is used.</p>
      </div><br /><hr /><br />
      <div>
        <h1 className='text-3xl font-bold mb-4 text-gray-700'>Templates</h1>
        <p>The goal is to create a flask application which can render or generate a template when the user goes to a specific URL.</p>
        <p>1. First create the templates, you can use any basic HTML template. Before that, create a folder called “templates” in the current folder. Inside this “templates” folder, all of the templates will be residing. For example <b>index.html</b> be:</p>
        <div className='bg-gray-800 w-4/5 text-white p-2 leading-8 mt-4'>
          <h2>&lt;!DOCTYPE html&gt;</h2>
          <h2>&lt;html&gt;</h2>
          <h2>&lt;head&gt;</h2>
          <h2>&nbsp;&nbsp;&lt;title&gt;FlaskTest&lt;/title&gt;</h2>
          <h2>&lt;/head&gt;</h2>
          <h2>&lt;body&gt;</h2>
          <h2>&nbsp;&nbsp;&lt;h2&gt;Welcome to flask tutorial&lt;/h2&gt;</h2>
          <h2>&nbsp;&nbsp;&lt;p&gt;This is explaination of how templates are rendered in a flask application.&lt;/p&gt;</h2>
          <h2>&lt;/body&gt;</h2>
          <h2>&lt;/html&gt;</h2>
        </div><br />
        <p>2. Now, we need a way to actually link the template with a specific route or URL. We need to change the python file <b>script.py</b></p>
        <div className='bg-gray-800 w-4/5 text-white p-2 leading-8 mt-4'>
          <h2>from flask import Flask, render_template  </h2>
          <h2>app = Flask(__name__)</h2>
          <h2>@app.route("/")</h2>
          <h2>def index():</h2>
          <h2>&nbsp;&nbsp;return render_template("index.html")</h2>
          <h2>if __name__=='__main__':</h2>
          <h2>&nbsp;&nbsp;app.run(debug=True)</h2>
        </div><br /><hr /><br />
      </div><div>
        <h1 className='text-3xl font-bold mb-4 text-gray-700'>Jinja Templating and Template inheritence</h1>
        <p>Any parameters beyond the template file name <b>index.html</b> into the templating service can also be used in small snippets of code inside HTML file, such as conditionals or loops.</p><br />
        <p>So, let us re-use our “index.html” and create a block in there. T do that we use “&#123;% block &lt;name&gt; %&#125; (where name = ‘body’) to start the block, this will take everything above it and store it in a virtual block of template, to end the block you simply use “&#123;% endblock %&#125;” this will copy everything below it. </p><br />
        <small>templates/index.html</small>
        <div className='bg-gray-800 w-4/5 text-white p-2 leading-8 mt-4'>
          <h2>&lt;!DOCTYPE html&gt;</h2>
          <h2>&lt;html&gt;</h2>;
          <h2>&lt;head&gt;</h2>
          <h2>&nbsp;&nbsp;&lt;title&gt;FlaskTest&lt;/title&gt;</h2>
          <h2>&lt;/head&gt;</h2>
          <h2>&lt;body&gt;</h2>
          <h2>&nbsp;&nbsp;&lt;h2&gt;Welcome to flask tutorial&lt;/h2&gt;</h2>
          <h2>&nbsp;&nbsp;&lt;p&gt;This is explaination of how templates are rendered in a flask application.&lt;/p&gt;</h2>
          <h2>&#123;% block body%&#125;</h2>
          <h2>&lt;p&gt;This is a Flask application.&lt;/p&gt;</h2>
          <h2>&#123;% endblock %&#125;</h2>
          <h2>&lt;/body&gt;</h2>
          <h2>&lt;/html&gt;</h2>
        </div><br />
        <p>So, here we are not including the &lt;p&gt; tags as everything below the &#123;% endblock %&#125; and everything above the &#123;% block body %&#125; tag is copied. We are also using absolute URLs. The URLs are dynamic and quite easy to understand. We enclose them in “&#123; &#125;” as part of the Jinja2 syntax. The url_for function reverses the entire URL for us, we just have to pass the name of the function as a string as a parameter to the function.</p><br />
        <p>Now, we’ll create another template to reuse this created block “body”, let’s create the template <b>home.html</b> with the following contents:</p><br />
        <small>templates/home.html</small>
        <div className='bg-gray-800 w-4/5 text-white p-2 leading-8 mt-4'>
          <h2>&#123;% extends 'index.html' %&#125;</h2>
          <h2>&#123;% block body %&#125;</h2>
          <h2>&nbsp&#123;&nbsp;&lt;p&gt;This is home page.&lt;/p&gt;</h2>
          <h2>&#123;% endblock %&#125;</h2>
        </div><br />
        <p>This looks like a two-liner but will also extend (not include) the index.html. This is by using the &#123;% extends &lt;file.html&gt; %&#125; tags, they parse the block into the mentioned template. After this, we can add the things we want. If you use the include tag it will not put the replacement paragraph in the correct place on the index.html page. It will create an invalid HTML file, but since the browser is very forgiving you will not notice unless you look at the source generated. The body text must be properly nested.</p><br />
        <p><b>Inducing Logic in Templates</b> - We can use for loops if conditions in templates. this is such a great feature to leverage on. We can create some great dynamic templates without much of a hassle.</p>
      </div><br /><hr /><br /><div>
        <h1 className='text-3xl font-bold mb-4 text-gray-700'>HTTP methods</h1>
        <p>HTTP is the hypertext transfer protocol which is considered as the foundation of the data transfer in the world wide web. All web frameworks including flask need to provide several HTTP methods for data communication. Flask can run different code from the same URL dependent on HTTP method used.</p><br />
        <p><i className="fa fa-solid fa-circle text-gray-900 text-xs"></i> &nbsp; <b>POST Method </b>- It is used to send the form data to the server. The server does not cache the data transmitted using the post method.</p>
        <p>Let us first create a form to get some data at the client side from the user, and we will try to access this data on the server by using the POST request.</p><br />
        <small>login.html</small>
        <div className='bg-gray-800 w-4/5 text-white p-2 leading-8 mt-4'>
          <h2>&lt;!DOCTYPE html&gt;</h2>
          <h2>&lt;html&gt;</h2>;
          <h2>&lt;head&gt;</h2>
          <h2>&nbsp;&nbsp;&lt;title&gt;Form&lt;/title&gt;</h2>
          <h2>&lt;/head&gt;</h2>
          <h2>&lt;body&gt;</h2>
          <h2>&nbsp;&nbsp;&lt;form action = "http://localhost:5000/login" method = "post"&gt;</h2>
          <h2>Welcome to flask tutorial&lt;/h2&gt;</h2>
          <h2>&nbsp;&nbsp;&lt;table&gt;</h2>
          <h2>&lt;tr&gt;&lt;td&gt;Name&lt;/td&gt;</h2>
          <h2>&lt;td&gt;&lt;input type = "text" name = "uname"&gt;&lt;/td&gt;&lt;/tr&gt;</h2>
          <h2>&lt;tr&gt;&lt;td&gt;Password&lt;/td&gt;</h2>
          <h2>&lt;td&gt;&lt;input type = "password" name = "pass"&gt;&lt;/td&gt;&lt;/tr&gt;</h2>
          <h2>&lt;tr&gt;&lt;td&gt;&lt;input type = "submit"&gt;&lt;/td&gt;&lt;/tr&gt;</h2>
          <h2>&lt;/table&gt;</h2>
          <h2>&lt;/form&gt;</h2>
          <h2>&lt;/body&gt;</h2>
          <h2>&lt;/html&gt;</h2>
        </div><br />
        <small>post_example.py</small>
        <div className='bg-gray-800 w-4/5 text-white p-2 leading-8 mt-4'>
          <h2>from flask import *  </h2>
          <h2>app = Flask(__name__)</h2>
          <h2>@app.route("/login",methods = ['POST'])</h2>
          <h2>def login():</h2>
          <h2>&nbsp;&nbsp;uname=request.form['uname']</h2>
          <h2>&nbsp;&nbsp;password=request.form['pass']</h2>
          <h2>&nbsp;&nbsp;if uname== "ayush" and password=="google":</h2>
          <h2>&nbsp;&nbsp;&nbsp;&nbsp;return "Welcome %s" %uname</h2>
          <h2>if __name__=='__main__':</h2>
          <h2>&nbsp;&nbsp;app.run(debug=True)</h2>
        </div><br />
        <p>Start the development server by running the post_example.py. After providing the required input and submitting, the form data is ent to the development server by using the post method.</p><br />
        <p><i className="fa fa-solid fa-circle text-gray-900 text-xs"></i> &nbsp; <b>GET Method </b>- It is the method which can be used to send data in the unencrypted form to the server. By default, the requests are handled by the GET() method. Let's consider the same example for the Get method. However, there are some changes in the data retrieval syntax on the server side. First, create a form as login.html.</p><br />
        <small>login.html</small>
        <div className='bg-gray-800 w-4/5 text-white p-2 leading-8 mt-4'>
          <h2>&lt;!DOCTYPE html&gt;</h2>
          <h2>&lt;html&gt;</h2>;
          <h2>&lt;head&gt;</h2>
          <h2>&nbsp;&nbsp;&lt;title&gt;Form&lt;/title&gt;</h2>
          <h2>&lt;/head&gt;</h2>
          <h2>&lt;body&gt;</h2>
          <h2>&nbsp;&nbsp;&lt;form action = "http://localhost:5000/login" method = "get"&gt;</h2>
          <h2>Welcome to flask tutorial&lt;/h2&gt;</h2>
          <h2>&nbsp;&nbsp;&lt;table&gt;</h2>
          <h2>&lt;tr&gt;&lt;td&gt;Name&lt;/td&gt;</h2>
          <h2>&lt;td&gt;&lt;input type = "text" name = "uname"&gt;&lt;/td&gt;&lt;/tr&gt;</h2>
          <h2>&lt;tr&gt;&lt;td&gt;Password&lt;/td&gt;</h2>
          <h2>&lt;td&gt;&lt;input type = "password" name = "pass"&gt;&lt;/td&gt;&lt;/tr&gt;</h2>
          <h2>&lt;tr&gt;&lt;td&gt;&lt;input type = "submit"&gt;&lt;/td&gt;&lt;/tr&gt;</h2>
          <h2>&lt;/table&gt;</h2>
          <h2>&lt;/form&gt;</h2>
          <h2>&lt;/body&gt;</h2>
          <h2>&lt;/html&gt;</h2>
        </div><br />
        <small>get_example.py</small>
        <div className='bg-gray-800 w-4/5 text-white p-2 leading-8 mt-4'>
          <h2>from flask import *  </h2>
          <h2>app = Flask(__name__)</h2>
          <h2>@app.route("/login",methods = ['GET'])</h2>
          <h2>def login():</h2>
          <h2>&nbsp;&nbsp;uname=request.form['uname']</h2>
          <h2>&nbsp;&nbsp;password=request.form['pass']</h2>
          <h2>&nbsp;&nbsp;if uname== "ayush" and password=="google":</h2>
          <h2>&nbsp;&nbsp;&nbsp;&nbsp;return "Welcome %s" %uname</h2>
          <h2>if __name__=='__main__':</h2>
          <h2>&nbsp;&nbsp;app.run(debug=True)</h2>
        </div><br />
        <p>After providing the input ans submitting ,The data is sent using the get() method is retrieved on the development server.</p><br />
        <p>The data is obtained by using the following line of code.</p>
        <div className='bg-gray-800 w-4/5 text-white p-2 leading-8 mt-4'>
          <h2>uname = request.args.get('uname')</h2>
        </div><br />
      </div>

    </div>
  );
};
export default IntroAndInstall;
