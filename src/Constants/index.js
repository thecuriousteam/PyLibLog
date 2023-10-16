// important
// guys must name route value equal to same as what you give the route in App.jsx

export const subMenusList = [
  {
    name: "Python-Basics",
    title: "Python Basics",
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
    title: "NumPy",
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
    title: "Pandas",
    route: "/Pandas-Library/Intro-to-pandas",
    children: [
      {
        title: "Intro to pandas",
        route: "Intro-to-pandas",
      },
    ],
  },
  {
    name: "TensorFlow",
    title: "TensorFlow",
    route: "/TensorFlow/Introduction-to-tensorFlow",
    children: [
      {
        title: "Installation",
        route: "Installation",
      },
      {
        title: "Introduction to TensorFlow",
        route: "Introduction-to-TensorFlow",
      },
      {
        title: "Introduction to Tensors",
        route: "Introduction-to-Tensors",
      },
      {
        title: "Introduction to Variables",
        route: "Introduction-to-Variables",
      },
    ],
  }
  /* remaining contents*/
];
