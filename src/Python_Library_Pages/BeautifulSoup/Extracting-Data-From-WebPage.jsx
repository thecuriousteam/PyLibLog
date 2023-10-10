import React from "react";

const DataFromWebPages = () => {
  return (
    <div>
      <h1><strong>Extracting Data from Web Pages with Beautiful Soup</strong></h1>


      <div class="content">
      <p>After you've successfully navigated the HTML tree using Beautiful Soup, the next step is to extract the data you need from the web page. In this section, we'll explore various techniques for extracting text, attributes, and more from web page elements.</p>
      </div>

    <div class="content">
      <h1>Extracting Text Content</h1> <br />
      <p>One of the most common tasks in web scraping is extracting text content from HTML elements. Beautiful Soup makes this straightforward:</p>
      <br />
      <p className="snippet">
      # Assuming you have a BeautifulSoup object 'soup' representing a web page <br />
      # Extracting text from a specific element <br />
      element = soup.find('p') <br />
      text_content = element.get_text() <br />
      print(text_content) <br />
    </p> <br />

    <p>In this example, we use the .get_text() method on an HTML element to retrieve its text content. This method strips away any HTML tags and returns the plain text.</p> <br />
    <p> <strong> Handling Multiple Elements </strong> <br /> <br />
    When dealing with multiple elements of the same type, you can iterate through them to extract text from each element:</p> <br />
    <p className="snippet">
    # Extracting text from all &lt;p&gt; elements on a page <br />
    paragraphs = soup.find_all('p') <br />
    for paragraph in paragraphs: <br />
    text_content = paragraph.get_text() <br />
    print(text_content) <br />
    </p>
  </div>

  <div class="content">
      <h1>Extracting Attribute Values</h1> <br />
      <p>Many HTML elements have attributes such as href for links or src for images. You can extract these attribute values using Beautiful Soup:</p>
      <br />
    <p className="snippet">
      # Extracting the 'href' attribute from a link <br />
      link = soup.find('a') <br />
      href_value = link['href'] <br />
      print(href_value) <br />
    </p> <br />

    <p>In this example, we access the href attribute of an &lt;a&gt; element using square brackets.</p> <br />
  </div>


  <div class="content">
      <h1>Combining Text and Attributes</h1> <br />
      <p>Sometimes, you may want to extract both the text content and specific attribute values from an element. You can achieve this by combining the techniques mentioned earlier:</p>
      <br />
    <p className="snippet">
    # Extracting both text content and 'href' attribute from a link <br />
    link = soup.find('a') <br />
    text_content = link.get_text() <br />
    href_value = link['href'] <br />
    print(f"Text: &#123;text_content&#125;, Href: &#123;href_value&#125;") <br />
    </p> <br />
  </div>


  <div class="content">
      <h1>Handling Missing Attributes</h1> <br />
      <p>When extracting attributes, it's essential to consider cases where the attribute may not exist. You can use the .get() method to provide a default value in case the attribute is missing:</p>
      <br />
    <p className="snippet">
    # Extracting the 'title' attribute with a default value <br />
    element = soup.find('div', class_='section') <br />
    title_value = element.get('title', 'No title found') <br />
    print(title_value) <br />
</p>
  </div>


  <div class="content">
      <h1>Extracting Data from Tables</h1> <br />
      <p>Web pages often contain tabular data. You can extract data from HTML tables using Beautiful Soup:</p>
      <br />
    <p className="snippet">
    # Assuming you have a BeautifulSoup object 'soup' representing a web page <br />
    # Extracting data from a table <br />
    table = soup.find('table') <br />
    for row in table.find_all('tr'): <br />
    cells = row.find_all('td') <br />
    for cell in cells: <br />
        data = cell.get_text() <br />
        print(data) <br />
    </p> <br />

    <p>In this example, we iterate through the rows and cells of a table to extract the data.</p> <br />
  </div>


  <div class="content">
      <h1>Advanced Data Extraction</h1> <br />
      <p>For more complex web scraping tasks, you can use regular expressions (re module in Python) in combination with Beautiful Soup. Regular expressions allow you to match and extract patterns of text within HTML content.</p>
      <br />
    <p className="snippet">
    import re <br />
    # Extract all email addresses from a web page <br />
    email_pattern = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]&#123;2,7&#125;\b' <br />
    email_addresses = re.findall(email_pattern, str(soup)) <br />
    for email in email_addresses: <br />
    print(email) <br />
    </p> <br />

    <p>In this example, we use a regular expression to find and extract email addresses from the entire web page content.</p> <br />
  </div>


  
  <div class="content">
      <h1>Putting It All Together</h1> <br />
      <p>Let's consider a real-world scenario where you want to scrape product details from an e-commerce website:</p>
      <br />
    <p className="snippet">
    # Assuming you have a BeautifulSoup object 'soup' representing a product page <br /> 
    # Extracting product name, price, and description <br />
    product_name = soup.find('h1').get_text() <br />
    product_price = soup.find('span', class_='price').get_text() <br />
    product_description = soup.find('p', class_='description').get_text() <br />
    print(f"Product Name: &#123;product_name&#125;") <br />
    print(f"Product Price: &#123;product_price&#125;")  <br />
    print(f"Product Description: &#123;product_description&#125;") <br />
    </p> <br />

    <p>In this example, we locate the elements containing the product name, price, and description and extract their text content.</p> <br />
  </div>





    </div>

    

  );
};

export default DataFromWebPages;