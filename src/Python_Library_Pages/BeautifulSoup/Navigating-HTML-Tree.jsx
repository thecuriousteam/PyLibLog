import React from "react";

const NavigatingHTMLTree = () => {
  return (
    <div>
      <h1><strong>Navigating the HTML Tree with Beautiful Soup</strong></h1>
      
      <div class="content">
      <p>Navigating the HTML tree is a fundamental skill when web scraping with Beautiful Soup. Understanding how to move through the structure of a web page's HTML is essential for accessing the specific elements you want. In this section, we'll explore various techniques for navigating the HTML tree. </p>
      </div>

      <div class="content">
      <h1><strong>Basic Navigation</strong></h1> <br /><br />
      <h1>Accessing Elements by Tag Name</h1>
      </div>

      <div class="content">
      <p>One of the simplest ways to navigate the HTML tree is by accessing elements using their tag names. Here's how you can do it: </p>
      </div>

      <div className="content">
      <p className="snippet">
      # Assuming you have a BeautifulSoup object 'soup' representing an HTML document <br />
      # Access the first &lt;p&gt; tag <br />
      first_paragraph = soup.p <br />
      print(first_paragraph) <br />
      # Access the first &lt;a&gt; tag <br />
      first_link = soup.a <br /> 
      print(first_link) <br />
    </p>
    </div>

    <div class="content">
      <p>In the examples above, soup.p retrieves the first &lt;p&gt; tag, and soup.a retrieves the first &lt;a&gt; tag found in the HTML document.</p>
    </div>

    <div class="content">
      <h1>Accessing the Text Inside Elements</h1> <br />
      <p>Once you have an element, you can extract the text inside it using the .string property:</p>
    </div>

    <div className="content">
      <p className="snippet">
        # Extract the text inside the &lt;p&gt; tag <br />
        paragraph_text = first_paragraph.string <br />
        print(paragraph_text) <br />
        # Extract the text inside the &lt;a&gt; tag <br />
        link_text = first_link.string <br />
        print(link_text) <br />
    </p>
    </div>

    <div class="content">
      <h1>Accessing Element Attributes</h1> <br />
      <p>You can also access attributes of an element, such as its href attribute for links:</p>
    </div>

    <div className="content">
      <p className="snippet">
      # Access the 'href' attribute of the &lt;a&gt; tag <br />
      link_href = first_link['href'] <br />
      print(link_href) <br />
    </p>
    </div>


    <div class="content">
      <h1><strong>Navigating Hierarchically</strong></h1> <br />
      <p>HTML documents are often hierarchical, with elements nested within other elements. You can navigate this hierarchy by accessing child, parent, and sibling elements.</p>
      <br />
      <h1>Accessing Child Elements</h1> <br />
      <p>To access the children of an element, you can use the .contents property, which returns a list of all the child elements:</p>
    </div>

    <div className="content">
      <p className="snippet">
      # Access all child elements of a parent element <br />
      parent_element = soup.div  # Assuming you have a parent &lt;div&gt; element <br />
      children = parent_element.contents <br />
      for child in children: <br />
      print(child) <br />
    </p>
    </div>

    <div class="content">
      <h1>Accessing Parent Elements</h1> <br />
      <p>To access the parent of an element, you can use the .parent property:</p>
    </div>

    <div className="content">
      <p className="snippet">
      # Access the parent of an element <br />
      element = soup.p  # Assuming you have a &lt;p&gt; element <br />
        parent = element.parent <br />
        print(parent) <br />
    </p>
    </div>


    <div class="content">
      <h1>Accessing Sibling Elements</h1> <br />
      <p>You can access sibling elements (elements that share the same parent) using properties like .next_sibling and .previous_sibling:</p>
    </div>


    <div className="content">
      <p className="snippet">
        # Access the next sibling of an element <br />
        next_sibling = element.next_sibling <br />
        # Access the previous sibling of an element <br />
        previous_sibling = element.previous_sibling <br />
    </p>
    </div>


    <div class="content">
      <h1><strong>Using find() and find_all()</strong></h1> <br /><br />
      <p>Beautiful Soup provides the find() and find_all() methods to search for specific elements within the HTML tree based on various criteria.</p> <br />
      <p>find(tag, attributes) finds the first element with the specified tag and optional attributes.</p>
      <p>find_all(tag, attributes) finds all elements with the specified tag and optional attributes and returns them as a list.</p>
      </div>

      <div className="content">
      <p className="snippet">
      # Find the first &lt;h2&gt; element with a class of 'title' <br />
        title_element = soup.find('h2', class_='title') <br />
        print(title_element) <br />
        # Find all &lt;a&gt; elements with a class of 'link' <br />
          link_elements = soup.find_all('a', class_='link') <br />
          for link in link_elements: <br />
          print(link) <br />
    </p>
    </div>

    <div class="content">
      <h1><strong>Using CSS Selectors</strong></h1> <br />
      <p>Beautiful Soup also allows you to use CSS selectors to find elements. This can be particularly helpful when you want to find elements based on their classes, IDs, or other attributes.</p>
      </div>


      <div className="content">
      <p className="snippet">
      # Find all elements with the class 'highlight' <br />
      highlighted_elements = soup.select('.highlight') <br />
      for element in highlighted_elements: <br />
      print(element) <br />
    </p>
    </div>


    <div class="content">
      <h1><strong>Putting It All Together</strong></h1> <br />
      <p>Let's walk through a practical example. Suppose you want to scrape the titles and links of articles from a blog page.</p>
    </div>


      <div className="content">
      <p className="snippet">
      # Assuming you have a BeautifulSoup object 'soup' representing the blog page <br />
      # Find all &lt;a&gt; tags within a specific &lt;div&gt; with the class 'article' <br />
        article_div = soup.find('div', class_='article') <br />
        article_links = article_div.find_all('a', class_='article-link') <br />
        # Extract and print article titles and links <br />
        for link in article_links: <br />
        title = link.string <br />
        href = link['href'] <br />
        print(f"Title: &#123;title&#125;\nLink: &#123;href&#125;\n") <br />
    </p>
    </div>

    <div class="content">
      <p>In this example, we first locate the div element containing articles, then find all the article links within it. Finally, we extract the titles and links and print them.</p>
    </div>



    </div>
  );
};

export default NavigatingHTMLTree;