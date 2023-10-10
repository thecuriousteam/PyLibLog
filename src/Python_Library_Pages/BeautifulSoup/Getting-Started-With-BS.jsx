import { color } from "framer-motion";
import React from "react";

const GettingStartedBS = () => {
  return (
    <div>
     <h1><strong>Getting Started With BeautifulSoup</strong></h1>
    <div className="content">
      <p>To begin your journey with Beautiful Soup, you'll need to ensure you have Python installed on your computer. If you haven't already, you can download and install Python from the official Python website <a href="https://www.python.org/" className="Links">https://www.python.org/</a>.Once you have Python installed, you can install Beautiful Soup using the package manager pip. Open your terminal or command prompt and run the following command:</p>
    </div>
    
    <div className="content">
    <p className="snippet">pip install beautifulsoup4 </p>
    <p>This command will download and install Beautiful Soup on your system.</p>
    </div>

    <div className="content">
    <h1><strong>Importing Beautiful Soup</strong></h1>
    </div>

    <div className="content">
      <p>
      With Beautiful Soup installed, you're now ready to start using it in your Python scripts. First, you'll need to import Beautiful Soup and, often, another library called requests to fetch web pages.
      </p>
    </div>

    <div className="content">
    <p className="snippet">import requests</p>  
    <p className="snippet"> from bs4 import BeautifulSoup </p>
    </div>

    <div className="content">
      <p><strong>requests:</strong> This library allows you to make HTTP requests to fetch web pages. You'll use it to retrieve the HTML content of the web page you want to scrape.</p>
      <p><strong>BeautifulSoup:</strong> This is the main class provided by Beautiful Soup. It will help you parse and navigate the HTML content once you've obtained it using requests</p>
    </div>

    <div className="content">
    <h1><strong>Fetching a Web Page</strong></h1>
    </div>

    <div className="content">
    <p>To scrape data from a web page, you first need to obtain its HTML content. You can do this with the requests library. Here's a simple example of how to fetch the HTML content of a web page:</p> 
    </div>

    <div className="content">
      <p className="snippet">
    # Specify the URL of the web page you want to scrape <br />
    url = "https://example.com" <br />
    # Send an HTTP GET request to the URL <br />
    response = requests.get(url) <br />
    # Check if the request was successful <br />
    if response.status_code == 200: <br />
    # Parse the HTML content of the web page <br />
    soup = BeautifulSoup(response.text, 'html.parser') <br />
    # Now, you have a BeautifulSoup object 'soup' that contains the parsed HTML. <br />
    else: <br />
    print("Failed to retrieve the web page.") <br />
    </p>
    </div>

    <div className="content">
    <p>In this example: <br />
    You specify the URL of the web page you want to scrape.
    You use requests.get(url) to send an HTTP GET request to that URL and obtain the response.
    You check if the response status code is 200, which indicates a successful request.
    If the request was successful, you create a BeautifulSoup object named soup by passing the HTML content (accessed using response.text) and specifying the parser ('html.parser').</p>
    </div>

    <div className="content">
    <h1><strong>Exploring the HTML Structure</strong></h1>
    </div>
    <div className="content">
      <p>
      Now that you have the HTML content of the web page parsed into a BeautifulSoup object, you can start exploring and extracting data from it. Beautiful Soup provides several methods and techniques for navigating and searching the HTML tree. <br /> 
      In the next section, we'll dive into these techniques and show you how to extract specific data from web pages using Beautiful Soup.  
      </p>        
    </div>



   </div>
  );
};

export default GettingStartedBS;