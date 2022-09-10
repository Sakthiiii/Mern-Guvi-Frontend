import React from "react";
import "./App1.css";
import { useEffect } from "react";


import Navbar from "./Component/layout/Navbar";
import Notfount from "./Component/Notfound";
import  Dashboard from "./Component/Dashboard";

import setAuthToken from "./utils/setAuthToken";
import store from "./Store";
import { loadUser } from "./actions/auth";
import Landing from "./Component/layout/landing";
import { BrowserRouter , Route, Router, Routes ,Link} from "react-router-dom";
import Register from "./Component/auth/Register";
import Login from "./Component/auth/Login";


if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App2 = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
//
  return (
    <>
      <div className="App">
      <BrowserRouter>
          <Navbar/>
         
            <Routes>
              <Route exact path="/" element={<Landing />} />
              <Route exact path="/dashboard" element={<Dashboard />} />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="" element={<Notfount />} />
             
              
               
            </Routes>
        </BrowserRouter>
 
      </div>
    </>
  );
};

export default App2;
