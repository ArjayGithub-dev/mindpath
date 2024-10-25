import React, {useState, useEffect} from "react";
import { auth } from "../firebase";
import { mindpath } from '../assets'; 
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  Cog6ToothIcon,
  PowerIcon,
  UserGroupIcon,
  HandRaisedIcon,
} from "@heroicons/react/24/solid";

const Sidebar = () => {
  const navigate = useNavigate(); // Using useNavigate to programmatically navigate
  
  async function handleLogout() {
    localStorage.removeItem('authUser');
    const authChannel = new BroadcastChannel('authChannel');
    authChannel.postMessage('logout'); // Notify other tabs to log out
    // Redirect to the login page
    try {
      await auth.signOut();
      navigate("/LoginPage"); // Programmatically navigate to LoginPage after logout
      console.log("User logged out successfully");
    } catch (error) {
      console.log("Error logging out: ", error.message);
    }
  }

  return (
    <Card className="h-[calc(100vh)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 flex flex-col justify-between">
      {/* Logo */}
      <div className="mb-2 p-4">
        <img
          src={mindpath}
          alt="MindPath"
          className="w-[150px] h-[49px] object-contain"
        />
      </div>

      {/* Main List Items */}
      <div className="flex-1">
        <List>
          <ListItem>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Link to="/Dashboard" className="font-poppins">Dashboard</Link>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <ShoppingBagIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Link to="/Appointment" className="font-poppins">Appointments</Link>
            <ListItemSuffix>
              <Chip value="18" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
            </ListItemSuffix>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <HandRaisedIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Link to="/ServiceProviders" className="font-poppins">Service Providers</Link>
            <ListItemSuffix>
              <Chip value="50" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
            </ListItemSuffix>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <UserGroupIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Link to="/Administrators" className="font-poppins">Administrators</Link>
            <ListItemSuffix>
              <Chip value="1" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
            </ListItemSuffix>
          </ListItem>
        </List>
      </div>

      <div className="pb-4">
        <List>
          <ListItem>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Link to="/Settings" className="font-poppins">Settings</Link>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
           <Link className="font-poppins" onClick={handleLogout}>Logout</Link>
          </ListItem>
        </List>
      </div>
    </Card>
  );
};

export default Sidebar;
