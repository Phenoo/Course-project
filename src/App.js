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
        <Route exact path='/user' element={<ProtectedRoutes><Dashboard /></ProtectedRoutes>} />
      </Routes>
    </>
  );
}

export default App;
