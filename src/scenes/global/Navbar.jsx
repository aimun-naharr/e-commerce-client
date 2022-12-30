import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton } from "@mui/material";
import { PersonOutline, ShoppingBagOutlined, MenuOutlined, SearchOutlined } from "@mui/icons-material";
import { shades } from "../../theme";
import { useNavigate } from "react-router-dom";
import { setIsCartOpen } from "../../state/cartSlice";
const Navbar = () => {
     const dispatch=useDispatch()
        const navigate = useNavigate();
const cart=useSelector(state=>state.cart.cart)
const isCartOpen = useSelector((state) => state.cart.isCartOpen);
console.log(isCartOpen);

        return (
                // Outer Box
                <Box  display="flex" alignItems="center" width="100%" height="60px" position="fixed" top="0" left="0" zIndex="1">
                        {/* Inner box */}
                        <Box position='relative' display="flex" alignItems="center" justifyContent="justify-between" width="80%" margin="auto">
                         <Box color={shades.secondary[500]} sx={{'&:hover': {cursor: 'pointer'}}} onClick={()=>navigate('/')}>E-commerce</Box>
                         <Box display='flex'
                         justifyContent='space-between'
                         columnGap='20px'
                         position='absolute'
                        right='0'
                         zIndex='2'
                         >
                              <IconButton>
                                   <SearchOutlined/>
                              </IconButton>
                              <Badge
                              badgeContent={cart.length}
                              invisible={cart.length===0}
                              color='secondary'
                              sx={{
                                   '& .MuiBadge-badge':{
                                        right: 5,
                                        top: 5,
                                        padding: '0 4px',
                                        height: '14px',
                                        minWidth: '13px'
                                   }
                              }}
                              >
                                   
                              <IconButton onClick={()=>dispatch(setIsCartOpen({}))}>
                                   <ShoppingBagOutlined/>
                              </IconButton>
                              </Badge>
                              <IconButton>
                                   <PersonOutline/>
                              </IconButton>
                              <IconButton>
                                   <MenuOutlined/>
                              </IconButton>

                         </Box>
                        </Box>
                </Box>
        );
};

export default Navbar;
