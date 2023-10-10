import { Route, Routes, Outlet } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import AllApps from "./Python_Library_Pages/AllApps";

import PythonBasics from "./Python_Library_Pages/Python_Basics/Introduction-to-Python";
import NumpyBasics from "./Python_Library_Pages/Numpy/Intro-to-Numpy";
import PandasBasics from "./Python_Library_Pages/Pandas/Intro-to-Pandas";
import BeautifulSoupBasics from "./Python_Library_Pages/BeautifulSoup/Intro-to-BeautifulSoup";
import GettingStartedBS from "./Python_Library_Pages/BeautifulSoup/Getting-Started-With-BS";
import BasicsBeautifulSoup from "./Python_Library_Pages/BeautifulSoup/Basics-of-BeautifulSoup";
import NavigatingHTMLTree from "./Python_Library_Pages/BeautifulSoup/Navigating-HTML-Tree";
import DataFromWebPages from "./Python_Library_Pages/BeautifulSoup/Extracting-Data-From-WebPage";
import HandleComplexHTML from "./Python_Library_Pages/BeautifulSoup/Handling-Complex-HTML";
import RealWorldExamples from "./Python_Library_Pages/BeautifulSoup/Real-World-Examples";
import AdvanceWebScrapping from "./Python_Library_Pages/BeautifulSoup/Advance-Web-Scrapping";

import PlayGround from "./Python/PlayGround";

const App = () => {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<AllApps />} />

        <Route path="/play-ground" element={<PlayGround />} />

        <Route path="/Python-Basics" element={<Outlet />}>
          <Route path="Introduction-to-Python" element={<PythonBasics />} />
        </Route>
        <Route path="/NumPy-Library" element={<Outlet />}>
        <Route path="Intro-to-Numpy" element={<NumpyBasics />} />
          {/* if we have child element we need added here */}
          {/* <Route index element={<Two />} />I
          <Route path="Introduction-to-Conditions" element={<Five />} />
          <Route path="Loops-in-Python" element={<Six />} />
          <Route path="While-Loop-in-Python" element={<Seven />} /> */}
        </Route>
        <Route path="Pandas-Library" element={<Outlet />}>
        <Route path="Intro-to-pandas" element={<PandasBasics />} />
          {/* <Route index element={<Two />} />
          <Route path="Inbuilt-Functions" element={<Inbuilt />} />
          <Route path="Loops-in-Python" element={<User />} /> */}
        </Route>

        <Route path="BeautifulSoup-Library" element={<Outlet />}>
          <Route path="Intro-to-BeautifulSoup" element={<BeautifulSoupBasics />} />
          <Route path="Getting-Started-With-BS" element={<GettingStartedBS />} />
          <Route path="Basics-of-BeautifulSoup" element={<BasicsBeautifulSoup />} />
          <Route path="Navigating-HTML-Tree" element={<NavigatingHTMLTree />} />
          <Route path="Extracting-Data-From-WebPage" element={<DataFromWebPages />} />
          <Route path="Handling-Complex-HTML" element={<HandleComplexHTML />} />
          <Route path="Advance-Web-Scrapping" element={<AdvanceWebScrapping />} />
          <Route path="Real-World-Examples" element={<RealWorldExamples />} />
          {/* if we have child element we need added here */}
          {/* <Route index element={<Two />} />I
          <Route path="Introduction-to-Conditions" element={<Five />} />
          <Route path="Loops-in-Python" element={<Six />} />
          <Route path="While-Loop-in-Python" element={<Seven />} /> */}
        </Route>


        {/* remaing routes*/}


      </Routes>
    </RootLayout>
  );
};

export default App;
