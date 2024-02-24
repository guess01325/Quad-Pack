import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";

import Layout from "./layouts/Layout";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import MainContainer from "./containers/MainContainer";
import Events from "./screens/Events";
import LuggageContainer from "./containers/LuggageContainer";
import EventLugage from "./screens/EventLuggage"

import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
} from "./services/auth";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();
  console.log(currentUser);

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    // navigate("/events");
  };

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    // navigate("/events");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
    // navigate("/sign-in");
  };

  return (
    <div className="App">
      <h1 className="title">The Quad Pack</h1>
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Routes>
          <Route path="/" element={<MainContainer />}>
            </Route>
        <Route path="/events/" element={<Events/>}/>

      <Route path="/luggage" element={<LuggageContainer/>}>
        
      <Route path=":eventId/luggages" element={<EventLugage/>}/>
        
        </Route> 


            <Route
              path="/sign-in"
              element={<SignIn handleLogin={handleLogin} />}
            />

            <Route path="/sign-up" element={<SignUp handleRegister={handleRegister}/>}>
            </Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
