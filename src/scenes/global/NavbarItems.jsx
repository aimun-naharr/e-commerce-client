import { Badge, Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, useMediaQuery } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {  useTheme } from '@mui/material/styles';
import {  DrawerHeader } from "./persistantDrawer";
import LogoutIcon from '@mui/icons-material/Logout';
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../state/authSlice";
import { useNavigate } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Link } from "react-router-dom";

const NavbarItems = ({open, setOpen}) => {
    const user=useSelector(state=>state.auth.userInfo)
	const isAdmin=useSelector(state=>state.auth.isAdmin)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    
    const drawerWidth = 260;
    const theme=useTheme()
   
	const handleDrawerClose = () => {
		setOpen(false);
	};
    return (
        <Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					"& .MuiDrawer-paper": {
						width: drawerWidth,
						boxSizing: "border-box",
					},
				}}
				variant="persistent"
				anchor="right"
				open={open}
			>
				<DrawerHeader>
					<IconButton onClick={handleDrawerClose}>{theme.direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}</IconButton>
				</DrawerHeader>
				<Box p={2} display='flex' alignItems={'center'} justifyContent='space-between'>
                    <Typography variant="h6">{user?.firstName} {''} {user?.lastName}</Typography>
                    <IconButton onClick={()=>dispatch(logOut({navigate, setOpen}))}><LogoutIcon/></IconButton>
                </Box>
				<Divider/>
				<List  disablePadding>
					
						<ListItem >
						{
							isAdmin && 	<ListItemButton component={Link} to='admin/dashboard'>
							<ListItemIcon><DashboardIcon/></ListItemIcon>
							<ListItemText primary={'Dashboard'} /> 
						</ListItemButton>
						}
						</ListItem>
					
				</List>
				
			</Drawer>
    );
};

export default NavbarItems;