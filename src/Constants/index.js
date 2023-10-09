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
    name: "Streamlit-Library",
    title: "4. Intro to Streamlit",
    children: [
      {
        title: "Intro to Streamlit",
        name: "Intro-to-Streamlit",
      }
    ],
  },
  /* remaining contents*/
];
