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
        route: "Introduction-to-Python",
      },
      {
        title: "Introduction to Operators",
        route: "Introduction-to-Operators",
      },
      {
        title: "Introduction to Functions",
        route: "Introduction-to-Functions",
      },
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
        route: "Intro-to-Numpy",
      },
    ],
  },
  {
    name: "Pandas-Library",
    title: "3. Intro to Pandas",
    route: "/Pandas-Library/Intro-to-pandas",
    children: [
      {
        title: "Intro to pandas",
        route: "Intro-to-pandas",
      },
    ],
  },
  /* remaining contents*/
];
