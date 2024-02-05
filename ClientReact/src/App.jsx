import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Dashboard from "./Pages/Dashboard";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import NotFound from "./Pages/NotFound";
import Projects from "./Pages/Projects";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/SignIn" element={<Signin />} />
        <Route path="/SignUp" element={<Signup />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
