import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Main from "./pages/Main";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<ProtectedRoutes />} >
          <Route path="/user" element={<Dashboard />} />
        </Route>
        {/* <ProtectedRoutes path='/user' element={<Dashboard />} /> */}
      </Routes>
    </>
  );
}

export default App;
