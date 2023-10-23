import React from "react";

const Requests = () => {
  return (
    <div class="container mx-auto p-4">
      <h1 class="text-3xl font-bold mb-4">
        Python Requests Module for Beginners
      </h1>

      <div class="mb-4">
        <h2 class="text-2xl font-semibold">Introduction</h2>
        <p class="text-gray-800">
          The Python <code>requests</code> module is a popular library for
          making HTTP requests. It simplifies the process of sending HTTP
          requests and handling responses, making it a powerful tool for web
          scraping, API integration, and more.
        </p>
      </div>

      <div class="mb-4">
        <h2 class="text-2xl font-semibold">Installation</h2>
        <p class="text-gray-800">
          You can install the <code>requests</code> module using{" "}
          <code>pip</code>:
        </p>
        <pre class="bg-gray-200 p-2 rounded-md">pip install requests</pre>
      </div>

      <div class="mb-4">
        <h2 class="text-2xl font-semibold">Basic Usage</h2>
        <p class="text-gray-800">
          To make a GET request, you can use the following code:
        </p>
        <pre class="bg-gray-200 p-2 rounded-md">
          import requests # Send a GET request to a URL response =
          requests.get('https://www.example.com') # Print the response content
          print(response.text)
        </pre>
      </div>

      <div class="mb-4">
        <h2 class="text-2xl font-semibold">HTTP Methods</h2>
        <p class="text-gray-800">
          The <code>requests</code> module supports various HTTP methods,
          including GET, POST, PUT, DELETE, and more. You can specify the method
          in the request functions (e.g., <code>requests.post()</code>,{" "}
          <code>requests.put()</code>).
        </p>
      </div>

      <div class="mb-4">
        <h2 class="text-2xl font-semibold">Request Headers</h2>
        <p class="text-gray-800">
          You can set custom headers in your requests. For example:
        </p>
      </div>

      <div class="mb-4">
        <h2 class="text-2xl font-semibold">Handling Responses</h2>
        <p class="text-gray-800">
          You can access the response content, status code, headers, and more
          from the response object. For example:
        </p>
        <pre class="bg-gray-200 p-2 rounded-md">
          response = requests.get('https://www.example.com') print('Status
          Code:', response.status_code) print('Response Headers:',
          response.headers) print('Response Content:', response.text)
        </pre>
      </div>

      <div class="mb-4">
        <h2 class="text-2xl font-semibold">Error Handling</h2>
        <p class="text-gray-800">
          It's important to handle potential errors when making requests. You
          can use try-except blocks to catch exceptions like{" "}
          <code>requests.exceptions.RequestException</code>.
        </p>
      </div>

      <div class="mb-4">
        <h2 class="text-2xl font-semibold">Conclusion</h2>
        <p class="text-gray-800">
          The Python <code>requests</code> module is a powerful and
          user-friendly tool for working with HTTP requests. It simplifies the
          process of making requests and handling responses, making it an
          essential library for web development and data retrieval tasks.
        </p>
        <p class="text-gray-800">
          Explore the official documentation for more details:{" "}
          <a
            href="https://docs.python-requests.org/en/master/"
            class="text-blue-600"
          >
            Python Requests Documentation
          </a>
        </p>
      </div>
    </div>
  );
};

export default Requests;
