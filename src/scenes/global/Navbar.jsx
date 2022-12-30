import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton } from "@mui/material";
import { PersonOutline, ShoppingBagOutlined, MenuOutlined, SearchOutlined } from "@mui/icons-material";
import { shades } from "../../theme";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
        const navigate = useNavigate();

        return (
                // Outer Box
                <Box  display="flex" alignItems="center" width="100%" height="60px" position="fixed" top="0" left="0" zIndex="1">
                        {/* Inner box */}
                        <Box display="flex" alignItems="center" justifyContent="justify-between" width="80%" margin="auto">
                         <Box color={shades.secondary[500]} sx={{'&:hover': {cursor: 'pointer'}}} onClick={()=>navigate('/')}>E-commerce</Box>
                         <Box display='flex'
                         justifyContent='space-between'
                         columnGap='20px'
                         zIndex='2'
                         >
                              <IconButton>
                                   <SearchOutlined/>
                              </IconButton>
                              <IconButton>
                                   <ShoppingBagOutlined/>
                              </IconButton>
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
