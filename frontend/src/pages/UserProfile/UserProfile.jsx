import React from "react";
import profile from "../../assets/profile.png";
import "./UserProfile.css";
import { Link } from "react-router-dom";

const UserProfile = () => {
  return (
    <div>
      <div className="top">
        <i className="fa-solid fa-arrow-left"></i>{" "}
        <Link to="/feed" className="link">
          My Profile
        </Link>
      </div>
      <div className="profile-desc">
        <img src={profile} alt="" />
        <div className="name">Andrew Alvarado</div>
        <div className="desc">I am a UI/UX developer staying in London UK</div>
      </div>
    </div>
  );
};

export default UserProfile;
