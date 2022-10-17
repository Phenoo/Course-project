import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Main from "./pages/Main";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/user" element={<Main />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/' element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
