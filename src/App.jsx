import { Route, Routes, Navigate } from "react-router-dom";
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";
import { useSelector } from "react-redux";
import { Main } from "./components/Main";
import "./App.scss";

function App() {
  const userAuthentication = useSelector((state) => state.auth.token);

  return (
    <Routes>
      {userAuthentication && <Route path="/" element={<Main />} />}
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Navigate replace to="login" />} />

      <Route path="*" element={<h1>Page not found</h1>} /> 
    </Routes>
  );
}

export default App;
