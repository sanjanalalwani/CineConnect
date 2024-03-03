import "./app.scss";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";
import ComNavbar from "./components/comnavbar/ComNavbar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import ComHome from "./pages/comhome/ComHome";
import Profile from "./pages/profile/Profile";
import "./style.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";

const App = () => {
  const {currentUser} = useContext(AuthContext);
  // check the above on the basis of netflix wala app
  const {darkMode} = useContext(DarkModeContext);
console.log(darkMode);
const Layout = () =>{
  return(
    <div className={`theme-${darkMode ? "dark" : "light"}`}>
      <ComNavbar />
      <div style={{display:"flex"}}>
<LeftBar />
<div style={{flex:6}}>
<Outlet />
<ComHome />
</div>

<RightBar />
      </div>
    </div>
  )
}


  const user = true;
  return (
    <Router>
      <Routes>
        <Route path="/community" element={<Layout />} />
        <Route path="/comhome" element={<ComHome />} />
        <Route path="/profile/:id" element={<Profile />} />

        <Route
          exact
          path="/"
          element={user ? <Home /> : <Navigate to="/register" />}
        />
        <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />}
 />
        <Route path="/login" element={!user ? <Login /> : <Navigate to ="/"/>} />
        { user && (
          <>
        <Route path="/movies" element={<Home type="movies" />} />
        <Route path="/series" element={<Home type="series" />} />
        <Route path="/watch" element={<Watch />} />
        </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
