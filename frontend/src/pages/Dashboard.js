import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Dashboard.css'; // Assuming you have a CSS file for styling
import Sidebar from "../components/Sidebar";
import Profile from "./Profile";
import {Whatif} from "./Whatif";
import { Bot } from "../components/Bot";

export default function Dashboard() {
  const [tab, setTab] = useState("Profile");
  const navigate = useNavigate(); 

  const [userData, setUserData] = useState(localStorage.getItem("userData"));

  useEffect(() => {
    if (!userData) {
      navigate("/register");
    }
  }, [userData, navigate]);

  return (
    <>
    <div style={{ display: "flex" }}>
      <Sidebar tab={tab} setTab={setTab} />
      <div style={{ flex: 1, padding: "20px" }}>
        {tab === "Profile" && <Profile />}
        {tab === "Whatif" && <Whatif />}
      </div>
    </div>
    <Bot userData={userData}/>
    </>
  );
}
