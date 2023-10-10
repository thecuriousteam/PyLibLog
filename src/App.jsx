import { Route, Routes, Outlet } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import AllApps from "./Python_Library_Pages/AllApps";

import PythonBasics from "./Python_Library_Pages/Python_Basics/Introduction-to-Python";
import NumpyBasics from "./Python_Library_Pages/Numpy/Intro-to-Numpy";
import PandasBasics from "./Python_Library_Pages/Pandas/Intro-to-Pandas";
import MatplotlibBasics from "./Python_Library_Pages/Matplotlib/Intro-to-Matplotlib";

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
        <Route path="Matplotlib-Library" element={<Outlet/>}>
          <Route path="Intro-to-Matplotlib" element={<MatplotlibBasics/>}/>
        </Route>
        {/* remaing routes*/}
      </Routes>
    </RootLayout>
  );
};

export default App;
