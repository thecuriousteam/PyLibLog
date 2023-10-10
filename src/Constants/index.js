// important 
// guys must name route value equal to same as what you give the route in App.jsx

export const subMenusList = [
  {
    name: "Python-Basics",
    title: "1. Python Basics",
    route: "/Python-Basics/Introduction-to-Python",
    children: [
      {
        title: "Introduction to Python",
        name: "Introduction-to-Python",
      }
    ],
  },
  {
    name: "NumPy-Library",
    title: "2. NumPy",
    route: "/NumPy-Library/Intro-to-Numpy",
    children: [
      {
        // List of Pages 
        title: "Intro to Numpy", 
        name: "Intro-to-Numpy",
        
      }
    ],
  },
  {
    name: "Pandas-Library",
    title: "3. Intro to Pandas",
    route: "/Pandas-Library/Intro-to-pandas",
    children: [
      {
        title: "Intro to pandas",
        name: "Intro-to-pandas",
      }
    ],
  },
  {
    name: "BeautifulSoup-Library",
    title: "4. BeautifulSoup Library",
    children: [
      {
        title: "Intro to BeautifulSoup",
        name: "Intro-to-BeautifulSoup",
      },
      {
        title: "Getting Started With BeautifulSoup",
        name: "Getting-Started-With-BS",
      },
      {
        title: "Basics of BeautifulSoup",
        name: "Basics-of-BeautifulSoup",
      },
      {
        title: "Navigating The HTML Tree",
        name: "Navigating-HTML-Tree",
      },
      {
        title: "Extracting Data From Web-Pages",
        name: "Extracting-Data-From-WebPage",
      },
      {
        title: "Handling Complex HTML Structures",
        name: "Handling-Complex-HTML",
      },
      {
        title: "Real-World Examples and Case Studies",
        name: "ReaL-World-Examples",
      },
      {
        title: "Advanced Web Scraping Techniques",
        name: "Advance-Web-Scrapping",
      }
    ],
  },

  /* remaining contents*/
];
