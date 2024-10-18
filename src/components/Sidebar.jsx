import React from "react";
import { mindpath } from '../assets'; 
import { Link, useLocation } from "react-router-dom";
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
            <Link to="/LoginPage" className="font-poppins">Logout</Link>
          </ListItem>
        </List>
      </div>
    </Card>
  );
};

export default Sidebar;
