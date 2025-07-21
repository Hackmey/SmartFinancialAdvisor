import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Chatbot from "react-chatbot-kit";

const Layout = ({userData, setUserData}) => {
  return <>
    <CssBaseline />
    <Navbar userData={userData} setUserData={setUserData}/>
    <Outlet />
    
  </>;
};

export default Layout;