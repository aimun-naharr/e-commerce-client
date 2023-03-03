import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Box,   IconButton,Typography, useMediaQuery } from "@mui/material";

import { PersonOutline, ShoppingBagOutlined, MenuOutlined, SearchOutlined } from "@mui/icons-material";
import { shades } from "../../theme";
import {  useTheme } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { setIsCartOpen } from "../../state/cartSlice";
import CartModal from "./CartModal";

import { Link } from "react-router-dom";
import { AppBarContainer, DrawerHeader } from "./persistantDrawer";
import NavbarItems from "./NavbarItems";

const Navbar = () => {
	const isNonMobile = useMediaQuery("(min-width:600px)");
	const [open, setOpen] = React.useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const cart = useSelector((state) => state.cart.cart);
const user=useSelector(state=>state.auth.userInfo)
console.log(user)
	const isCartOpen = useSelector((state) => state.cart.isCartOpen);
	const handleDrawerOpen = () => {
		setOpen(true);
	};
	
	
	return (
		// Outer Box
		<Box display="flex" alignItems="center" width="100%" height="60px" position="fixed" top="0" left="0" zIndex="1">
			{/* Inner box */}
			<Box position="relative" display="flex" alignItems="center" justifyContent="justify-between" width={isNonMobile? '80%': '90%'} margin="auto" >
				<Box color={shades.secondary[500]} sx={{ "&:hover": { cursor: "pointer" } }} onClick={() => navigate("/")}>
					<Typography variant="h4" fontWeight={700}>
						{" "}
						TrendWear
					</Typography>
				</Box>
				<Box display="flex" justifyContent="center" columnGap={!isNonMobile ? "0" : "30px"} position='fixed' right="0" zIndex="0"  sx={{width: isNonMobile? '200': 0}}>
					<IconButton>
						<SearchOutlined />
					</IconButton>
					<Badge
						badgeContent={cart.length}
						invisible={cart.length === 0}
						color="secondary"
						sx={{
							"& .MuiBadge-badge": {
								right: 5,
								top: 5,
								padding: "0 4px",
								height: "14px",
								minWidth: "13px",
							},
						}}
					>
						<IconButton onClick={() => dispatch(setIsCartOpen({}))}>
							<ShoppingBagOutlined />
						</IconButton>
					</Badge>
					<Link to="login">
						<IconButton>
							<PersonOutline />
						</IconButton>
					</Link>
					
					{user && <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen}  sx={{  ...(open && { display: "none" }) }}>
						<MenuOutlined />
					</IconButton>}
					
					<NavbarItems open={open} setOpen={setOpen}/>
				</Box>
			</Box>
			{isCartOpen && <CartModal />}
		</Box>
	);
};

export default Navbar;
