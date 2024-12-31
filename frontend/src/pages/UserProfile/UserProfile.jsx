import React from "react";
import profile from "../../assets/profile.png";
import "./UserProfile.css";
import { Link, useNavigate } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="high-top">
        <div className="top">
          <div className="right">
            <i className="fa-solid fa-arrow-left"></i>{" "}
            <Link to="/feed" className="link">
              My Profile
            </Link>
          </div>
          <div className="left">
            <i
              class="fa-solid fa-arrow-right-from-bracket"
              onClick={() => {
                navigate("/login");
              }}
            ></i>
          </div>
        </div>
        <div className="profile-desc">
          <img src={profile} alt="" />
          <div className="name">Andrew Alvarado</div>
          <div className="desc">
            I am a UI/UX developer staying in London UK and I'm ready to work
          </div>

          <div className="stats">
            <div className="followers">
              <p className="head">Followers</p> <h4>88</h4>
            </div>
            <div className="following">
              <p className="head">Following</p> <h4>10</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
