import React, { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography } from "@mui/material";
import { Link, Navigate, useNavigate } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import LogoutIcon from "@mui/icons-material/Logout";
import VisibilityIcon from "@mui/icons-material/Visibility";
import TimelineIcon from "@mui/icons-material/Timeline";
import styles from "./SideBar.modules.css";
import { supabase } from "../../supabase/client";

const Item = ({ title, to, icon, selected, setSelected, onClick }) => {
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
		<div className={styles.overlaySidebar}>
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

							<Typography
								className={styles.sidebarTypographyHistory}
								variant='h6'
							>
								History
							</Typography>
							<Item
								title='Weight History'
								icon={<PeopleOutlinedIcon />}
								selected={selected}
								setSelected={setSelected}
								to={"/user-weight-registry"}
							/>
							<Typography
								className={styles.sidebarTypography}
								variant='h6'
							>
								Session
							</Typography>
							<Item
								title='View Session'
								icon={<VisibilityIcon />}
								selected={selected}
								setSelected={setSelected}
								to={"/session-registry"}
							/>
							<Typography
								className={styles.sidebarTypography}
								variant='h6'
							>
								Registry
							</Typography>
							<Item
								title='Browse Exercises'
								icon={<TimelineIcon />}
								selected={selected}
								setSelected={setSelected}
								to={"/exercise-registry"}
							/>
							<Typography
								className={styles.sidebarTypographyBlog}
								variant='h6'
							>
								Blog
							</Typography>
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

// Inline Styles:
// it's essential to balance this concern with the practicality of the situation.
// In some cases, using inline styles might be necessary, I get it but it's not good practice.
// Again USE CSS MODULES
