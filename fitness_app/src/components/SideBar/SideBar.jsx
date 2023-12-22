import React, { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import LogoutIcon from "@mui/icons-material/Logout";
import VisibilityIcon from "@mui/icons-material/Visibility";
import TimelineIcon from "@mui/icons-material/Timeline";
import styles from "./SideBar.modules.css";
import { supabase } from "../../supabase/client";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';


const Item = ({ title, to, icon, selected, onClick }) => {
	var style = getComputedStyle(document.body);

	return (
		<MenuItem
			active={selected === title}
			icon={icon}
			onClick={onClick}
			style={{color: style.getPropertyValue("--black-color")}}
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
			style={{color: style.getPropertyValue("--black-color")}}
			icon={icon}
			onClick={onClick}
		>
			<Typography>{title}</Typography>
			<Link to={to} />
		</MenuItem>
	);
};

const Sidebar = () => {
	var style = getComputedStyle(document.body);
	const navigate = useNavigate();
	const [isCollapsed, setIsCollapsed] = useState(false);
	const [selected, setSelected] = useState("Dashboard");

	const SignOut = () => {
		supabase.auth.signOut();
		navigate("/");
	};

	return (
		<div className="overlay-sidebar">
			<Box>
				<ProSidebar collapsed={isCollapsed}>
					<Menu iconShape='circle'>
						<MenuItem
							className={styles.menuBurgerButton}
							onClick={() => setIsCollapsed(!isCollapsed)}
							icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
						>
							{!isCollapsed && (
								<Box className={styles.boxSidebar}>
									<IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
										<MenuOutlinedIcon />
									</IconButton>
								</Box>
							)}
						</MenuItem>

						<Box paddingLeft={isCollapsed ? undefined : "10%"}>
							<Item title='Dashboard' icon={<HomeOutlinedIcon />} to='/' />
							<div className="sidebarTypograhy">
								<h3>History</h3>
							</div>
							<Item
								title='Weight History'
								icon={<PeopleOutlinedIcon />}
								selected={selected}
								setSelected={setSelected}
								to={"/user-weight-registry"}
							/>
							<div className="sidebarTypograhy">
								<h3>Session</h3>
							</div>
							<Item
								title='View Session'
								icon={<VisibilityIcon />}
								selected={selected}
								setSelected={setSelected}
								to={"/session-registry"}
							/>
							<div className="sidebarTypograhy">
								<h3>Registry</h3>
							</div>
							<Item
								title='Browse Exercises'
								icon={<TimelineIcon />}
								selected={selected}
								setSelected={setSelected}
								to={"/exercise-registry"}
							/>
							<div className="sidebarTypograhyBlog">
								<h3>Blog</h3>
							</div>
							<Item
								title='Read Articles'
								icon={<TimelineIcon />}
								selected={selected}
								setSelected={setSelected}
							/>
							<Item
								title='Write a Post'
								icon={<FitnessCenterIcon />}
								selected={selected}
								setSelected={setSelected}
							/>
    						<Typography
								className='sidebar-typography-account-settings'
								variant='h6'
								color={style.getPropertyValue("--light-grey-color")}
							>
								Account
							</Typography>
							<Item
								title='Account Settings'
								icon={<ManageAccountsIcon />}
								selected={selected}
								setSelected={setSelected}
								to={"/Account-Settings"}
							/>
							<SignOutItem
								className={styles.signOutButton}
								title='Sign Out'
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

