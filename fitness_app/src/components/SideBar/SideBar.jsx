import React, { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import LogoutIcon from "@mui/icons-material/Logout";
import VisibilityIcon from "@mui/icons-material/Visibility";
import TimelineIcon from "@mui/icons-material/Timeline";

// Remove unncessary imports

const Item = ({ title, to, icon, selected, setSelected, onClick }) => {
  var style = getComputedStyle(document.body);

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: style.getPropertyValue("--black-color"),
      }}
      icon={icon}
      onClick={onClick}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};
const SignOutItem = ({ title, to, icon, selected, setSelected, onClick }) => {
  var style = getComputedStyle(document.body);

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: style.getPropertyValue("--black-color"),
      }}
      icon={icon}
      onClick={onClick}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = ({ supabase, session }) => {
  var style = getComputedStyle(document.body);
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  const SignOut = () => {
    console.log("works");
    supabase.auth.signOut();
    navigate("/");
  };

  return (
    <div className="overlay-sidebar">
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
              <Item title="Dashboard" icon={<HomeOutlinedIcon />} to="/" />

              <Typography
                className="sidebar-typography-history"
                variant="h6"
                color={style.getPropertyValue("--light-grey-color")}
              >
                History
              </Typography>
              <Item
                title="Weight History"
                icon={<PeopleOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                to={"/user-weight-registry"}
              />
              <Typography
                className="sidebar-typography"
                variant="h6"
                color={style.getPropertyValue("--light-grey-color")}
              >
                Session
              </Typography>
              <Item
                title="View Session"
                icon={<VisibilityIcon />}
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
              <Typography
                className="sidebar-typography-blog"
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

              <SignOutItem
                className="sign-out-button"
                title="Sign Out"
                icon={<LogoutIcon />}
                selected={selected}
                setSelected={setSelected}
                onClick={() => SignOut()}
              />
            </Box>
          </Menu>
        </ProSidebar>
      </Box>
    </div>
  );
};
export default Sidebar;

// Inline Styles:
// it's essential to balance this concern with the practicality of the situation.
// In some cases, using inline styles might be necessary, I get it but it's not good practice.
// Again USE CSS MODULES

// Use of Box Component:
// We discussed this several times
// It's good to be cautious about unnecessary or excessive use of components.
// If the Box component doesn't add value in a particular context, it might be better to use regular HTML elements or other appropriate components.
// If you don't understand a component do not use it, build it yourself or it will hinder you
