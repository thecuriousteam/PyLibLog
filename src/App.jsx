import { Route, Routes, Outlet } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import AllApps from "./Python_Library_Pages/AllApps";

import PythonBasics from "./Python_Library_Pages/Python_Basics/Introduction-to-Python";

const App = () => {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<AllApps />} />

        <Route path="/Python-Basics" element={<PythonBasics />}>
          <Route path="Introduction-to-Python" element={<PythonBasics />} />
        </Route>
        <Route path="/Conditions-and-Loops" element={<Outlet />}>
          {/* <Route index element={<Two />} />
          <Route path="Introduction-to-Conditions" element={<Five />} />
          <Route path="Loops-in-Python" element={<Six />} />
          <Route path="While-Loop-in-Python" element={<Seven />} /> */}
        </Route>
        <Route path="/Functions" element={<Outlet />}>
          {/* <Route index element={<Two />} />
          <Route path="Inbuilt-Functions" element={<Inbuilt />} />
          <Route path="Loops-in-Python" element={<User />} /> */}
        </Route>
        {/* remaing routes*/}
      </Routes>
    </RootLayout>
  );
};

export default App;
