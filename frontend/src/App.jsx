import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import ProfileEdit from "./pages/ProfileEdit/ProfileEdit";
import UserProfile from "./pages/UserProfile/UserProfile";
import Feed from "./pages/Feed/Feed";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile-edit" element={<ProfileEdit />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </Router>
  );
};

export default App;
