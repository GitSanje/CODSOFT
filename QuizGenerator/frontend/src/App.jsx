
import "./index.css";
import { Routes, Route } from "react-router-dom";
import LoginSignup from "./components/users/LoginSignup";
import Home from "./components/pages/Home";
import Layout from "./Layout";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="login" element={<LoginSignup mode="login" />} />
          <Route path="signup" element={<LoginSignup mode="signup" />} />
         
        </Route>
      </Routes>
    </>
  );
}

export default App;
