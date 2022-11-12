import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Molecules/Navbar/Navbar";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import ShopRegister from "./Pages/ShopRegistration/ShopRegister";
import Profile from "./Pages/Profile/Profile";
import Dashboard from "./Pages/Dashboard/Dashboard";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact element={<Home />} path="/"></Route>
          <Route exact element={<Login />} path="/login"></Route>
          <Route exact element={<Signup />} path="/signup"></Route>
          <Route exact element={<About />} path="/about"></Route>
          <Route exact element={<Contact />} path="/contact"></Route>
          <Route exact element={<Profile />} path="/profile"></Route>
          <Route exact element={<Dashboard />} path="/dashboard"></Route>
          <Route
            exact
            element={<ShopRegister />}
            path="/shopRegistration"
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
