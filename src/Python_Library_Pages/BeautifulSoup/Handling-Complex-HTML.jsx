import React from "react";

const HandleComplexHTML = () => {
  return (
    <div>
    <h1><strong>Handling Complex HTML Structures</strong></h1>

    <div class="content">
      <p>Certainly! Handling complex HTML structures can be challenging but is often necessary when web scraping with Beautiful Soup. In this section, we will explore advanced techniques for dealing with nested and intricate HTML sections.</p>
    </div>

    <div class="content">
    <h1>Understanding Complex HTML Structures</h1> <br />
  
    <p>Complex HTML structures often include nested elements, such as divs within divs, tables within tables, or lists within lists. To effectively scrape data from such structures, you need a solid understanding of how elements are organized.</p>
    <br />
    <p>Here's an example of a complex HTML structure:</p>
    </div>

    <div className="content">
      <p className="snippet">
      <pre>
        <code>
        {`<div class="container">
    <div class="header">
        <h1>Welcome to the Website</h1>
    </div>
    <div class="content">
        <p>This is some content.</p>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
    </div>
</div>
`
}
        </code>
      </pre>
    </p>
    <br />
    <p>In this structure, the &lt;div&gt; with the class "container" contains other nested elements. Understanding how to access and extract data from these elements is essential.</p>

    </div>


    <div class="content">
    <h1><strong>Navigating Nested Elements</strong></h1> <br />
      <p>To navigate nested elements, you can chain methods together to drill down the HTML structure. Here's how you can do it:</p> <br />

      <p className="snippet">
      <pre>
        <code>
        {`# Assuming you have a BeautifulSoup object 'soup' representing the complex HTML
# Access the <div> with class 'content'
content_div = soup.find('div', class_='content')

# Access the <ul> within 'content_div'
ul_element = content_div.find('ul')

# Access the list items within the <ul>
list_items = ul_element.find_all('li')

# Extract text content from each list item
for item in list_items:
    item_text = item.get_text()
    print(item_text)`
}
        </code>
      </pre>
        

</p> <br />
<p>In this example, we first locate the outermost &lt;div&gt; with the class "content," then find the &lt;ul&gt; element within it, and finally, we extract the text content of the list items.</p>
</div>


<div class="content">
    <h1><strong>Recursive Parsing</strong></h1> <br />
      <p>When dealing with deeply nested structures, you can utilize Beautiful Soup's recursive parsing capabilities. The .find() and .find_all() methods can be applied to any level of the HTML tree, allowing you to search for elements within elements recursively.</p> <br />

      <p className="snippet">
      <pre>
        <code>
        {`# Find all <a> elements within the entire HTML structure
all_links = soup.find_all('a')
for link in all_links:
    link_text = link.get_text()
    print(link_text)`
}
        </code>
      </pre>

</p> <br />
<p>In this example, we search for all &lt;a&gt; elements within the entire HTML document, even if they are deeply nested.</p>
</div>



<div class="content">
    <h1><strong>Using CSS Selectors for Complex Structures</strong></h1> <br />
      <p>CSS selectors can simplify the process of navigating complex structures. They allow you to target elements based on their classes, IDs, or relationships with other elements. Here's an example:</p> <br />

      <p className="snippet">

      <pre>
        <code>
        {`# Using CSS selector to find all list items within the 'content' class
list_items = soup.select('.content ul li')
for item in list_items:
    item_text = item.get_text()
    print(item_text)`
}
        </code>
      </pre>

</p> <br />
<p>In this code, we use a CSS selector to locate all list items within the elements with the "content" class.</p>
</div>


<div class="content">
    <h1><strong>Extracting Data from Tables</strong></h1> <br />
      <p>Tables often have intricate structures, with rows and columns that need to be parsed. Here's an example of how to extract data from a table:</p> <br />

      <p className="snippet">
      <pre>
        <code>
        {`# Assuming you have a BeautifulSoup object 'soup' representing a page with a table
# Extract data from the table
table = soup.find('table')
for row in table.find_all('tr'):
    cells = row.find_all('td')
    for cell in cells:
        cell_text = cell.get_text()
        print(cell_text)`
}
        </code>
      </pre>
     
</p> <br />
<p>This code iterates through the rows and cells of the table, extracting the data cell by cell.</p>
</div>

<div class="content">
    <h1><strong>Handling Dynamic Content</strong></h1> <br />
    <p>Some web pages use JavaScript to load content dynamically after the initial page load. In such cases, Beautiful Soup alone may not be sufficient, and you may need to consider using additional tools like Selenium or asyncio to interact with the page and retrieve dynamically loaded data.</p> <br />
</div>

<div class="content">
    <h1><strong>Putting It All Together</strong></h1> <br />
      <p>Let's apply these concepts to a real-world example. Suppose you want to scrape data from a complex product catalog page with nested elements:</p> <br />

      <p className="snippet">
      <pre>
        <code>
        {`# Assuming you have a BeautifulSoup object 'soup' representing the product catalog page
# Extract product names and prices
product_divs = soup.find_all('div', class_='product')

for product_div in product_divs:
    product_name = product_div.find('h2').get_text()
    product_price = product_div.find('span', class_='price').get_text()

    print(f"Product Name: {product_name}")
    print(f"Product Price: {product_price}")
`
}
        </code>
      </pre>


</p> <br />
<p>In this example, we first locate all product &lt;div&gt; elements, and within each product, we find the product name and price even though they are nested.

</p>
</div>






    </div>
  );
};

export default HandleComplexHTML;