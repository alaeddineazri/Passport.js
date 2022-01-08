import './App.css';
import Navbar from './components/Navbar';
import Home from './page/Home';
import Login from './page/Login';
import Post from './page/Post';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { useEffect, useState } from "react";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((res) => {
          if (res.status === 200) return res.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  return (
    <BrowserRouter>
        <Navbar user={user} />
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="login" element={ user? <Navigate to="/" /> : <Login />}/>
          <Route  path="post/:id" element={user ? <Post /> : <Navigate to="/login" />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
