import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home/Home";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import ServiceDetails from "./Pages/ServiceDetails/ServiceDetails";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Checkout from "./Pages/Checkout/Checkout/Checkout";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/service/:serviceId"
          element={<ServiceDetails></ServiceDetails>}
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
