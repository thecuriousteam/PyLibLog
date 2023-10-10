import React from "react";

const BasicsBeautifulSoup = () => {
  return (
    <div>
      <h1><strong>Basics of beautiful soup</strong></h1>
      

      <div class="content">
      <p>Now that you have Beautiful Soup installed and understand how to fetch the HTML content of a web page, it's time to explore the basics of web scraping using Beautiful Soup. In this section, we'll cover the fundamental techniques for extracting information from a web page.</p>
      </div>

      <div class="content">
      <h1><strong>HTML Structure</strong></h1>
      </div>

      <div class="content">
      <p>Before we dive into scraping, it's essential to understand the structure of HTML documents. HTML (Hypertext Markup Language) is the standard language used to create web pages. It uses tags to define the structure and content of a web page. <br /> Here's a simple example of an HTML structure:</p>
      </div>

      <div className="content">
      
      <p className="snippet">
      &lt;!DOCTYPE html&gt; <br />
      &lt;html&gt;<br />
      &lt;head&gt;<br />
      &lt;title&gt;My Web Page&lt;/title&gt;<br />
      &lt;/head&gt;<br />
      &lt;body&gt;<br />
      &lt;h1&gt;Welcome to my website&gt;/h1&gt;<br />
      &lt;p&gt;This is a paragraph of text.&gt;/p&gt;<br />
      &lt;ul&gt;<br />
      &lt;li&gt;Item 1&lt;/li&gt;<br />
      &lt;li&gt;Item 2&lt;/li&gt;<br />
      &lt;li&gt;Item 3&lt;/li&gt;<br />
      &lt;/ul&gt;<br />
      &lt;/body&gt;<br />
      &lt;/html&gt;<br />

    </p>
    </div>

    <div class="content">
      <ul>
        &lt;html&gt;: The root element that encapsulates the entire web page. <br />
        &lt;head&gt;: Contains metadata about the page, such as the title. <br />
        &lt;body&gt;: Contains the visible content of the web page. <br />
        &lt;h1&gt;: A heading element. <br />
        &lt;p&gt;: A paragraph element. <br />
        &lt;ul&gt;: An unordered list. <br />
        &lt;li&gt;: List items within the <br />
      </ul>
      </div>

      <div class="content">
      <h1><strong>Parsing HTML with Beautiful Soup</strong></h1>
      </div>

      <div class="content">
      <p>
      Beautiful Soup can parse HTML documents and create a structured representation of the data. You've already seen how to create a BeautifulSoup object by passing the HTML content and specifying a parser. Let's explore some common methods for navigating and searching within this parsed HTML. <br /> <br />

      Navigating the HTML Tree <br />
      You can navigate the HTML tree by accessing elements and their attributes. Here are some common navigation methods: <br /> <br />

      soup.tag: Access the first occurrence of a tag with the name tag. <br />
      soup.tag.string: Get the text within the first occurrence of the tag. <br />
      soup.tag['attribute']: Access the value of a tag's attribute. <br />
      soup.tag.contents: Get a list of all the tag's children. <br />
      soup.find('tag'): Find the first occurrence of a tag with the name tag. <br />
      soup.find_all('tag'): Find all occurrences of a tag with the name tag. <br />
      </p>
      </div>

      <div className="content">
      <p className="snippet">
      # Example: Accessing a heading element <br />
      heading = soup.h1 <br />
      print(heading.string) <br />
      # Example: Accessing an attribute value <br />
      link = soup.a <br />
      print(link['href']) <br />
      # Example: Finding all paragraph elements <br />
      paragraphs = soup.find_all('p') <br />
      for p in paragraphs: <br />
      print(p.string) <br />
    </p>
    </div>

    <div class="content">
      <h1>Searching with CSS Selectors</h1>
      <p>Beautiful Soup also allows you to search for elements using CSS selectors, which can be more flexible and powerful.</p>
      </div>

      <div className="content">
      <p className="snippet">
      # Example: Using CSS selector to find elements <br />
      # Find all &lt;a&gt; tags with a class of 'link' <br />
      links = soup.select('a.link') <br />
      for link in links: <br />s
      print(link['href']) <br />
    </p>
    </div>

    <div class="content">
      <h1>Navigating and Searching Together</h1>
      <p>You can combine navigation and searching to access nested elements and extract data more effectively.</p>
    </div>

    <div className="content">
      <p className="snippet">
      # Example: Navigating and searching together <br />
      parent_element = soup.find('div', class_='container') <br />
      child_element = parent_element.find('p') <br />
      print(child_element.string) <br />
    </p>
    </div>

    <div class="content">
      <h1><strong>Extracting Data</strong></h1> <br />
      <p>Now that you know how to navigate and search within the HTML structure, you can start extracting data. Here are some common data extraction scenarios: <br /><br />
      Extracting Text: Use .string or .text to extract text within elements. <br />
      Extracting Attributes: Use ['attribute'] to access and extract attributes. <br />
      Looping through Elements: Use loops to iterate through multiple elements. </p>
    </div>

    <div className="content">
      <p className="snippet">
      # Example: Extracting text and attributes <br /> 
      heading_text = heading.string <br />
      link_href = link['href'] <br />
      # Example: Looping through elements <br />
      for item in soup.find_all('li'): <br />
    print(item.string) <br />
    </p>
    </div>

    <div class="content">
      <h1><strong>Putting It All Together</strong></h1> <br /><br />
      <p>Let's put everything together in a simple example. Suppose you want to scrape the titles of articles from a blog page.</p>
    </div>

    <div className="content">
      <p className="snippet">
      # Fetch the HTML content of the blog page <br />
      url = "https://example-blog.com" <br />
      respon      se = requests.get(url) <br />
      soup = BeautifulSoup(response.text, 'html.parser') <br />
      # Find all article titles <br />
      article_titles = soup.find_all('h2', class_='article-title') <br />
      for title in article_titles: <br />
      print(title.string) <br />
    </p>
    </div>

    <div class="content">
      <p>In this example, we first fetch the HTML content of the blog page, then use Beautiful Soup to find all 
      &lt;h2&lt; elements with a class of article-title and print their text.</p>
      </div>
      
    </div>
  );
};

export default BasicsBeautifulSoup;