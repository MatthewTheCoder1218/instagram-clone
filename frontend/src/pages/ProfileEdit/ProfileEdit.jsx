import React from "react";
import "./ProfileEdit.css";
import upload from "../../assets/upload.png";

const ProfileEdit = () => {
  return (
    <div className="profile-container">
      <label htmlFor="file-input" className="upload-button">
        <img src={upload} alt="Upload File" className="upload-img" />
      </label>
      <input type="file" id="file-input" style={{ display: "none" }} />
    </div>
  );
};

export default ProfileEdit;
