import {
    Routes as WrapperRoutes,
    Route,
    BrowserRouter,
  } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/SignUp"
import Home from "./pages/Home"
  
  
  export default function Routes() {
    return (
      <BrowserRouter>
        <WrapperRoutes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </WrapperRoutes>
      </BrowserRouter>
    );
  }