import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Dashboard from "./Pages/Dashboard";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import NotFound from "./Pages/NotFound";
import Projects from "./Pages/Projects";
import Header from "./Components/Header";
import FooterCom from "./Components/Footer";
import PrivateRoute from "./Components/PrivateRoute";
import OnlyAdminPrivateRoute from "./Components/OnlyAdminPrivateRoute";
import CreatePost from "./Pages/CreatePost";
import UpdatePost from "./Pages/UpdatePost";
import PostPage from "./Pages/PostPage";
import ScrollToTop from "./Components/ScrollToTop";
import Search from "./Pages/Search";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route element={<PrivateRoute />}>
          <Route path="/Dashboard" element={<Dashboard />} />
        </Route>

        <Route path="/SignIn" element={<Signin />} />
        <Route path="/SignUp" element={<Signup />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/search" element={<Search />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:postId" element={<UpdatePost />} />
        </Route>

        <Route path="/post/:postSlug" element={<PostPage />} />
      </Routes>
      <FooterCom />
    </>
  );
}

export default App;
