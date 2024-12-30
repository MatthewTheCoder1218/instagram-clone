import React from "react";
import "./ProfileEdit.css";
import upload from "../../assets/upload.png";

const ProfileEdit = () => {
  return (
    <div className="profile-container">
      <div>
        <label htmlFor="file-input" className="upload-button">
          <img src={upload} alt="Upload File" className="upload-img" />
        </label>
        <input type="file" id="file-input" style={{ display: "none" }} />
      </div>

      <div className="profile-details">
        <input type="text" placeholder="Username" />
        <textarea rows="10" cols="`1000" placeholder="Bio" />
        <button type="submit">Save</button>
      </div>
    </div>
  );
};

export default ProfileEdit;
