import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography} from "@mui/material";
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

const Item = ({ title, to, icon, selected, setSelected}) => {
  var style = getComputedStyle(document.body)

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

const Sidebar = ({supabase}) => {
  var style = getComputedStyle(document.body)
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
    sx={{
      "& .pro-sidebar-inner": {
        background: `${style.getPropertyValue("--white-color")} !important`,
        height: "100vh",
        overflow: "hidden",
      },
      "& .pro-icon-wrapper": {
        backgroundColor: "transparent !important",
      },
      "& .pro-inner-item": {
        padding: "10px 20px 5px 20px !important",
      },
      "& .pro-inner-item:hover": {
        color: "#868dfb !important",
      },
      "& .pro-inner-item:click": {
        color: "#ffffff !important",
      },
      "& .pro-menu-item.active": {
        color: "#ffffff !important",
      },
      "@media screen and (max-width: 768px)": {
        "& .pro-sidebar-inner": {
          background: `${style.getPropertyValue("--white-color")} !important`,
          height: "270vh",
          overflow: "hidden",
        },
        "& .pro-menu-item.click": {
          width: "100vh",
        },
      },
    }}
    
    
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="circle">

          {/* Menu Icon */}
          <MenuItem className="menu-burger-button"
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: style.getPropertyValue("--black-color"),
              
            }}
            sx ={{
              "@media screen and (max-width: 768px)": {
                  "& .pro-menu-item.click": {
                
                  },
                },
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
              variant="h6"
              color={style.getPropertyValue("--light-grey-color")}
              sx={{ m: "15px 0 5px 10px" }}
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
              variant="h6"
              color={style.getPropertyValue("--light-grey-color")}
              sx={{ m: "15px 0 5px 10px" }}
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
              variant="h6"
              color={style.getPropertyValue("--light-grey-color")}
              sx={{ m: "15px 0 5px 10px" }}
            >
              Charts
            </Typography>
            <Item
              title="Weight History"
              icon={<TimelineIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <br/>
            <br/>
            <Item
            title="Sign Out"
            icon={<LogoutIcon />}
            selected={selected}
            setSelected={setSelected}
            sx ={{
              "@media screen and (max-width: 768px)": {
                },
            }}
          />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;