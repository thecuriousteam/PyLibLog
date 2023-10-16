import { Route, Routes, Outlet } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import AllApps from "./Python_Library_Pages/AllApps";

import PythonBasics from "./Python_Library_Pages/Python_Basics/Introduction-to-Python";
import NumpyBasics from "./Python_Library_Pages/Numpy/Intro-to-Numpy";
import PandasBasics from "./Python_Library_Pages/Pandas/Intro-to-Pandas";
import MatplotlibBasics from "./Python_Library_Pages/Matplotlib/Intro-to-Matplotlib";
import OperatorsBasics from "./Python_Library_Pages/Python_Basics/Intrduction-to-Operators";
import FunctionsBasics from "./Python_Library_Pages/Python_Basics/Introduction-to-Functions";

import PlayGround from "./Python/PlayGround";

import DjangoIntro from "./Python_Library_Pages/Django/Introduction-to-django";
import Installation from "./Python_Library_Pages/Django/Installation";

import TensorFlow from "./Python_Library_Pages/TensorFlow/Introduction-to-tensorFlow";
import Tensors from "./Python_Library_Pages/TensorFlow/Tensors";
import Variables from "./Python_Library_Pages/TensorFlow/Variables";
import Installation from "./Python_Library_Pages/TensorFlow/Installation";
const App = () => {
  return (
    <RootLayout>
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

        {/* django */}
        <Route path="/Django" element={<Outlet />}>
          <Route path="Introduction-to-django" element={<DjangoIntro />} />
          <Route path="Installation" element={<Installation />} />
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
        {/* remaing routes*/}
      </Routes>
    </RootLayout>
  );
};

export default App;
