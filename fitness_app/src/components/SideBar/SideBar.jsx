import React, { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography } from "@mui/material";
import { Link, Navigate } from "react-router-dom";
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
import AddExercise from "../AddExercise/AddExercise";
import AddUserWeight from "../AddUserWeight/AddUserWeight";
import AddSubSession from "../AddSubSession/AddSubSession";
import { useModalState } from "../../hooks/useModalState";
import ExerciseRegistry from "../ExerciseRegistry/ExerciseRegistry";

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

const Sidebar = ({ supabase, session }) => {
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
              History
            </Typography>
            <Item
              title="View Weight History"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              to={"/user-weight-registry"}
            />
            <Item
              title="Add Weight Entry"
              icon={<SportsGymnasticsIcon />}
              selected={selected}
              setSelected={setSelected}
              to={`/user-weight-registry?clickIdentifier=${"adduserweight"}`} 
            />
            <Typography
              className="sidebar-typography"
              variant="h6"
              color={style.getPropertyValue("--light-grey-color")}
            >
              Sessions
            </Typography>
            <Item
              title="View Session"
              icon={<VisibilityIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Add New Session"
              icon={<AddIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              className="sidebar-typography"
              variant="h6"
              color={style.getPropertyValue("--light-grey-color")}
            >
              Registry
            </Typography>
            <Item
              title="Browse Exercises"
              icon={<TimelineIcon />}
              selected={selected}
              setSelected={setSelected}
              to={"/exercise-registry"}
            />
              <Item
              title="Add New Exercises"
              icon={<FitnessCenterIcon />}
              selected={selected}
              setSelected={setSelected} 
              to={`/exercise-registry?clickIdentifier=${"addexercise"}`}  // For Elijah 
            />
               <Typography
              className="sidebar-typography"
              variant="h6"
              color={style.getPropertyValue("--light-grey-color")}
            >
              Blog
            </Typography>
            <Item
              title="Read Articles"
              icon={<TimelineIcon />}
              selected={selected}
              setSelected={setSelected}
            />
              <Item
              title="Write a Post"
              icon={<FitnessCenterIcon />}
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