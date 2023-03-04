import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { NavLink } from "react-router-dom";
import AllUsers from "./AllUsers";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
	const isNonMobile = useMediaQuery("(min-width:600px)");
	const drawerWidth = isNonMobile? '300': '10';
	const sidebarLinks = [
		{
			name: "Users",
			link: "/admin/dashboard",
			icon: AccountCircleIcon,
		},
		{
			name: "Add Product",
			link: "/admin/dashboard/add-product",
			icon: PlaylistAddIcon,
		},
	];
	const Sidebar = () => {
		return (
			<Box sx={{ minWidth: '15%'}}>
				<Divider />
				<List>
					{sidebarLinks.map((item, index) => (
						<ListItem sx={{ color: "black" }} key={item.link} disablePadding component={NavLink} to={item.link}>
							<ListItemButton>
								<ListItemIcon>
									<item.icon />
								</ListItemIcon>
								{
									isNonMobile && <ListItemText primary={item.name} />
								}
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Box>
		);
	};

	return (
		<Box width="100%" sx={{ mt: "60px ", display: "flex" }}>
			<Sidebar />
			<Outlet/>
		</Box>
	);
};

export default Dashboard;
