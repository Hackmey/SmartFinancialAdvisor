import React from "react";
import { Button } from "@mui/material";
import "./Sidebar.css";

export default function Sidebar({ tab, setTab }) {
  return (
    <div className="sidebar">
      <nav className="sidebar-links">
        <Button
          onClick={() => setTab("Profile")}
          variant={tab === "Profile" ? "contained" : "outlined"}
          color="primary"
          style={{ marginBottom: "20px" }}
          fullWidth
          sx={{
            backgroundColor: tab === "Profile" ? "#1e293b" : "#334155",
            color: "white",
            "&:hover": {
              backgroundColor: tab === "Profile" ? "#1e293b" : "#475569",
            },
            textTransform: "none",
            marginBottom: "8px",
          }}
        >
          Profile
        </Button>

        <Button
          onClick={() => setTab("Whatif")}
          variant={tab === "Whatif" ? "contained" : "outlined"}
          color="primary"
          fullWidth
          sx={{
            backgroundColor: tab === "Whatif" ? "#1e293b" : "#334155",
            color: "white",
            "&:hover": {
              backgroundColor: tab === "Whatif" ? "#1e293b" : "#475569",
            },
            textTransform: "none",
          }}
        >
          What-if
        </Button>
      </nav>
    </div>
  );
}
