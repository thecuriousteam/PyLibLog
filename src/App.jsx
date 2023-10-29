import { Route, Routes, Outlet } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import AllApps from "./Python_Library_Pages/AllApps";
import PythonBasics from "./Python_Library_Pages/Python_Basics/Introduction-to-Python";
import NumpyBasics from "./Python_Library_Pages/Numpy/Intro-to-Numpy";
import PandasBasics from "./Python_Library_Pages/Pandas/Intro-to-Pandas";
import StreamlitBasics from "./Python_Library_Pages/Streamlit/Intro-to-Streamlit";
import MatplotlibBasics from "./Python_Library_Pages/Matplotlib/Intro-to-Matplotlib";
import PandasBasics from "./Python_Library_Pages/Pandas/Intro-to-Pandas";
import OperatorsBasics from "./Python_Library_Pages/Python_Basics/Intrduction-to-Operators";
import FunctionsBasics from "./Python_Library_Pages/Python_Basics/Introduction-to-Functions";
import PlayGround from "./Python/PlayGround";

import Navbar from "./Components/Navbar";
import TensorFlow from "./Python_Library_Pages/TensorFlow/Introduction-to-tensorFlow";
import IntroAndInstall from "./Python_Library_Pages/Flask/Introduction-to-flask";


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
        

          {/* <Route index element={<Two />} />
          <Route path="Inbuilt-Functions" element={<Inbuilt />} />
          <Route path="Loops-in-Python" element={<User />} /> */}

        </Route>
        <Route path="Streamlit-Library" element={<Outlet />}>
        <Route path="Intro-to-Streamlit" element={<StreamlitBasics />} />

          <Route path="Intro-to-pandas" element={<PandasBasics />} />
        </Route>
        <Route path="Matplotlib-Library" element={<Outlet />}>
          <Route path="Intro-to-Matplotlib" element={<MatplotlibBasics />} />
        </Route>

        {/* TensorFlow  */}
        <Route path="/TensorFlow" element={<Outlet />}>
          <Route path="Introduction-to-tensorFlow" element={<TensorFlow />} />
        </Route>

        <Route path="/Flask" element={<Outlet />}>
          <Route path="Introduction-to-flask" element={<IntroAndInstall />} />
        </Route>

        {/* remaing routes*/}

      </Routes>
    </RootLayout>
  );
};

export default App;
