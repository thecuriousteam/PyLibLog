import { Route, Routes, Outlet } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import AllApps from "./Python_Library_Pages/AllApps";

import PythonBasics from "./Python_Library_Pages/Python_Basics/Introduction-to-Python";
import NumpyBasics from "./Python_Library_Pages/Numpy/Intro-to-Numpy";
import MatplotlibBasics from "./Python_Library_Pages/Matplotlib/Intro-to-Matplotlib";
import BeautifulSoupBasics from "./Python_Library_Pages/BeautifulSoup/Intro-to-BeautifulSoup";
import GettingStartedBS from "./Python_Library_Pages/BeautifulSoup/Getting-Started-With-BS";
import BasicsBeautifulSoup from "./Python_Library_Pages/BeautifulSoup/Basics-of-BeautifulSoup";
import NavigatingHTMLTree from "./Python_Library_Pages/BeautifulSoup/Navigating-HTML-Tree";
import DataFromWebPages from "./Python_Library_Pages/BeautifulSoup/Extracting-Data-From-WebPage";
import HandleComplexHTML from "./Python_Library_Pages/BeautifulSoup/Handling-Complex-HTML";
import RealWorldExamples from "./Python_Library_Pages/BeautifulSoup/Real-World-Examples";
import AdvanceWebScrapping from "./Python_Library_Pages/BeautifulSoup/Advance-Web-Scrapping";
import OperatorsBasics from "./Python_Library_Pages/Python_Basics/Intrduction-to-Operators";
import FunctionsBasics from "./Python_Library_Pages/Python_Basics/Introduction-to-Functions";
import PandasBasics from "./Python_Library_Pages/Pandas/Intro-to-Pandas";
import OperatorsBasics from "./Python_Library_Pages/Python_Basics/Intrduction-to-Operators";
import FunctionsBasics from "./Python_Library_Pages/Python_Basics/Introduction-to-Functions";

import PlayGround from "./Python/PlayGround";

import Navbar from "./Components/Navbar";
import TensorFlow from "./Python_Library_Pages/TensorFlow/Introduction-to-tensorFlow";
import IntroAndInstall from "./Python_Library_Pages/Flask/Introduction-to-flask";
import PYQT from "./Python_Library_Pages/PYQT/Introduction-to-PYQT";
import TkinterIntro from "./Python_Library_Pages/Tkinter/Introduction-to-tkinter";
import Seaborn from "./Python_Library_Pages/Seaborn/Introduction-to-Seaborn";


const App = () => {
  return (
    <RootLayout>
      <Navbar />
      <Routes>
        <Route path="/" element={<AllApps />} />

        <Route path="/play-ground" element={<PlayGround />} />

        <Route path="/Python-Basics" element={<Outlet />}>
          <Route path="Introduction-to-Python" element={<PythonBasics />} />
          <Route
            path="Introduction-to-Operators"
            element={<OperatorsBasics />}
          />
          <Route
            path="Introduction-to-Functions"
            element={<FunctionsBasics />}
          />
        </Route>
        <Route path="/NumPy-Library" element={<Outlet />}>
          <Route path="Intro-to-Numpy" element={<NumpyBasics />} />
          {/* if we have child element we need added here */}
        </Route>
        <Route path="Pandas-Library" element={<Outlet />}>
          <Route path="Intro-to-pandas" element={<PandasBasics />} />
        </Route>
        <Route path="Matplotlib-Library" element={<Outlet />}>
          <Route path="Intro-to-Matplotlib" element={<MatplotlibBasics />} />
        </Route>

         <Route path="BeautifulSoup-Library" element={<Outlet />}>
              <Route 
                path="Intro-to-BeautifulSoup" 
                element={<BeautifulSoupBasics />} 
              />
              <Route 
                path="Getting-Started-With-BS" 
                element={<GettingStartedBS />} 
              />
              <Route 
                path="Basics-of-BeautifulSoup" 
                element={<BasicsBeautifulSoup />} 
              />
              <Route 
                path="Navigating-HTML-Tree" 
                element={<NavigatingHTMLTree />} 
              />
              <Route 
                path="Extracting-Data-From-WebPage" 
                element={<DataFromWebPages />}
              />
              <Route 
              path="Handling-Complex-HTML" 
              element={<HandleComplexHTML />} 
             />
             <Route 
              path="Advance-Web-Scrapping" 
              element={<AdvanceWebScrapping />} 
             />
             <Route 
              path="Real-World-Examples" 
              element={<RealWorldExamples />} 
             />

        {/* Seaborn  */}
        <Route path="/Seaborn" element={<Outlet />}>
          <Route path="Introduction-to-seaborn" element={<Seaborn />} />
        </Route>


        {/* TensorFlow  */}
        <Route path="/TensorFlow" element={<Outlet />}>
          <Route path="Introduction-to-tensorFlow" element={<TensorFlow />} />
          <Route path="Installation" element={<Installation />}/>
          <Route
            path="Introduction-to-Tensors"
            element={<Tensors />}
          />
          <Route path="Introduction-to-Variables" element={<Variables />} />
        </Route>

        <Route path="/Flask" element={<Outlet />}>
          <Route path="Introduction-to-flask" element={<IntroAndInstall />} />
        </Route>
        <Route path="/PYQT" element={<Outlet />}>
          <Route path="Introduction-to-PYQT" element={<PYQT />} />
        </Route>
        <Route path="/Tkinter" element={<Outlet />}>
          <Route path="Introduction-to-tkinter" element = {<TkinterIntro />} />
        </Route>
        {/* remaing routes*/}

      </Routes>
    </RootLayout>
  );
};

export default App;
