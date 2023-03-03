import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { Link } from "react-router-dom";

const Dashboard = () => {
	const drawerWidth = 300;
    const isNonMobile = useMediaQuery("(min-width:600px)");
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};
const sidebarLinks=[
	{
		name: 'Users',
		link: '/',
		icon: AccountCircleIcon
	},
	{
		name: 'Add Product',
		link: '/add-product',
		icon: PlaylistAddIcon
	},

]
	const Sidebar = () => {
		return (
			<Box sx={{ width: drawerWidth, }}>
				<Divider />
				<List>
					{sidebarLinks.map((item, index) => (
						<ListItem sx={{color: 'black'}} key={item.link} disablePadding component={Link} to={item.link}>
							<ListItemButton>
								 <ListItemIcon>
               <item.icon/>
                  </ListItemIcon> 
								<ListItemText primary={item.name} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Box>
		);
	};

	return (
		<Box width="80%" sx={{ mt: "60px ", display: "flex" }}>
			{
                isNonMobile && <Sidebar />
            }
            {
                !isNonMobile && <IconButton>
                    <MenuIcon/>
                </IconButton>
            }
		</Box>
	);
};

export default Dashboard;
