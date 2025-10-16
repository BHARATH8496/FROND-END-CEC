import React from "react";
import profilepic from "../assets/ice cream - Copy.webp";
const ProfileCard = () => {
    return (
        <div style={{border: "1px solid black", width: "200px", padding: "10px", TextAlign: "center"}}>
            <img src={profilepic} alt="Profile" style={{width: "100px", borderRadius: "100px"}} />
            <h2>John Doe</h2>
            <p>Web Developer</p>
        </div>
    );
}
export default ProfileCard;