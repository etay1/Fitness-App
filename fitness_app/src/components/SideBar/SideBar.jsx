import React, { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TimelineIcon from '@mui/icons-material/Timeline';
import { supabase } from "../../supabase/client";
import styles from "./SideBar.modules.css";

const Item = ({ title, to, icon, selected, setSelected }) => {
  var style = getComputedStyle(document.body);

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: style.getPropertyValue("--black-color"),
      }}
      onClick={title === "Sign Out" ? () => supabase.auth.signOut() : () => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = ({ supabase }) => {
  var style = getComputedStyle(document.body);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box>
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="circle">
          <MenuItem
            className="menu-burger-button"
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: style.getPropertyValue("--black-color"),
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              className="sidebar-typography"
              variant="h6"
              color={style.getPropertyValue("--light-grey-color")}
            >
              Data
            </Typography>
            <Item
              title="Users"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Sessions"
              icon={<SportsGymnasticsIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Workouts"
              icon={<FitnessCenterIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              className="sidebar-typography"
              variant="h6"
              color={style.getPropertyValue("--light-grey-color")}
            >
              Pages
            </Typography>
            <Item
              title="Add Session"
              icon={<AddIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="View Exercises"
              icon={<VisibilityIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Fitness Blog"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              className="sidebar-typography"
              variant="h6"
              color={style.getPropertyValue("--light-grey-color")}
            >
              Charts
            </Typography>
            <Item
              title="Weight History"
              icon={<TimelineIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              className="sign-out-button"
              title="Sign Out"
              icon={<LogoutIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
