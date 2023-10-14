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
      <pre>
        <code>
        {`# Assuming you have a BeautifulSoup object 'soup' representing an HTML document
# Access the first <p> tag
first_paragraph = soup.p
print(first_paragraph)

# Access the first <a> tag
first_link = soup.a
print(first_link)`
}
        </code>
      </pre>
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
      <pre>
        <code>
        {`# Access the 'href' attribute of the <a> tag
link_href = first_link['href']
print(link_href)`
}
        </code>
      </pre>
    </p>
    </div>

    <div class="content">
      <h1>Accessing Element Attributes</h1> <br />
      <p>You can also access attributes of an element, such as its href attribute for links:</p>
    </div>

    <div className="content">
      <p className="snippet">
      <pre>
        <code>
        {`# Access the 'href' attribute of the <a> tag
link_href = first_link['href']
print(link_href)`
}
        </code>
      </pre>
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
      <pre>
        <code>
        {`# Access all child elements of a parent element
parent_element = soup.div  # Assuming you have a parent <div> element
children = parent_element.contents
for child in children:
    print(child)`
}
        </code>
      </pre>
    </p>
    </div>

    <div class="content">
      <h1>Accessing Parent Elements</h1> <br />
      <p>To access the parent of an element, you can use the .parent property:</p>
    </div>

    <div className="content">
      <p className="snippet">
      <pre>
        <code>
        {`# Access the parent of an element
element = soup.p  # Assuming you have a <p> element
parent = element.parent
print(parent)
`
}
        </code>
      </pre>
    </p>
    </div>


    <div class="content">
      <h1>Accessing Sibling Elements</h1> <br />
      <p>You can access sibling elements (elements that share the same parent) using properties like .next_sibling and .previous_sibling:</p>
    </div>


    <div className="content">
      <p className="snippet">
      <pre>
        <code>
        {`# Access the next sibling of an element
next_sibling = element.next_sibling

# Access the previous sibling of an element
previous_sibling = element.previous_sibling
`
}
        </code>
      </pre>
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
      <pre>
        <code>
        {`# Find the first <h2> element with a class of 'title'
title_element = soup.find('h2', class_='title')
print(title_element)

# Find all <a> elements with a class of 'link'
link_elements = soup.find_all('a', class_='link')
for link in link_elements:
    print(link)`
}
        </code>
      </pre>
      
    </p>
    </div>

    <div class="content">
      <h1><strong>Using CSS Selectors</strong></h1> <br />
      <p>Beautiful Soup also allows you to use CSS selectors to find elements. This can be particularly helpful when you want to find elements based on their classes, IDs, or other attributes.</p>
      </div>


      <div className="content">
      <p className="snippet">
      <pre>
        <code>
        {`# Find all elements with the class 'highlight'
highlighted_elements = soup.select('.highlight')
for element in highlighted_elements:
    print(element)`
}
        </code>
      </pre>
    </p>
    </div>


    <div class="content">
      <h1><strong>Putting It All Together</strong></h1> <br />
      <p>Let's walk through a practical example. Suppose you want to scrape the titles and links of articles from a blog page.</p>
    </div>


      <div className="content">
      <p className="snippet">
      <pre>
        <code>
        {`# Assuming you have a BeautifulSoup object 'soup' representing the blog page
# Find all <a> tags within a specific <div> with the class 'article'
article_div = soup.find('div', class_='article')
article_links = article_div.find_all('a', class_='article-link')

# Extract and print article titles and links
for link in article_links:
    title = link.string
    href = link['href']
    print(f"Title: {title}\nLink: {href}\n")
`
}
        </code>
      </pre>
    </p>
    </div>

    <div class="content">
      <p>In this example, we first locate the div element containing articles, then find all the article links within it. Finally, we extract the titles and links and print them.</p>
    </div>



    </div>
  );
};

export default NavigatingHTMLTree;