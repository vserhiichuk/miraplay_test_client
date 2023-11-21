import { Route, Routes, Navigate } from "react-router-dom";
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";
import { useSelector } from "react-redux";
import { Main } from "./components/Main";
import "./App.scss";

function App() {
  const user = useSelector((state) => state.auth.token);

  return (
    <Routes>
      {user && <Route path="/miraplay_test_client/" element={<Main />} />}
      <Route path="/miraplay_test_client/signup" element={<Signup />} />
      <Route path="/miraplay_test_client/login" element={<Login />} />
      <Route path="/miraplay_test_client/" element={<Navigate replace to="login" />} />
    </Routes>
  );
}

export default App;
